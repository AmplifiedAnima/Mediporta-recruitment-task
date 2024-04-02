import { TagInterface } from "./Tag.interface";

export interface TagsApiResponse {
  items: TagInterface[];
  has_more: boolean;
}

export interface ApiResponseError {
  error_id?: number;
  error_message?: string;
  error_name?: string;
}

export interface ApiError {
  response?: Response;
  message?: string;
  details?: ApiResponseError;
}
