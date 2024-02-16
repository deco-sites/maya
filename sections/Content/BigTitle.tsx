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
   * @title Title line height
   * @default long
   */
  lineHeight?: "short" | "long";
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
  lineHeight = "long",
}: Props) {
  const currentLineHeight = lineHeight === "long"
    ? "leading-none"
    : "leading-[0.8]";
  return (
    <div className="px-[8.33%] mx-auto w-full py-8 2xl:py-36 bg-[var(--bg-main)]">
      <div className="flex flex-col gap-16 items-center justify-center">
        <span className="font-manrope font-semibold uppercase text-3xl tracking-wider text-primary">
          {supTitle}
        </span>
        <h1
          className={`block  text-center mx-auto max-w-6xl ${currentLineHeight}`}
        >
          {titleWords.map(({ title, inEmphasis }) => (
            <Text
              key={title}
              variant="heading-1"
              className={inEmphasis ? "highligh-text" : ""}
            >
              {title} {" "}
            </Text>
          ))}
        </h1>

        {showIconDown && (
          <Icon
            id="ArrowDown"
            width={69.37}
            height={94.37}
            strokeWidth={1}
            className="text-primary"
          />
        )}
        {(!!descriptionText || !!bottomText) && (
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-16">
            {descriptionText && (
              <p className="font-manrope text-2xl leading-9 text-[var(--color-main)] text-center">
                {descriptionText}
              </p>
            )}
            {bottomText && (
              <p className="font-manrope text-3xl leading-10 text-[var(--color-main)] font-semibold uppercase text-center">
                {bottomText}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
