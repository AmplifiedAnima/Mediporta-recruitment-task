import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/system";
import { Header } from "../components/Header/Header";
import { DataHookInterface } from "../interfaces/DataHook.interface";
import { mockDataTags } from "./TagListMockData";

export default {
  title: "Components/Header",
  component: Header,
} as Meta<typeof Header>;

// Mock DataHookInterface implementation for Storybook
const mockDataHook: DataHookInterface = {
  page: 1,
  setPage: action("setPage"),
  pageSize: 10,
  setPageSize: action("setPageSize"),
  order: "desc",
  setOrder: action("setOrder"),
  sort: "popular",
  setSort: action("setSort"),
  inName: "",
  setInName: action("setInName"),
  fetchTags: () => Promise.resolve(mockDataTags), // Use your static mock data here
  triggerFetch: false,
  setTriggerFetch: action("setTriggerFetch"),
};

// Template for the Header story
const Template: StoryObj<{ dataHook: DataHookInterface }> = {
  args: {
    dataHook: mockDataHook,
  },
  // Optionally, you can add decorators if needed
};

// Default story for the Header
export const Default = Template;
