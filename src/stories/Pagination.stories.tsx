import { Meta, StoryObj } from "@storybook/react";
import PaginationTagList from "../components/TagList/Pagination/PaginationTagList";
import { DataHookInterface } from "../interfaces/DataHook.interface";
import { TagsApiResponse } from "../interfaces/TagsApi.interface";
import { mockDataHook } from "./mockDataHook";
import { mockDataTags } from "./TagListMockData";

export default {
  title: "Components/PaginationTagList",
  component: PaginationTagList,
  parameters: {
    componentSubtitle: "A component for paginating through a list of tags.",
  },
} as Meta<typeof PaginationTagList>;

export const DefaultPagination: StoryObj<{
  dataHook: DataHookInterface;
  data: TagsApiResponse;
}> = {
  args: {
    dataHook: mockDataHook,
    data: mockDataTags,
  },
};
export const PaginationWithDifferentNumber: StoryObj<{
  dataHook: DataHookInterface;
  data: TagsApiResponse;
}> = {
  args: {
    dataHook: { ...mockDataHook, page: 8 },
    data: mockDataTags,
  },
};

DefaultPagination.storyName = "Default";
DefaultPagination.parameters = {
  docs: {
    description: {
      story: "The default state of the PaginationTagList component",
    },
  },
};
