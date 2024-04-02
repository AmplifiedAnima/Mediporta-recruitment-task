import { Meta, StoryObj } from "@storybook/react";
import { TagList } from "../components/TagList/TagList";
import { DataHookInterface } from "../interfaces/DataHook.interface";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockDataHook } from "./mockDataHook";

export default {
  title: "Components/TagList",
  component: TagList,
  parameters: {
    componentSubtitle: "A component to display a list of tags.",
  },
} as Meta<typeof TagList>;

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

Default.storyName = "Default TagList";
Default.parameters = {
  docs: {
    description: {
      story: "A default TagList component with no tags.",
    },
  },
};

export const ErrorStory: StoryObj<{ dataHook: DataHookInterface }> = {
  args: {
    dataHook: {
      ...mockDataHook,
      fetchTags: () =>
        Promise.reject({
          message: "Simulated error message",
          details: {
            error_id: 500,
            error_name: "Internal Server Error",
            error_message: "An error occurred while fetching tags.",
          },
        }),
      errorSnackOpen: true,
      errorMessage: "An error occurred while fetching tags.",
      setErrorSnackOpen: () => {},
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

ErrorStory.storyName = "TagList with Error";
ErrorStory.parameters = {
  docs: {
    description: {
      story: "Displays the TagList component in an error state.",
    },
  },
};
