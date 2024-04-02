import { Meta, StoryObj } from "@storybook/react";
import App from "../App";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockDataHook } from "./mockDataHook";

export default {
  title: "App",
  component: App,
} as Meta<typeof App>;

const queryClient = new QueryClient();

const Template: StoryObj<typeof App> = {
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
