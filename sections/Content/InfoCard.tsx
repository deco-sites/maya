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
    <div className="px-[8.33%] mx-auto w-full bg-primary-content pt-36 pb-24 2xl:pt-52 2xl:pb-36">
      <div className="flex flex-col justify-center items-center gap-24 2xl:gap-36">
        <div className="flex gap-24 2xl:gap-36 items-start justify-between text-3xl">
          <div className="flex flex-col gap-20 flex-1">
            <Text variant="heading-2" className="text-white max-w-lg">
              {supTitle}
            </Text>
            <h2 style={{ lineHeight: "0.9" }}>
              {titleWords.map(({ title, inEmphasis }) => (
                <span
                  key={title}
                  className={`${
                    inEmphasis ? "highligh-text-variant" : ""
                  } text-white text-[94px] even:text-[130px] 2xl:text-[130px] 2xl:even:text-[180px] 
                  uppercase font-bison`}
                >
                  {title} {" "}
                </span>
              ))}
            </h2>
          </div>
          <ul className="list-custom-increment flex flex-col gap-10 2xl:gap-20 flex-1">
            {phrases.map(({ phrase }) => (
              <Text
                key={phrase}
                variant="content-1"
                className="text-white list-custom-increment-item flex gap-10 items-start"
                dangerouslySetInnerHTML={{ __html: phrase }}
                style={{
                  lineHeight: "1 !important",
                }}
              />
            ))}
          </ul>
        </div>
        <div>
          <a
            className="btn btn-active btn-link text-white font-manrope font-bold uppercase tracking-widest
            leading-6 2xl:leading-9 text-lg 2xl:text-2xl  underline-offset-[8px] 
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
