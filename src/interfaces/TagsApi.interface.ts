import { TagInterface } from "./Tag.interface";

export interface TagsApiResponse {
  items: TagInterface[];
  has_more: boolean;
}

export interface ApiError {
  response?: Response;
  message?: string;
}
