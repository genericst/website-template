import classNames from "classnames";
import { Text } from "../Text";

export type Name = "pied-piper-hat";

export type Size = "sm" | "md" | "lg" | "xl";

export type Variant = "accent" | "dark" | "light" | "muted";

const ICONS_PATH = "icons";
const SPRITE_NAME = "sprite.svg";

const SizeClass: Record<Size, string> = {
  sm: "size-5", // 20px
  md: "size-6", // 24px
  lg: "size-8", // 32px
  xl: "size-32", // 128px
};

const VariantClass: Record<Variant, string> = {
  accent: "fill-gray-700",
  dark: "fill-black",
  light: "fill-white",
  muted: "fill-gray-600",
};

interface Props extends React.HTMLAttributes<SVGElement> {
  name: Name;
  size?: Size;
  variant?: Variant;
  plate?: boolean;
  href?: string;
  onClick?: () => void;
}

export const Icon = ({
  className: initialClassName,
  name,
  size = "md",
  variant = "accent",
  plate,
  href,
  onClick,
}: Props) => {
  const sizeClass = SizeClass[size];
  const variantClass = VariantClass[variant];
  const className = classNames(
    initialClassName,
    sizeClass,
    variantClass,
    plate ? "rounded-full p-2 bg-orange-50" : undefined
  );
  const icon = (
    <svg className={className} onClick={onClick}>
      <use href={`/${ICONS_PATH}/${SPRITE_NAME}#${name}`} />
    </svg>
  );
  return href ? (
    <Text type="a" href={href} blank>
      {icon}
    </Text>
  ) : (
    icon
  );
};
