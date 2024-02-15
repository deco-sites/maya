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
  showIconDown?: boolean;
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
}: Props) {
  return (
    <div className="px-[8.33%] mx-auto w-full py-8 2xl:py-36">
      <div className="flex flex-col gap-16 items-center justify-center">
        <span className="font-manrope font-semibold uppercase text-3xl tracking-wider text-primary">
          {supTitle}
        </span>
        <h1 className="block leading-none text-center mx-auto max-w-4xl">
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
      </div>
    </div>
  );
}
