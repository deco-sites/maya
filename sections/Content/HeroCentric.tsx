import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import { shuffle } from "site/sdk/shuffle.tsx";

export interface Props {
  /** @title Images Background */
  imageBackground: {
    src: ImageWidget;
  }[];
  /**
   * @maxItems 3
   * @minItems 3
   */
  titleWords?: string[];
  description?: string;
  callToAction?: {
    title: string;
    href: string;
  };
}

function Title({ titleWords }: { titleWords?: string[] }) {
  return (
    <div className="grid gap-3 lg:gap-5 grid-cols-3">
      <span
        className="text-center flex items-center justify-end font-bison font-bold text-[32px] lg:text-[80px] 2xl:text-[100px] 2xl:leading-[120px] text-primary uppercase delay-[1000ms] opacity-0 transition-all ease-linear"
        data-replace='{"opacity-0": "opacity-100" }'
      >
        {titleWords?.[0]}
      </span>
      <span
        class="text-center flex items-center justify-center font-bold text-[51.85px] lg:text-[114px] 2xl:text-[160px] 2xl:leading-[120px]
        text-secondary-content font-bison  delay-[1500ms] opacity-0 transition-all ease-linear"
        data-replace='{"opacity-0": "opacity-100" }'
      >
        {titleWords?.[1]}
      </span>

      <span
        className="text-center flex items-center justify-start font-bison text-[32px] lg:text-[80px] font-bold 2xl:text-[100px] 2xl:leading-[120px] text-primary uppercase delay-[2000ms] opacity-0 transition-all ease-linear"
        data-replace='{"opacity-0": "opacity-100"}'
      >
        {titleWords?.[2]}
      </span>
    </div>
  );
}

function generateRandomDelays(
  size: number,
  baseDelay: number = 2500,
  variation: number = 500,
): string[] {
  const delays: number[] = [];

  for (let i = 0; i < size; i++) {
    const randomVariation = Math.floor(Math.random() * variation);
    delays.push(baseDelay + randomVariation);
  }

  return delays.map((delay) => `${delay}ms`);
}

// Uso com o componente BackgroundImages

const delays = generateRandomDelays(5);

function BackgroundImages({ imageBackground }: {
  imageBackground: {
    src: ImageWidget;
  }[];
}) {
  return (
    <>
      <div className="col-start-1 row-start-1 col-span-2 row-span-3 circle-image">
        <div
          class="flex h-full w-full items-center justify-center opacity-0 transition-all ease-in-out duration-1000"
          data-replace='{"opacity-0": "opacity-100" }'
          style={{ transitionDelay: delays[0] }}
        >
          <Image
            src={imageBackground?.[0]?.src}
            width={182}
            height={182}
            class="object-contain overflow-hidden rounded-full"
          />
        </div>
      </div>
      <div className="col-span-2 row-span-2 col-start-2 row-start-5 circle-image">
        <div
          class="flex h-full w-full items-center justify-start opacity-0 transition-all ease-in-out duration-1000"
          data-replace='{"opacity-0": "opacity-100" }'
          style={{ transitionDelay: delays[1] }}
        >
          <Image
            src={imageBackground?.[1]?.src}
            width={145}
            height={145}
            class="object-contain overflow-hidden rounded-full"
          />
        </div>
      </div>
      <div className="col-span-2 row-span-2 col-start-4 row-start-2 circle-image">
        <div
          class="flex h-full w-full items-center justify-center opacity-0 transition-all ease-in-out duration-1000"
          data-replace='{"opacity-0": "opacity-100" }'
          style={{ transitionDelay: delays[2] }}
        >
          <Image
            src={imageBackground?.[2]?.src}
            width={86}
            height={86}
            class="object-contain overflow-hidden rounded-full"
          />
        </div>
      </div>
      <div className="col-span-3 row-span-2 col-start-9 row-start-2 circle-image">
        <div
          class="flex h-full w-full items-start justify-center opacity-0 transition-all ease-in-out duration-1000"
          data-replace='{"opacity-0": "opacity-100" }'
          style={{ transitionDelay: delays[3] }}
        >
          <Image
            src={imageBackground?.[3]?.src}
            width={152}
            height={152}
            class="object-contain overflow-hidden rounded-full"
          />
        </div>
      </div>
      <div className="col-span-2 row-span-3 col-start-11 row-start-5 circle-image">
        <div
          class="flex h-full w-full items-start justify-center opacity-0 transition-all ease-in-out duration-1000"
          data-replace='{"opacity-0": "opacity-100" }'
          style={{ transitionDelay: delays[4] }}
        >
          <Image
            src={imageBackground?.[4]?.src}
            width={234}
            height={234}
            class="object-contain overflow-hidden rounded-full"
          />
        </div>
      </div>
    </>
  );
}

export default function HeroCentric({
  imageBackground = [],
  titleWords = [
    "WE are",
    "Talent",
    "Centric",
  ],
  description =
    "By selecting the most excpetional founders, building strong conviction and leveraging our network, we work to transform Latin America.",
  callToAction = {
    title: "Discover Maya Capital",
    href: "#",
  },
}: Props) {
  const shuffleImagesBackground = shuffle(imageBackground);

  return (
    <div className="w-full relative bg-secondary-content" // className="w-full relative bg-secondary-content opacity-0 duration-1000 transition-all"
      // data-replace='{"opacity-0": "opacity-100" }'
    >
      <div className="grid grid-cols-12 grid-rows-8 gap-0 w-full h-[651px] relative overflow-hidden">
        <BackgroundImages imageBackground={shuffleImagesBackground} />
        <div
          class="flex items-center justify-center"
          style={{
            gridColumn: "1 / -1", /* Ocupa todas as colunas */
            gridRow: " 1 / -1", /* Ocupa todas as linhas */
            // background: "black",
          }}
        >
          <div
            className=" w-full h-full z-10 bg-primary-content rounded-none transition-all duration-1000 ease-in-out"
            data-replace='{"w-full":"w-[140px] lg:w-[300px] 2xl:w-[451px]", "h-full": "h-[140px] lg:h-[300px] 2xl:h-[451px]", "rounded-none": "rounded-full"}'
          >
          </div>
        </div>
        <div className="col-span-8 col-start-3 row-start-4 z-20">
          <Title titleWords={titleWords} />
        </div>
        <div
          className="col-span-8 col-start-3 row-start-7 row-span-8  delay-[2500ms] opacity-0 transition-all ease-linear"
          data-replace='{"opacity-0": "opacity-100"}'
        >
          <div className="flex flex-col items-center justify-center gap-5 2xl:gap-10 w-full">
            <Text
              variant="content-2"
              className="text-center max-w-[244px] lg:max-w-2xl 2xl:max-w-4xl"
            >
              {description}
            </Text>
            <a
              className="btn btn-active btn-link font-manrope font-bold uppercase tracking-widest
            text-[8px] lg:leading-6 2xl:leading-9 lg:text-base 2xl:text-2xl  underline-offset-[8px]
            2xl:underline-offset-[12px]"
              href={callToAction.href}
              title={callToAction.title}
            >
              {callToAction.title}
            </a>
          </div>
        </div>
      </div>

      {
        /* <div className="flex flex-col items-center justify-center w-full gap-[120px] lg:gap-14 2xl:gap-36 z-10">
        <div className="flex items-center gap-3 lg:gap-5">
          <span
            className="font-bison font-bold text-[32px] lg:text-[80px] 2xl:text-[100px] 2xl:leading-[120px] text-primary uppercase delay-[2000]"
            data-replace='{"opacity-0": "opacity-100" }'
          >
            {titleWords?.[0]}
          </span>
          <span className="flex items-center justify-center
            w-[140px] h-[140px] lg:w-[300px] lg:h-[300px] 2xl:w-[451px] 2xl:h-[451px]
            rounded-full bg-primary-content z-10 uppercase
            ">
            <span
              class="font-bold text-[51.85px] lg:text-[114px] 2xl:text-[160px] 2xl:leading-[120px]
            text-secondary-content font-bison  delay-[3000]"
              data-replace='{"opacity-0": "opacity-100" }'
            >
              {titleWords?.[1]}
            </span>
          </span>
          <span
            className="font-bison text-[32px] lg:text-[80px] font-bold 2xl:text-[100px] 2xl:leading-[120px] text-primary uppercase delay-[4000]"
            data-replace='{"opacity-0": "opacity-100" }'
          >
            {titleWords?.[2]}
          </span>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 2xl:gap-14">
          <Text
            variant="content-1"
            className="text-center max-w-[244px] lg:max-w-2xl 2xl:max-w-4xl"
          >
            {description}
          </Text>
          <a
            className="btn btn-active btn-link font-manrope font-bold uppercase tracking-widest
            text-[8px] lg:leading-6 2xl:leading-9 lg:text-lg 2xl:text-2xl  underline-offset-[8px]
            2xl:underline-offset-[12px]"
            href={callToAction.href}
            title={callToAction.title}
          >
            {callToAction.title}
          </a>
        </div>
      </div> */
      }
      {
        /* <script
        type="module"
        defer
        src={scriptAsDataURI(snippet)}
      /> */
      }
    </div>
  );
}
