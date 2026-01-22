import type { ApiError, QueryParams, RequestConfig } from '../interfaces/network/i-axoisClinets';
import axiosInstance from '../configs/axiosConfigs';

class AxiosClient {
  async get<T = any>(
    url: string,
    params?: QueryParams,
    config?: RequestConfig
  ): Promise<T> {
    try {
      const axiosConfig = {
        ...config,
        params,
      };
      const response = await axiosInstance.get(url, axiosConfig);
      // console.log(url);
      // console.log(response);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<T> {
    try {
      const response = await axiosInstance.post(
        url,
        data,
        config
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): ApiError {
    if (error.message && error.status) {
      return error;
    }

    if (!error.response) {
      return {
        message: 'Нет соединения с сервером. Проверьте интернет-соединение.',
        originalError: error,
      };
    }

    const status = error.response?.status;
    let message = 'Произошла ошибка';

    switch (status) {
      case 400:
        message = 'Некорректный запрос';
        break;
      case 401:
        message = 'Требуется авторизация';
        break;
      case 403:
        message = 'Доступ запрещен';
        break;
      case 404:
        message = 'Ресурс не найден';
        break;
      case 422:
        message = 'Ошибка валидации';
        break;
      case 429:
        message = 'Слишком много запросов';
        break;
      case 500:
        message = 'Внутренняя ошибка сервера';
        break;
      case 502:
        message = 'Плохой шлюз';
        break;
      case 503:
        message = 'Сервис временно недоступен';
        break;
      case 504:
        message = 'Таймаут шлюза';
        break;
      default:
        message = error.response?.data?.message || 'Неизвестная ошибка';
    }

    return {
      message,
      status,
      data: error.response?.data,
      originalError: error,
    };
  }
}

export const api = new AxiosClient();