import { Picture, Source } from "apps/website/components/Picture.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Text from "$store/components/ui/Text.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title?: string;
  /**
   * @maxItems 4
   * @minItems 4
   */
  topics?: string[];
  /** @title Image centered */
  image?: {
    /** @description Image for big screens */
    desktop: ImageWidget;
    /** @description Image for small screens */
    mobile: ImageWidget;
    /** @description image alt text */
    alt?: string;
  };
  callToAction?: {
    title: string;
    href: string;
  };
}

export default function HeroTopics({
  title = "Maya's Flywheel",
  topics = [
    "INVEST in exceptional teams",
    "support business growth",
    "inspire future generation",
    "Empower Founders",
  ],
  image = {
    mobile: "",
    "desktop": "",
    alt: "Infinity symbol with markers for the threads at the ends",
  },
  callToAction = {
    title: "Learn more",
    href: "#",
  },
}: Props) {
  if (!image.mobile || !image.desktop) return null;
  const positionTopics = [
    "top-0 -left-2",
    "top-0 translate-x-1/2 sm:translate-x-0 right-0 lg:-right-12 2xl:-right-2",
    "bottom-0 -left-2",
    "bottom-0 translate-x-1/2 sm:translate-x-0 right-0 lg:-right-12 2xl:-right-2",
  ];
  return (
    <div className="w-[79.73%] sm:w-[66.67%] 2xl:max-w-screen-xl mx-auto py-14 
     lg:pt-40 lg:pb-28 2xl:pt-60 2xl:pb-40">
      <div className="flex w-full h-full justify-center items-center flex-col gap-10 sm:gap-5 ">
        <Text variant="heading-3" className="tracking-wide text-primary">
          {title}
        </Text>
        <div className="relative mx-auto 2xl:w-auto">
          <Image
            loading="lazy"
            src={image.desktop}
            alt={image.alt}
            width={250}
            height={122.4609375}
            className=" w-full sm:hidden mx-auto h-full object-contain"
          />
          <Image
            loading="lazy"
            src={image.desktop}
            alt={image.alt}
            width={1280}
            height={627}
            className="hidden sm:block lg:w-3/4 mx-auto 2xl:w-full h-full object-contain"
          />
          {topics.map((topic, index) => (
            <span
              key={topic}
              className={`absolute font-bison font-bold  text-sm sm:text-3xl 2xl:text-[42px] text-secondary
                text-left uppercase leading-none ${
                positionTopics?.[index]
              } max-w-14 lg:max-w-[154px]`}
              style={{ maxWidth: "" }}
            >
              {topic}
            </span>
          ))}
        </div>
        <a
          className="btn btn-active btn-link font-manrope font-bold uppercase tracking-widest 
          leading-3 sm:leading-6 2xl:leading-9 text-[8px] sm:text-lg 2xl:text-2xl  underline-offset-2 sm:underline-offset-[8px] 
          2xl:underline-offset-[12px]"
          href={callToAction.href}
          title={callToAction.title}
        >
          {callToAction.title}
        </a>
      </div>
    </div>
  );
}
