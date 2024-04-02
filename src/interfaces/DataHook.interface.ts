import { TagsApiResponse } from "./TagsApi.interface";

export interface DataHookInterface {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number | string;
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
  snackOpen: boolean;
  setSnackOpen: React.Dispatch<React.SetStateAction<boolean>>;
  snackMessage: string;
  setSnackMessage: React.Dispatch<React.SetStateAction<string>>;
  errorSnackOpen: boolean;
  setErrorSnackOpen: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}
