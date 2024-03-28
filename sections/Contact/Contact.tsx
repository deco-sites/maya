import type { Props as FormProps } from "$store/islands/Form.tsx";
import Form from "$store/islands/Form.tsx";

export interface Props {
  title?: string;
  placeholder?: FormProps;
}

export default function Contact({ title, placeholder }: Props) {
  return (
    <div className="w-full px-7 lg:px-0 lg:w-[83.23%] mx-auto flex flex-col mb-20 2xl:mb-44">
      <div className="flex flex-col sm:flex-row w-full gap-7 lg:gap-20 2xl:gap-28">
        <div className="w-full lg:w-2/5 flex">
          <h3 className="font-bison font-semibold text-[32px] lg:text-7xl 
            2xl:text-[100px] leading-none lg:leading-[62px] 2xl:leading-[88.2px] 
            tracking-wider text-black text-center lg:text-left text-balance lg:text-wrap">
            {title}
          </h3>
        </div>
        <div className="w-full lg:w-3/5">
          <Form {...placeholder} />
        </div>
      </div>
    </div>
  );
}
