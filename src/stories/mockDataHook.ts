import { DataHookInterface } from "../interfaces/DataHook.interface";
import { action } from "@storybook/addon-actions";
import { mockDataTags } from "./TagListMockData";

export const mockDataHook: DataHookInterface = {
  page: 1,
  setPage: action("setPage"),
  pageSize: 50,
  setPageSize: action("setPageSize"),
  order: "desc",
  setOrder: action("setOrder"),
  sort: "popular",
  setSort: action("setSort"),
  inName: "javascript",
  setInName: action("setInName"),
  fetchTags: () => Promise.resolve(mockDataTags),
  triggerFetch: true,
  setTriggerFetch: action("setTriggerFetch"),
  snackOpen: false,
  setSnackOpen: action("setSnackOpen"),
  snackMessage: "",
  setSnackMessage: action("setSnackMessage"),
  errorMessage: "",
  setErrorMessage: action("setErrorSnackMessage"),
  errorSnackOpen: false,
  setErrorSnackOpen: action("setErrorSnackOpen"),
};

export const mockDataHookEmpty: DataHookInterface = {
  ...mockDataHook,
  page: 0,
  setPage: action("setPage"),
  pageSize: "",
  setPageSize: action("setPageSize"),
  order: "",
  setOrder: action("setOrder"),
  sort: "",
  setSort: action("setSort"),
  inName: "",
  setInName: action("setInName"),
  fetchTags: () => Promise.resolve(mockDataTags),
};
