import type { ElementType, ReactNode } from "react";
import clsx from "clsx";

import type { PolymorphicComponentProp } from "../../types";

import s from "./Button.module.scss";

console.log(s);

export type ButtonVariant =
  | "additional"
  | "primary-black"
  | "primary"
  | "secondary"
  | "tertiary"
  | "underline";
export type ButtonSize = "medium" | "small";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconComponent?: ReactNode;
  fullWidth?: boolean;
  bold?: boolean;
  hoverStrokeIcon?: boolean;
  disabled?: boolean;
  loading?: boolean;
  width?: number;
  testId?: string;
}

export const Button = <C extends ElementType = "button">({
  as,
  iconComponent: IconComponent,
  variant = "primary",
  size = "medium",
  children,
  className,
  fullWidth,
  bold = true,
  hoverStrokeIcon = false,
  disabled,
  loading = false,
  width,
  style,
  testId,
  ...props
}: PolymorphicComponentProp<C, ButtonProps>) => {
  const Component = as ?? "button";

  const buttonClasses = clsx(s["y-button"], className, {
    [s["y-button--full-width"]]: fullWidth,
    [s["y-button--bold"]]: bold,
    [s["hover-stroke-icon"]]: hoverStrokeIcon,
    [s["y-button--icon"]]: !!IconComponent,
    [s["y-button--disabled"]]: disabled,
    [s["y-button--loading"]]: loading,
    [s[`y-button--${size}`]]: size,
    [s[`y-button--${variant}`]]: variant,
  });

  const contentClasses = clsx(s["y-button__content"], {
    [s["y-button__content--icon"]]: !!IconComponent,
    [s["y-button__content--overview"]]: width,
  });

  return (
    <Component
      className={buttonClasses}
      data-testid={testId}
      style={{ width, ...style }}
      {...props}
    >
      <span className={contentClasses}>{IconComponent ?? children}</span>
    </Component>
  );
};
