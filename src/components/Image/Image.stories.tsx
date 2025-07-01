import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Image } from "./index";

const meta = {
  component: Image,
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 512,
    height: 512,
    href: "https://placehold.co/512x512",
    alt: "Label",
  },
};

export default meta;
