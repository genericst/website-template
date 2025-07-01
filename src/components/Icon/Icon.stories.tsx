import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Icon } from "./index";

const meta = {
  component: Icon,
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "accent",
    plate: false,
    name: "pied-piper-hat",
  },
  argTypes: {
    size: {
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
  },
};

export default meta;
