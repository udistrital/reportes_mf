# Reportes MF

Micro cliente para la gestión y visualización de reportes, parte del ecosistemas de clientes MF. Este proyecto está desarrollado con Angular y funciona como un microfrontend integrado con Single-SPA.

## Especificaciones Técnicas

### Tecnologías Implementadas y Versiones

- [Angular](https://angular.dev/) 21.2.8
  - Incluye Common, Compiler, Core, Forms, Platform-Browser y Router
- [Single-spa-angular](https://single-spa.js.org/docs/ecosystem-angular/) 21.0.1
- [ngx-translate](https://github.com/ngx-translate/core) 17.0.0
  - Incluye ngx-translate Http Loader
- [RxJS](https://rxjs.dev/guide/overview) ~7.8.0
- [tslib](https://github.com/Microsoft/tslib) ^2.3.0
- [dotenv](https://github.com/motdotla/dotenv) ^17.4.2
- [TypeScript](https://www.typescriptlang.org/) ~5.9.2
- [Vitest](https://vitest.dev/) ^4.0.8
- [jsdom](https://github.com/jsdom/jsdom) ^28.0.0
- [Angular Builders Custom Webpack](https://www.npmjs.com/package/@angular-builders/custom-webpack) ^21.0.3
- [Prettier](https://prettier.io/) ^3.8.1

### Variables de Entorno

```bash
export USER_KNOWAGE={user}
export PASSWORD_KNOWAGE={password}
```

Estas variables se utilizan para actualizar la configuración de acceso a Knowage antes de iniciar o compilar el proyecto.

## Ejecución del Proyecto

Este proyecto hace parte de una infraestructura de microfrontend implementada con Single-SPA. Para ejecutarlo correctamente, es necesario levantar primero las aplicaciones base y luego este proyecto.

### Root

El Root contiene la lógica de Single-SPA.

#### Pasos para la Ejecución del Root

1. Clonar el repositorio del Root:

	```bash
	git clone https://github.com/udistrital/sga_cliente_root
	```

2. Acceder al directorio del repositorio clonado:

	```bash
	cd sga_cliente_root
	```

3. Instalar las dependencias:

	```bash
	npm install
	```

4. Iniciar el Root:

	```bash
	npm start
	```

### Core

El Core contiene componentes generales que construyen el layout y administran aspectos como la autenticación.

#### Pasos para la Ejecución del Core

1. Clonar el repositorio del Core:

	```bash
	git clone https://github.com/udistrital/core_mf_cliente
	```

2. Acceder al directorio del repositorio clonado:

	```bash
	cd core_mf_cliente
	```

3. Instalar las dependencias:

	```bash
	npm install
	```

4. Iniciar el Core:

	```bash
	npm start
	```

### Ejecución de ReportesMf

Una vez que el Root y el Core estén en ejecución, se procede a clonar y ejecutar este proyecto.

#### Pasos para la Ejecución

1. Clonar este repositorio:

	```bash
	git clone https://github.com/udistrital/reportes-mf
	```

2. Acceder al directorio del repositorio clonado:

	```bash
	cd reportes-mf
	```

3. Definir las variables de entorno requeridas por Knowage:

	```bash
	export USER_KNOWAGE={user}
	export PASSWORD_KNOWAGE={password}
	```

4. Cargar las variables de entorno antes de iniciar el proyecto:

	```bash
	source .env
	```

   Si no cuentas con un archivo `.env`, puedes crear uno a partir de `example.env` y ubicar allí las variables requeridas.

5. Instalar las dependencias:

	```bash
	npm install
	```

6. Iniciar el proyecto:

	```bash
	npm start
	```

7. Abrir la aplicación en el puerto configurado por el proyecto:

	```bash
	http://localhost:4226/
	```

Con estos pasos, se tendrán las partes mínimas necesarias para ejecutar el proyecto en un entorno local.

## Estado CI

No se ha configurado un tablero de estado CI en este repositorio.
