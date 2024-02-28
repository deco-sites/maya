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
    <div className="mx-auto my-28 2xl:my-40 bg-accent-content w-[83.23%]">
      <div className="px-24 2xl:px-32 py-14 2xl:py-20 flex justify-center 
        items-center gap-6 2xl:gap-9">
        <h3 className="text-white font-bison font-semibold text-[85px] 
          2xl:text-[120px] leading-none max-w-xl">
          {title}
        </h3>
        <Image
          src={imageShowcase}
          alt="Showcase background"
          width={686}
          height={332}
          className="w-[488px] object-contain 2xl:w-full"
          style={{ maxWidth: "686px" }}
        />
      </div>
    </div>
  );
}
