import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

/**
 * @title {{title}}
 */
export interface Title {
  title: string;
  /**
   * @title Highlighted
   */
  inEmphasis?: boolean;
  /**
   * @default false
   */
  breakLine?: boolean;
}

export interface Props {
  titleWords: Title[];
  description: string;
}

const delay = 0.2;

export default function HeroMain({
  titleWords = [
    {
      title: "Reaching",
      inEmphasis: false,
    },
    {
      title: "Beyound",
      inEmphasis: true,
    },
    {
      title: "The Obvius",
      inEmphasis: false,
    },
  ],
  description =
    "MAYA Capital is an early-stage fund that supports bold leaders who are catalyzing change in Latin America.",
}: Props) {
  return (
    <div className="w-[83.23%] mx-auto pt-8 pb-24 2xl:py-36">
      <div className="flex w-full relative flex-col gap-14 2xl:gap-36">
        <h1 className="block" style={{ lineHeight: "1", width: "99%" }}>
          {titleWords.map(({ title, inEmphasis }, index) => {
            let cumulativeDelay = index * delay;
            return (
              <Text
                key={title}
                variant="heading"
                className={`${inEmphasis ? "highligh-text" : ""}`}
              >
                {title.split(" ").map((word, wordIndex) => {
                  cumulativeDelay += wordIndex * delay;
                  return (
                    <span
                      data-index={cumulativeDelay}
                      className="opacity-0 animate-fadeIn"
                      style={{
                        animationDelay: `${cumulativeDelay}s`,
                      }}
                    >
                      {word} {" "}
                    </span>
                  );
                })}
                {" "}
              </Text>
            );
          })}
          <Text
            variant="heading-2"
            className="float-right max-w-sm 2xl:max-w-xl  mt-14 opacity-0 animate-fadeIn"
            style={{
              animationDelay: "1s",
            }}
          >
            {description}
          </Text>
        </h1>
        <Icon
          id="ArrowDown"
          width={69.37}
          height={94.37}
          strokeWidth={1}
          className="text-primary w-12 h-[66px] 2xl:w-[69.37px] 2xl:h-[94.37px] opacity-0 animate-fadeIn"
          style={{
            animationDelay: "1s",
          }}
        />
      </div>
    </div>
  );
}
