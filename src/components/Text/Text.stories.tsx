import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Text } from "./index";

const meta = {
  component: Text,
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "span",
    bold: false,
    upperCase: false,
    variant: "dark",
    href: "",
    onClick: () => {},
    children: "Text",
  },
  argTypes: {
    type: {
      control: "select",
    },
    variant: {
      control: "select",
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    children: {
      control: "text",
      name: "value",
    },
  },
};

export default meta;
