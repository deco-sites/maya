import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title?: string;
  imageShowcase: ImageWidget;
}

export default function ContentHiring(
  { title = "Our founders are hiring", imageShowcase = "" }: Props,
) {
  if (!imageShowcase) return null;

  return (
    <div
      className="mx-auto my-14 lg:my-28 2xl:my-40 bg-accent-content w-[83.23%] opacity-0 duration-1000 transition-all"
      data-replace='{"opacity-0": "opacity-100" }'
    >
      <div className="px-1 lg:px-24 2xl:px-32 pt-7 pb-3 lg:py-14 2xl:py-20 flex flex-col sm:flex-row justify-center 
        items-center gap-5 lg:gap-6 2xl:gap-9">
        <h3 className="text-white font-bison font-semibold text-4xl lg:text-[85px] 
          2xl:text-[120px] leading-none max-w-44 lg:max-w-xl ml-6 mr-auto lg:mr-0 lg:ml-0">
          {title}
        </h3>
        <Image
          src={imageShowcase}
          alt="Showcase background"
          width={283}
          height={137}
          className="w-full object-contain lg:hidden"
          style={{ maxWidth: "686px" }}
          loading="lazy"
        />
        <Image
          src={imageShowcase}
          alt="Showcase background"
          width={686}
          height={332}
          className="w-full lg:w-[488px] object-contain 2xl:w-full hidden lg:block"
          style={{ maxWidth: "686px" }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
