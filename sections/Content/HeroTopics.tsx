import { ImageWidget } from "apps/admin/widgets.ts";
import Text from "site/components/ui/Text.tsx";

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
    <div
      className="w-[79.73%] sm:w-[66.67%] 2xl:max-w-screen-xl mx-auto py-14 
     lg:pt-40 lg:pb-28 2xl:pt-60 2xl:pb-40 opacity-0 duration-1000 transition-all"
      data-replace='{"opacity-0": "opacity-100" }'
    >
      <div className="flex w-full h-full justify-center items-center flex-col gap-10 sm:gap-5 ">
        <Text variant="heading-3" className="tracking-wide text-primary">
          {title}
        </Text>
        <div className="relative mx-auto 2xl:w-auto">
          <div className="mx-auto 2xl:w-full h-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              version="1.1"
              viewBox="0 0 2040 1080"
              class="infinity fill-none w-[250px] h-[122px] lg:w-full lg:h-[448px] lg:scale-110"
              data-replace='{"infinity-animation": "active" }'
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                class="cls-1"
                d="M988.9,517.3l-206.5-206.5c-126.5-126.5-331.7-126.5-458.3,0-126.5,126.5-126.5,331.7,0,458.3,126.5,126.5,331.7,126.5,458.3,0l457.5-457.7c126.5-126.5,331.7-126.5,458.3,0,126.5,126.5,126.5,331.7,0,458.3-126.5,126.5-331.7,126.5-458.3,0l-207-207"
              />
            </svg>
          </div>
          {topics.map((topic, index) => (
            <span
              key={topic}
              className={`absolute font-bison font-bold  text-sm lg:text-3xl 2xl:text-[42px] text-secondary
                text-left uppercase leading-none duration-300 opacity-0 transition-all ${
                positionTopics?.[index]
              } max-w-14 lg:max-w-[154px]`}
              style={{ maxWidth: "", transitionDelay: `${0.2 * index + 1}s` }}
              data-replace='{"opacity-0": "opacity-100" }'
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
