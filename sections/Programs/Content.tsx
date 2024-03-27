import { Title } from "$store/sections/Content/HeroMain.tsx";
import type { FilterBy } from "./Programs.tsx";
import type { Graphics } from "$store/components/ui/Grafismo.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Grafismo } from "deco-sites/maya/components/ui/Grafismo.tsx";

/** @title Variant Default */
export interface Default {
  /**
   * @default MAYA'S MATCHING PROGRAM
   */
  title: string;
  /**
   * @default status
   */
  subtitle: string;
  /**
   * @default APPLICATIONS CLOSED
   */
  description: string;
}

/** @title Variant 1 */
export interface Variant1 {
  image: {
    src: ImageWidget;
    alt?: string;
  };
  title: Title[];
  /**
   * @default Anna Torino
   */
  subtitle: string;
  /**
   * @default Archa
   */
  description: string;
}

export interface TextArea {
  /**
   * @format textarea
   */
  text: string;
}

export interface CallToAction {
  /**
   * @default Read more
   */
  text: string;
  href: string;
}

export interface ContentRight {
  title: string;
  /**
   * @format textarea
   */
  description: TextArea[];
  callToAction: CallToAction;
}

export interface BlockCounter {
  /**
   * @default Grafismo5
   */
  graphics: Graphics;
  counter?: {
    number: string;
    label: string;
  }[];
}

export interface Props {
  /**
   * @title Colors used to style the main block
   * @default default
   */
  colorsSchema?: "default" | "variant";
  /**
   * @description One of the types previously registered in the Filter by field
   */
  type: FilterBy;
  /**
   * @title Choose the variation left
   */
  contentLeft: Default | Variant1;
  /** @title Content Right */
  contentRight: ContentRight;
  /** @title Block Counter */
  blockCounter?: BlockCounter | null;
}

const isVariant1 = (content: Default | Variant1): content is Variant1 => {
  return (content as Variant1).image !== undefined;
};

function LeftDefault(props: Default) {
  return (
    <div className={`w-full lg:w-1/4 flex items-stretch lg:block`}>
      <div className="flex flex-col gap-14 2xl:gap-20 justify-between lg:justify-start">
        <h2 className="font-bison font-semibold text-[32px] lg:text-[106.71875px] 
          2xl:text-[150px] leading-7 lg:leading-[92.48958333333334px] 2xl:leading-[130px] tracking-wider">
          {props.title}
        </h2>
        <div className="flex flex-col">
          <span className="font-manrope text-[8px] lg:text-lg 2xl:text-2xl uppercase tracking-widest">
            {props.subtitle}
          </span>
          <span className="font-manrope text-[8px] lg:text-lg 2xl:text-2xl uppercase tracking-widest font-bold">
            {props.description}
          </span>
        </div>
      </div>
    </div>
  );
}

function LeftVariant(props: Variant1) {
  return (
    <div className={`w-2/5 lg:w-1/3 flex items-stretch lg:block`}>
      <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-4">
        <div className="relative">
          <Image
            src={props.image.src}
            alt={props.image.alt ?? props.subtitle}
            width={141}
            height={181}
            className="block lg:hidden"
            loading="lazy"
            style={{
              minWidth: "141px",
              minHeight: "181px",
              objectFit: "cover",
              objectPosition: "right",
            }}
          />
          <Image
            src={props.image.src}
            alt={props.image.alt ?? props.subtitle}
            width={399.83}
            height={399.83}
            className="hidden lg:block w-full"
            loading="lazy"
          />
          <div className="absolute -top-10 lg:top-1/2 lg:-translate-y-1/2 right-0 translate-x-1/2 flex flex-col">
            {props.title.map(({ title, inEmphasis }) => (
              <h2
                className={`font-bison font-semibold text-5xl leading-10 lg:text-[106.71875px] 
                2xl:text-[150px] lg:leading-[92.48958333333334px] 
                2xl:leading-[130px] tracking-wider ${
                  inEmphasis ? "bg-white px-2 pb-2 text-current" : "text-white"
                }`}
              >
                {title}
              </h2>
            ))}
          </div>
        </div>
        <div className="flex flex-col pl-6 lg:pl-0">
          <span className="font-manrope text-[8px] lg:text-lg 2xl:text-2xl font-bold">
            {props.subtitle}
          </span>
          <span className="font-manrope text-[8px] lg:text-lg 2xl:text-2xl">
            {props.description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Content(
  {
    contentLeft,
    contentRight,
    blockCounter = undefined,
    colorsSchema = "default",
  }: Props,
) {
  const colorsSchemaStyle = {
    "default": {
      "base-content": "bg-primary py-14",
      "text-content": "text-white",
      "button-content": "text-white",
      // "container": "px-6",
      "wrapper": "px-6 gap-8",
      "content-right": "",
    },
    "variant": {
      "base-content": "bg-base-content pt-14 pb-10",
      "text-content": "text-accent pt-10  lg:pt-0",
      "button-content": "text-white min-h-0 h-fit",
      // "container": "px-0",
      "wrapper": "px-0 gap-9",
      "content-right": "pr-6 lg:pr-0",
    },
  };

  const style = colorsSchemaStyle[colorsSchema];

  return (
    <div className="w-full lg:w-[83.23%] mx-auto flex flex-col">
      <div
        className={`${style["base-content"]} w-full lg:py-32 2xl:py-48`}
      >
        <div
          className={`flex w-full items-stretch justify-center lg:items-start lg:gap-[16.98%] ${
            style["wrapper"]
          } lg:px-0`}
        >
          <div className={`contents ${style["text-content"]}`}>
            {isVariant1(contentLeft)
              ? <LeftVariant {...contentLeft} />
              : <LeftDefault {...contentLeft} />}
          </div>
          <div
            className={`w-full lg:w-1/3 flex flex-col ${
              style["text-content"]
            } gap-4 lg:gap-6 2xl:gap-9`}
          >
            <h3
              className={`font-manrope font-bold lg:font-semibold leading-3 lg:leading-7 2xl:leading-10 text-[8px] lg:text-lg 2xl:text-2xl`}
            >
              {contentRight.title}
            </h3>
            <div
              className={`flex flex-col gap-3 lg:gap-6 2xl:gap-9 ${
                style["content-right"]
              }`}
            >
              {contentRight.description.map(({ text }, index) => (
                <p
                  className="font-manrope text-[8px] lg:text-lg 2xl:text-2xl  leading-3 lg:leading-7 2xl:leading-10"
                  key={index}
                >
                  {text}
                </p>
              ))}
            </div>
            <a
              className={`btn btn-active btn-link font-manrope font-bold uppercase  
              text-[8px] lg:text-lg 2xl:text-2xl lg:leading-7 2xl:leading-10 tracking-widest px-0 underline-offset-8 2xl:underline-offset-[12px]  ${
                style["button-content"]
              } mr-auto`}
              href={contentRight.callToAction.href}
              title={contentRight.callToAction.text}
            >
              {contentRight.callToAction.text}
            </a>
          </div>
        </div>
      </div>
      {!!blockCounter && (
        <div className="flex bg-white w-full lg:min-h-96 2xl:min-h-[560px]">
          <div className="w-2/5 lg:w-1/4 bg-secondary-content flex justify-center items-center p-4">
            <Grafismo
              id={blockCounter.graphics}
              width={274.6229166666667}
              height={398.4166666666667}
              className="text-primary w-full h-full lg:w-auto lg:h-auto"
            />
          </div>
          <div className="w-3/5 lg:w-full flex items-center justify-center lg:justify-evenly flex-col lg:flex-row py-10 lg:py-0">
            {blockCounter.counter?.map(({ label, number }) => (
              <div className="flex flex-col items-start justify-start lg:gap-4 2xl:gap-8 w-full max-w-20 lg:max-w-fit">
                <h4 className="font-bison font-semibold text-5xl lg:text-[106.71875px] 
            2xl:text-[150px] leading-10 lg:leading-[92.48958333333334px] 2xl:leading-[130px] tracking-wider text-primary">
                  {number}
                </h4>
                <h5 className="font-manrope text-xs lg:text-2xl 2xl:text-4xl uppercase tracking-widest text-black">
                  {label}
                </h5>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
