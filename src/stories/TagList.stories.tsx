import { Meta, StoryObj } from "@storybook/react";
import { TagList } from "../components/TagList/TagList";
import { DataHookInterface } from "../interfaces/DataHook.interface";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockDataHook } from "./mockDataHook";

export default {
  title: "Components/TagList",
  component: TagList,
  // Add a description for the entire story
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

// Story for the default state of the TagList component
export const Default = Template;

// Add comments to explain the purpose of the story
Default.storyName = "Default TagList";
Default.parameters = {
  docs: {
    description: {
      story: "A default TagList component with no tags.",
    },
  },
};
