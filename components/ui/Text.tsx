import { JSX } from "preact";
import { forwardRef, HTMLAttributes } from "preact/compat";

// clamp(3.646rem, 1vw + 1rem, 9.85rem);

const variants = {
  "caption": "font-bison font-bold text-xl 2xl:text-3xl",
  "heading":
    "font-bison text-[clamp(3.646rem,1vw+1rem,9.85rem)] lg:text-[9.85rem] 2xl:text-[13.75rem] text-primary uppercase",
  "heading-1":
    "font-bison text-9xl 2xl:text-[180px] text-[var(--color-main)] uppercase tracking-wide leading-[112px] 2xl:leading-[158.76px]",
  "heading-2": "font-manrope text-xs lg:!text-xl 2xl:!text-3xl 2xl:leading-10 text-black",
  "heading-3": "font-bison text-[34px] lg:text-7xl 2xl:text-[100px] font-bold",
  "content-1":
    "font-manrope text-2xl 2xl:text-4xl 2xl:leading-[45px] text-primary",
  "body":
    "font-manrope leading-6 2xl:leading-9 text-lg 2xl:text-2xl text-black",
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
