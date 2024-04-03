import { TagsApiResponse } from "./TagsApi.interface";

export interface DataHookInterface {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number | "";
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  inName: string;
  setInName: React.Dispatch<React.SetStateAction<string>>;
  fetchTags: () => Promise<TagsApiResponse>;
  triggerFetch: boolean;
  setTriggerFetch: React.Dispatch<React.SetStateAction<boolean>>;
  notificationSnackOpen: boolean; // Renamed for consistency
  setNotificationSnackOpen: React.Dispatch<React.SetStateAction<boolean>>;
  notificationSnackMessage: string; // Renamed for consistency
  setNotificationSnackMessage: React.Dispatch<React.SetStateAction<string>>;
  errorSnackOpen: boolean;
  setErrorSnackOpen: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}
