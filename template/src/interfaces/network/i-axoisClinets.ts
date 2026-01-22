export interface ApiError {
  message: string;
  status?: number;
  data?: any;
  originalError?: any;
}

export interface QueryParams {
  [key: string]: string | number | boolean | undefined | null;
}

export interface RequestConfig {
  skipAuth?: boolean;
  retry?: boolean;
  contentType?: string;
  headers?: Record<string, string>;
}