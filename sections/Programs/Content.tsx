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
    <div className={`w-1/4`}>
      <div className="flex flex-col gap-14 2xl:gap-20">
        <h2 className="font-bison font-semibold text-[106.71875px] 
          2xl:text-[150px] leading-[92.48958333333334px] 2xl:leading-[130px] tracking-wider gap-">
          {props.title}
        </h2>
        <div className="flex flex-col">
          <span className="font-manrope text-lg 2xl:text-2xl uppercase tracking-widest">
            {props.subtitle}
          </span>
          <span className="font-manrope text-lg 2xl:text-2xl uppercase tracking-widest font-bold">
            {props.description}
          </span>
        </div>
      </div>
    </div>
  );
}

function LeftVariant(props: Variant1) {
  return (
    <div className={`w-1/3`}>
      <div className="flex flex-col gap-3 2xl:gap-4">
        <div className="relative">
          <Image
            src={props.image.src}
            alt={props.image.alt ?? props.subtitle}
            width={399.83}
            height={399.83}
            className="w-full"
            loading="lazy"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 flex flex-col">
            {props.title.map(({ title, inEmphasis }) => (
              <h2
                className={`font-bison font-semibold text-[106.71875px] 
                2xl:text-[150px] leading-[92.48958333333334px] 
                2xl:leading-[130px] tracking-wider ${
                  inEmphasis ? "bg-white px-2 pb-2 text-current" : "text-white"
                }`}
              >
                {title}
              </h2>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-manrope text-lg 2xl:text-2xl font-bold">
            {props.subtitle}
          </span>
          <span className="font-manrope text-lg 2xl:text-2xl  ">
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
      "base-content": "bg-primary",
      "text-content": "text-white",
      "button-content": "text-white",
    },
    "variant": {
      "base-content": "bg-base-content",
      "text-content": "text-accent",
      "button-content": "text-white",
    },
  };

  const style = colorsSchemaStyle[colorsSchema];

  return (
    <div className="w-[83.23%] mx-auto flex flex-col">
      <div
        className={`${style["base-content"]} w-full py-32 2xl:py-48 `}
      >
        <div className="flex w-full justify-center items-start gap-[16.98%]">
          <div className={`contents ${style["text-content"]}`}>
            {isVariant1(contentLeft)
              ? <LeftVariant {...contentLeft} />
              : <LeftDefault {...contentLeft} />}
          </div>
          <div
            className={`w-1/3 flex flex-col ${
              style["text-content"]
            } gap-6 2xl:gap-9`}
          >
            <h3
              className={`font-manrope font-semibold leading-7 2xl:leading-10 text-lg 2xl:text-2xl`}
            >
              {contentRight.title}
            </h3>
            <div className="flex flex-col gap-6 2xl:gap-9">
              {contentRight.description.map(({ text }, index) => (
                <p
                  className="font-manrope text-lg 2xl:text-2xl leading-7 2xl:leading-10"
                  key={index}
                >
                  {text}
                </p>
              ))}
            </div>
            <a
              className={`btn btn-active btn-link font-manrope font-bold uppercase  
              text-lg 2xl:text-2xl leading-7 2xl:leading-10 tracking-widest px-0 underline-offset-8 2xl:underline-offset-[12px]  ${
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
        <div className="flex bg-white w-full min-h-96 2xl:min-h-[560px]">
          <div className="w-1/4 bg-secondary-content flex justify-center items-center p-4">
            <Grafismo
              id={blockCounter.graphics}
              width={274.6229166666667}
              height={398.4166666666667}
              className="text-primary"
            />
          </div>
          <div className="w-full flex items-center justify-evenly">
            {blockCounter.counter?.map(({ label, number }) => (
              <div className="flex flex-col items-start justify-start gap-4 2xl:gap-8">
                <h4 className="font-bison font-semibold text-[106.71875px] 
            2xl:text-[150px] leading-[92.48958333333334px] 2xl:leading-[130px] tracking-wider text-primary">
                  {number}
                </h4>
                <h5 className="font-manrope text-2xl 2xl:text-4xl uppercase tracking-widest text-black">
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
