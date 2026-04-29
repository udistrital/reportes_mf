import { APP_BASE_HREF } from '@angular/common';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

interface MenuItem {
  Url?: string;
  Params?: Record<string, string>;
  Opciones?: MenuItem[];
}

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): boolean => {
  const baseHref = inject(APP_BASE_HREF, { optional: true }) ?? '';
  const menuPermissions = parseMenuPermissions(localStorage.getItem('menu'));

  if (!menuPermissions) {
    console.warn('No se encontraron permisos de menu para validar la ruta.');
    return false;
  }

  const candidatePaths = getCandidatePaths(state.url, baseHref);
  const hasPermission = candidatePaths.some((path) =>
    checkUrlExists(menuPermissions, path, route.params),
  );

  if (!hasPermission) {
    console.warn('El usuario no tiene permiso para acceder a la ruta:', state.url);
  }

  return hasPermission;
};

function parseMenuPermissions(menuInfo: string | null): MenuItem[] | null {
  if (!menuInfo) {
    return null;
  }

  try {
    return JSON.parse(atob(menuInfo)) as MenuItem[];
  } catch {
    return null;
  }
}

function getCandidatePaths(stateUrl: string, baseHref: string): string[] {
  const statePath = normalizePath(stateUrl.split('?')[0] ?? '');
  const basePath = normalizePath(baseHref);
  const pathWithBase = normalizePath(`${basePath}/${statePath}`);
  const browserPath = normalizePath(window.location.pathname);

  return Array.from(new Set([statePath, pathWithBase, browserPath]));
}

function checkUrlExists(
  menuItems: MenuItem[],
  targetUrl: string,
  params: Record<string, string>,
): boolean {
  return menuItems.some((item) => {
    if (normalizePath(item.Url ?? '') === targetUrl && checkParams(item.Params, params)) {
      return true;
    }

    if (item.Opciones?.length) {
      return checkUrlExists(item.Opciones, targetUrl, params);
    }

    return false;
  });
}

function checkParams(
  expectedParams: Record<string, string> | undefined,
  actualParams: Record<string, string>,
): boolean {
  if (!expectedParams) {
    return true;
  }

  return Object.entries(expectedParams).every(([key, value]) => actualParams[key] === value);
}

function normalizePath(path: string): string {
  const normalized = `/${path}`.replace(/\/+/g, '/');
  return normalized.length > 1 ? normalized.replace(/\/$/, '') : normalized;
}
