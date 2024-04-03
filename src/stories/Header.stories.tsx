import { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header/Header";
import { DataHookInterface } from "../interfaces/DataHook.interface";
import { mockDataHook, mockDataHookEmpty } from "./mockDataHook";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    componentSubtitle:
      "A customizable header component with input and buttons.",
  },
} as Meta<typeof Header>;

// Define the template for the Header component story
const Template: StoryObj<{ dataHook: DataHookInterface }> = {
  args: {
    dataHook: mockDataHookEmpty,
  },
};

export const Default = Template;

export const FilledState: StoryObj<{ dataHook: DataHookInterface }> = (
  args: any
) => <Header {...args} />;
FilledState.args = {
  dataHook: mockDataHook,
};
export const WithNotification: StoryObj<{ dataHook: DataHookInterface }> = (
  args: any
) => <Header {...args} />;
WithNotification.args = {
  dataHook: {
    ...mockDataHook,
    pageSize: 0, // Set to 0 to show the notification
    triggerFetch: true,
    notificationSnackOpen: true,
    notificationSnackMessage: "Page size must be between 1 and 100.",
  },
};
WithNotification.storyName = "Header with Notification";
WithNotification.parameters = {
  docs: {
    description: {
      story:
        "Displays a notification if page is 0 or above 100 and when fetch is true.",
    },
  },
};
// Story for the Header component with no pre-filled input

FilledState.storyName = "Header with Filled Input";
FilledState.parameters = {
  docs: {
    description: {
      story: "A header with pre-filled input and a selected page size.",
    },
  },
};
