import { JSX } from "preact";
import { forwardRef, HTMLAttributes } from "preact/compat";

const variants = {
  "caption": "font-bison font-bold text-3xl text-secondary",
  "heading-1": "font-bison text-[180px] text-primary uppercase",
  "heading-2": "font-manrope text-3xl leading-10 text-info",
  "content-1": "font-manrope text-4xl leading-[45px] text-primary",
  "menu": "font-bison font-bold text-[80px] text-base",
  "body": "font-manrope text-2xl leading-9 text-info",
};

type Variants = keyof typeof variants;

type Props = JSX.IntrinsicElements["span"] & {
  variant?: Variants;
  asLink?: HTMLAttributes<HTMLAnchorElement>;
};

const Text = forwardRef<HTMLSpanElement, Props>((
  { variant = "body", class: _class = "", ...props },
  ref,
) => {
  const variantClasses = variants[variant];
  return (
    <span
      {...props}
      class={`${_class} ${variantClasses}`}
      ref={ref}
    />
  );
});

export default Text;
