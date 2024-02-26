import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

/** @title {{name}} */
export interface Card {
  image: {
    src: ImageWidget;
    alt?: string;
  };
  name: string;
  jobPosition: string;
  socialAction: {
    icon: ImageWidget;
    href: string;
    alt: string;
  };
}

export interface Props {
  cards?: Card[];
}

export default function PeopleCards({ cards = [] }: Props) {
  if (!cards.length) return null;

  return (
    <div className="w-[66.67%] 2xl:max-w-screen-xl mx-auto pb-32 2xl:pb-44">
      <div className="flex flex-wrap gap-x-8 gap-y-[65px] 2xl:gap-x-11 2xl:gap-y-[92px] items-center justify-start">
        {cards.map(({ name, image, jobPosition, socialAction }) => (
          <div
            key={name}
            className="flex flex-col  gap-2 max-w-[30%]"
            style={{ flex: "1 1 30%" }}
          >
            <Image
              loading="lazy"
              src={image.src}
              alt={image.alt ?? name}
              width={398}
              height={401}
              className="w-full h-full object-contain"
            />
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-manrope text-sm 2xl:text-xl leading-[22px] 2xl:leading-8 text-primary font-extrabold">
                  {name}
                </span>
                <span className="font-manrope text-sm 2xl:text-xl  leading-[22px] 2xl:leading-8 text-primary ">
                  {jobPosition}
                </span>
              </div>
              <a href={socialAction.href} title={socialAction.alt}>
                <Image
                  loading="lazy"
                  src={socialAction.icon}
                  alt={socialAction.alt}
                  width={37}
                  height={37}
                  className="w-[26px] h-[26px] 2xl:w-[37px] 2xl:h-[37px]"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
