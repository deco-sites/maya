import { Title } from "$store/sections/Content/HeroMain.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";

export interface Props {
  /**
   * @title Top text
   */
  supTitle?: string;
  /**
   * @title Main Title
   */
  titleWords?: Title[];
  /**
   * @title Title Word spacing
   * @default long
   */
  wordSpacing?: "wide" | "default";
  showIconDown?: boolean;
  /** @format textarea */
  descriptionText?: string;
  bottomText?: string;
}

export default function BigTitle({
  supTitle = "Our team",
  titleWords = [
    {
      title: "WE Are",
      inEmphasis: false,
    },
    {
      title: "People",
      inEmphasis: true,
    },
    {
      title: "Centric",
      inEmphasis: true,
    },
  ],
  showIconDown = true,
  descriptionText = "",
  bottomText = "",
  wordSpacing = "wide",
}: Props) {
  const currentWordSpacing = wordSpacing === "wide" ? "" : "!tracking-normal";
  return (
    <div className="px-[8.33%] mx-auto w-full pt-[65px] 
      2xl:pt-[92px] pb-[123px] 2xl:pb-[174px] bg-[var(--bg-main)]">
      <div className="flex flex-col items-center justify-center">
        <span className="font-manrope font-semibold uppercase text-xl 2xl:text-3xl tracking-wider 
          text-[var(--color-main)] mb-[55px] 2xl:mb-[78px]">
          {supTitle}
        </span>
        <h1
          className={`block  text-center mx-auto max-w-4xl 2xl:max-w-[1224px]`}
        >
          {titleWords.map(({ title, inEmphasis, breakLine }) => (
            <Text
              key={title}
              variant="heading-1"
              className={`${
                inEmphasis ? "highligh-text" : ""
              } ${currentWordSpacing}`}
            >
              {breakLine && <br />} {title} {" "}
            </Text>
          ))}
        </h1>

        {showIconDown && (
          <Icon
            id="ArrowDown"
            width={69.37}
            height={94.37}
            strokeWidth={1}
            className="mt-[65px] 2xl:mt-[92px] text-primary w-[49.35px] 
              h-[67.14px] 2xl:w-[69.37px] 2xl:h-[94.37px]"
          />
        )}
        {(!!descriptionText || !!bottomText) && (
          <div className="mt-[65px] 2xl:mt-[92px] max-w-[910px] 2xl:max-w-7xl mx-auto flex 
            flex-col items-center justify-center gap-11 2xl:gap-16">
            {descriptionText && (
              <p className="font-manrope text-lg 2xl:text-2xl 
                leading-6 2xl:leading-9 text-[var(--color-main)] text-center">
                {descriptionText}
              </p>
            )}
            {bottomText && (
              <p className="font-manrope text-xl 2xl:text-3xl leading-[28px] 2xl:leading-10 
                text-[var(--color-main)] font-semibold uppercase text-center tracking-widest">
                {bottomText}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
