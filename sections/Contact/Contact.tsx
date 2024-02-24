import type { Props as FormProps } from "$store/islands/Form.tsx";
import Form from "$store/islands/Form.tsx";

export interface Props {
  title?: string;
  placeholder?: FormProps;
}

export default function Contact({ title, placeholder }: Props) {
  return (
    <div className="w-[83.23%] mx-auto flex flex-col mb-20 2xl:mb-44">
      <div className="flex w-full gap-20 2xl:gap-28">
        <div className="w-2/5 flex">
          <h3 className="font-bison font-semibold text-7xl 
            2xl:text-[100px] leading-[62px] 2xl:leading-[88.2px] tracking-wider text-black">
            {title}
          </h3>
        </div>
        <div className="w-3/5">
          <Form {...placeholder} />
        </div>
      </div>
    </div>
  );
}
