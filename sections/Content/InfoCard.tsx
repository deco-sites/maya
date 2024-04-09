import { Title } from "$store/sections/Content/HeroMain.tsx";
import Text from "$store/components/ui/Text.tsx";
import { HTMLWidget as HTML } from "apps/admin/widgets.ts";

/**
 * @title Phrase
 */
export interface Phrase {
  phrase: HTML;
}

export interface Props {
  /**
   * @title Top text
   */
  supTitle?: string;
  /**
   * @title Main Title
   */
  titleWords?: Title[];
  /** @format html */
  phrases?: Phrase[];
  callToAction?: {
    title: string;
    href: string;
  };
}

export default function InfoCard({
  supTitle =
    "We partner with early-stage teams in America Latina who are catalyzing",
  titleWords = [
    {
      title: "THE TECHNOLOGY",
      inEmphasis: false,
    },
    {
      title: "Revolution",
      inEmphasis: true,
    },
  ],
  phrases = [
    {
      phrase: "Leading their first venture round.",
    },
    {
      phrase: "Accelerating their growth with a hands-on approach.",
    },
    {
      phrase: "Working as part of the team as they scale.",
    },
  ],
  callToAction = {
    title: "Discover Maya Capital",
    href: "#",
  },
}: Props) {
  return (
    <div
      className="lg:px-[8.33%] mx-auto w-full bg-primary-content pt-[89px] pb-[67px] lg:pt-36 lg:pb-24 2xl:pt-52 2xl:pb-36 opacity-0 duration-1000 transition-all"
      data-replace='{"opacity-0": "opacity-100" }'
    >
      <div className="w-[63.43%] lg:w-full mx-auto  flex flex-col justify-center items-center gap-10 lg:gap-24 2xl:gap-36">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 2xl:gap-36 items-start justify-between">
          <div className="flex flex-col gap-7 lg:gap-20 flex-1">
            <Text
              variant="heading-2"
              className="text-[9px] text-white max-w-lg"
            >
              {supTitle}
            </Text>
            <h2 style={{ lineHeight: "0.9" }}>
              {titleWords.map(({ title, inEmphasis }) => (
                <span
                  key={title}
                  className={`${
                    inEmphasis ? "highligh-text-variant" : ""
                  } text-white text-[43px] even:text-[58px] lg:text-[94px] lg:even:text-[130px] 2xl:text-[130px] 2xl:even:text-[180px] 
                  uppercase font-bison`}
                >
                  {title} {" "}
                </span>
              ))}
            </h2>
          </div>
          <div className="list-custom-increment flex flex-col gap-5 lg:gap-10 2xl:gap-20 flex-1">
            {phrases.map(({ phrase }) => (
              <Text
                key={phrase}
                variant="content-1"
                className="text-white list-custom-increment-item flex gap-4 lg:gap-10 items-start"
                dangerouslySetInnerHTML={{ __html: phrase }}
                style={{
                  lineHeight: "1 !important",
                }}
              />
            ))}
          </div>
        </div>
        <div>
          <a
            className="btn btn-active btn-link text-white font-manrope font-bold uppercase tracking-widest
            text-[8px] lg:leading-6 2xl:leading-9 lg:text-lg 2xl:text-2xl  underline-offset-[8px] 
            2xl:underline-offset-[12px]"
            href={callToAction.href}
            title={callToAction.title}
          >
            {callToAction.title}
          </a>
        </div>
      </div>
    </div>
  );
}
