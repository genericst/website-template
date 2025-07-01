"use client";

import NextImage from "next/image";

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
  href: string;
  alt: string;
}

export const Image = ({ className, width, height, href, alt }: Props) => {
  const isResponsive = !width || !height;
  const style = {
    objectFit: isResponsive ? "contain" : "cover",
    ...(isResponsive
      ? {}
      : {
          width: `${width}px`,
          height: `${height}px`,
          maxWidth: "100vw",
          maxHeight: "100vh",
        }),
  } as const;
  return (
    <NextImage
      src={href}
      alt={alt}
      className={className}
      {...(isResponsive ? { fill: true } : { width, height })}
      style={style}
      priority
      onContextMenu={(event) => event.preventDefault()}
    />
  );
};
