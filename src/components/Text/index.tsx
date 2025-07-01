import React from "react";

import classNames from "classnames";

export type Type = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "a";

export type Variant = "dark" | "light" | "accent" | "muted";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  type?: Type;
  bold?: boolean;
  upperCase?: boolean;
  variant?: Variant;
  href?: string;
  blank?: boolean;
  onClick?: () => void;
}

const HeadingClassName = {
  h1: "text-5xl", // 48px
  h2: "text-3xl", // 30px
  h3: "text-xl", // 20px
  h4: "text-lg", // 18px
  p: "text-base", // 16px
  span: "text-base", // 16px
  a: "text-base", // 16px
};

const VariantClassName = {
  dark: "text-black",
  light: "text-white",
  accent: "text-gray-700",
  muted: "text-gray-600",
};

export const Text = ({
  className: initialClassName,
  type = "span",
  bold = false,
  upperCase,
  variant = "dark",
  href,
  blank,
  onClick,
  children,
}: Props) => {
  const className = classNames(
    initialClassName,
    HeadingClassName[type],
    VariantClassName[variant],
    bold ? "font-bold" : undefined,
    onClick ? "cursor-pointer" : undefined,
    upperCase ? "uppercase" : undefined
  );
  return React.createElement(
    type,
    { className, href, onClick, target: blank ? "_blank" : undefined },
    children
  );
};
