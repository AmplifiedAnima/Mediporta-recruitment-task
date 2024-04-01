export interface TagInterface {
  name: string;
  count: number;
}

export interface TagsApiResponse {
  items: TagInterface[];
  has_more: boolean;
}

export interface ApiError {
  response?: Response;
  message?: string;
}

export interface DataHookInterface {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
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
}
