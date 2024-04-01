import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { TagList } from "../components/TagList/TagList";
import { DataHookInterface } from "../interfaces/DataHook.interface";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockDataTags } from "./TagListMockData";

export default {
  title: "Components/TagList",
  component: TagList,
} as Meta<typeof TagList>;

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
  fetchTags: () => Promise.resolve(mockDataTags),
  triggerFetch: true,
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
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export const Default = Template;
