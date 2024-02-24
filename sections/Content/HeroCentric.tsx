// export default function HeroCentric() {
//   return (
//     <div class="parent w-full h-[1340px] pl-9">
//       <style dangerouslySetInnerHTML={{__html: `
//         .parent {
//           display: grid;
//           grid-template-columns: repeat(9, 1fr);
//           grid-template-rows: repeat(8, 1fr);
//           grid-column-gap: 0px;
//           grid-row-gap: 0px;
//           }

//           .div2 { grid-area: 2 / 1 / 3 / 2; background: red; width: 256px; height: 256px; border-radius: 100%}
//           .div3 { grid-area: 2 / 3 / 3 / 4;  background: blue;  width: 122px; height: 122px; border-radius: 100%  ;  align-self: self-end;
//           justify-self: flex-end;}
//           .div4 { grid-area: 6 / 2 / 7 / 3;  background: red;  width: 204px; height: 204px; border-radius: 100%}
//           .div5 { grid-area: 4 / 4 / 5 / 8;  background: red}
//           .div6 { grid-area: 2 / 8 / 3 / 9;  background: red; width: 215px; height: 215px; border-radius: 100%}
//           .div7 { grid-area: 6 / 9 / 7 / 9;  background: red; width: 330px; height: 330px; border-radius: 100%}
//           .div8 { grid-area: 7 / 4 / 8 / 8;  background: red}
//           .div9 { grid-area: 8 / 5 / 9 / 7;  background: red}
//       `}} />
//       <div class="div2"> </div>
//       <div class="div3"> </div>
//       <div class="div4"> </div>
//       <div class="div5"> </div>
//       <div class="div6"> </div>
//       <div class="div7"> </div>
//       <div class="div8"> </div>
//       <div class="div9"> </div>
//     </div>
//   )
// }
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";

export interface Props {
  /** @title Images Background */
  imageBackground: ImageWidget;
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

export default function HeroCentric({
  imageBackground = "",
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
  return (
    <div className="w-full relative pt-60 2xl:pt-96 pb-36 bg-secondary-content">
      <div className="absolute left-0 top-0 w-full h-full pl-9">
        <Image
          loading="lazy"
          src={imageBackground}
          alt="people in circles as the background of the section"
          width={1883}
          height={883}
          className="w-full h-full object-contain cover-grid"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-14 2xl:gap-36 z-10 relative">
        <div className="flex items-center gap-5">
          <span className="font-bison font-bold text-[80px] 2xl:text-[100px] 2xl:leading-[120px] text-primary uppercase">
            {titleWords[0]}
          </span>
          <span
            data-before={titleWords[1]}
            className="flex items-center justify-center
           before w-[300px] h-[300px] 2xl:w-[451px] 2xl:h-[451px] 
            rounded-full bg-primary-content before:content-[attr(data-before)] 
            font-bold before:text-[114px] before:2xl:text-[160px] before:2xl:leading-[120px] 
            before:text-secondary-content before:font-bison before:z-10 
            before:uppercase"
          >
          </span>
          <span className="font-bison text-[80px] font-bold 2xl:text-[100px] 2xl:leading-[120px] text-primary uppercase">
            {titleWords[2]}
          </span>
        </div>
        <div className="flex flex-col gap-10 2xl:gap-14">
          <Text
            variant="content-1"
            className="text-center max-w-2xl 2xl:max-w-4xl"
          >
            {description}
          </Text>
          <a
            className="btn btn-active btn-link font-manrope font-bold uppercase tracking-widest 
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
