import Text from "deco-sites/maya/components/ui/Text.tsx";

/**@title {{name}} */
export interface Item {
  name?: string;
  text?: string;
}

export interface Props {
  title?: string;
  items?: Item[];
}

export default function ListThesis({
  title = "our Thesis",
  items = [
    {
      name: "Lead your first venture round",
      text:
        "We invest in founders' first institutional round. Our investment process is thorough, yet quick, where we leverage our network to build conviction on each thesis and founder so that we can get our hands dirty post investment.",
    },
    {
      name: "Hands on hard work",
      text:
        "We invest much more than just capital. Our team is dedicated to helping each MAYAN get from Zero to One. We use our expertise and network to provide tailored support to founders in hiring, go-to-market, and fundraising. For the rest of it, we want to provoke, ask the right questions, and to provide the best answers when possible.",
    },
    {
      name: "Long-term partnership",
      text:
        "Our success is directly tied to that of our partners. We do our work to gain conviction before partnering with founders, so we can eventually consider ourselves a part of the team.",
    },
  ],
}: Props) {
  return (
    <div className="px-[8.33%] mx-auto w-full pt-[60px] pb-20 lg:pt-32 2xl:pt-[187px] lg:pb-[170px] 2xl:pb-60 bg-secondary-content">
      <div className="flex flex-col items-center justify-center gap-7 lg:gap-[91px] 2xl:gap-32">
        <Text variant="heading-3" className="text-primary">
          {title}
        </Text>
        <div className="flex flex-col divide-y-2 divide-white">
          {items.map((item, index) => (
            <div className="flex items-start py-6 lg:py-8 2xl:py-11 gap-10 2xl:gap-24">
              <span
                className="highligh-text font-bison font-black text-[65px] lg:text-[142px] 2xl:text-[200px] leading-[0.85] lg:leading-[80px] 2xl:leading-[160px]"
                style={{ "-webkit-text-stroke-color": "#2D4BE0 !important" }}
              >
                {index + 1}
              </span>
              <div class="flex flex-col gap-2 lg:contents">
                <span className="font-bison font-bold text-[25px] leading-none lg:text-[56px] 2xl:text-[80px] lg:leading-[56px] 2xl:leading-[80px] text-primary flex-1 max-w-[50%] lg:max-w-full">
                  {item.name}
                </span>
                <Text variant="body" style={{ flex: "2" }}>
                  {item.text}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
