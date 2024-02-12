import { JSX } from "preact";
import { forwardRef, HTMLAttributes } from "preact/compat";

const variants = {
  "caption": "font-bison font-bold text-3xl text-secondary",
  "heading":
    "font-bison text-[9.85rem] 2xl:text-[13.75rem] text-primary uppercase",

  "heading-1": "font-bison text-[11.25rem] text-primary uppercase",
  "heading-2": "font-manrope text-xl 2xl:text-3xl 2xl:leading-10 text-black",
  "content-1": "font-manrope text-4xl leading-[45px] text-primary",
  "menu": "font-bison font-bold text-[5rem] text-white",
  "body": "font-manrope text-2xl leading-9 text-black",
};
type Variants = keyof typeof variants;

type Props = JSX.IntrinsicElements["span"] & {
  variant?: Variants;
  asLink?: HTMLAttributes<HTMLAnchorElement>;
};

const Text = forwardRef<HTMLSpanElement, Props>((
  { variant = "body", class: _class = "", className = "", ...props },
  ref,
) => {
  const teste = { ...variants };
  const variantClasses = teste[variant];
  return (
    <span
      {...props}
      class={`${_class} ${className} ${variantClasses}`}
      ref={ref}
    />
  );
});

export default Text;
