export interface KnowageReportConfig {
  documentLabel: string;
  title?: string;
  executionRole?: string;
  displayToolbar?: boolean;
  displaySliders?: boolean;
  parameters?: Record<string, string | number | boolean>;
  iframe?: {
    id?: string;
    style?: string;
    width?: string;
    height?: string;
  };
}
