import { action } from "@storybook/addon-actions";
import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Header } from "../components/Header/Header";
import { TagList } from "../components/TagList/TagList";

import App from "../App";
import { DataHookInterface } from "../interfaces/DataHook.interface";
import { mockDataTags } from "./TagListMockData";
import { QueryClient, QueryClientProvider } from "react-query";

export default {
  title: "App",
  component: App,
} as Meta<typeof App>;
const mockDataHook: DataHookInterface = {
  page: 1,
  setPage: action("setPage"),
  pageSize: 10,
  setPageSize: action("setPageSize"),
  order: "desc",
  setOrder: action("setOrder"),
  sort: "popular",
  setSort: action("setSort"),
  inName: " ",
  setInName: action("setInName"),
  fetchTags: () => Promise.resolve(mockDataTags), // Use your static mock data here
  triggerFetch: false,
  setTriggerFetch: action("setTriggerFetch"),
};
const queryClient = new QueryClient();

const Template: StoryObj<{ dataHook: DataHookInterface }> = {
  args: {
    dataHook: mockDataHook,
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Header dataHook={mockDataHook} />
        <TagList dataHook={mockDataHook} />
      </QueryClientProvider>
    ),
  ],
};

export const Default = Template;
