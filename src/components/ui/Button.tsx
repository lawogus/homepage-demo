import React from "react";
import { cn } from "../../utils/cn";

type SharedProps = {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonElementProps = SharedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AnchorElementProps = SharedProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonElementProps | AnchorElementProps;

function isAnchorProps(props: ButtonProps): props is AnchorElementProps {
  return typeof (props as AnchorElementProps).href === "string";
}

function buttonClasses(
  variant: NonNullable<SharedProps["variant"]>,
  size: NonNullable<SharedProps["size"]>,
  className?: string
) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200",
    size === "lg" ? "h-12 px-6 text-sm" : "h-10 px-5 text-sm",
    variant === "primary"
      ? "bg-slate-950 text-white hover:bg-slate-800"
      : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
    className
  );
}

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className } = props;
  const classes = buttonClasses(variant, size, className);

  if (isAnchorProps(props)) {
    const {
      href,
      variant: _variant,
      size: _size,
      className: _className,
      children: _children,
      ...anchorProps
    } = props;

    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    variant: _variant,
    size: _size,
    className: _className,
    children: _children,
    ...buttonProps
  } = props;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
