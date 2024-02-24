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
    src: ImageWidget;
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
    src: "",
    alt: "Infinity symbol with markers for the threads at the ends",
  },
  callToAction = {
    title: "Learn more",
    href: "#",
  },
}: Props) {
  if (!image.src) return null;
  const positionTopics = [
    "top-0 -left-2",
    "top-0 -right-12 2xl:-right-2",
    "bottom-0 -left-2",
    "bottom-0 -right-12 2xl:-right-2",
  ];
  return (
    <div className="max-w-screen-xl mx-auto pt-32 pb-32 2xl:pt-60 2xl:pb-40">
      <div className="flex w-full h-full justify-center items-center flex-col gap-5">
        <Text variant="heading-3" className="tracking-wide text-primary">
          {title}
        </Text>
        <div className="relative mx-auto w-min 2xl:w-auto">
          <Image
            loading="lazy"
            src={image.src}
            alt={image.alt}
            width={1280}
            height={627}
            className="w-3/4 mx-auto 2xl:w-full h-full object-contain"
            style={{ minWidth: "960px" }}
          />
          {topics.map((topic, index) => (
            <span
              key={topic}
              className={`absolute font-bison font-bold text-4xl 2xl:text-[42px] text-secondary
                text-left uppercase leading-none ${positionTopics?.[index]}`}
              style={{ maxWidth: "154px" }}
            >
              {topic}
            </span>
          ))}
        </div>
        <a
          className="btn btn-active btn-link font-manrope font-bold uppercase tracking-widest 
          leading-6 2xl:leading-9 text-lg 2xl:text-2xl  underline-offset-[8px] 
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
