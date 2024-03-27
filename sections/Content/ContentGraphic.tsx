import type { Graphics } from "$store/components/ui/Grafismo.tsx";
import { Grafismo } from "$store/components/ui/Grafismo.tsx";

export interface Props {
  /**
   * @default Grafismo4
   */
  graphics?: Graphics;
  title?: string;
  content?: string;
}

export default function ContentGraphic(
  {
    title = "talent bank",
    graphics = "Grafismo4",
    content =
      "What is the most important thing to evaluate in an early-stage investment? What is our big asset inside MAYA? What will be the biggest differentiator that will make our portfolio companies successful? The answer to all questions above is people. That's why we are people-centric. That's why we want to be close to you. That's why we invest meaningful time to know the best talents of our region. If you want to be a part of our Talent Database, please provide the information below:",
  }: Props,
) {
  return (
    <div className="w-full lg:w-[83.23%] mx-auto flex flex-col mb-20 2xl:mb-44">
      <div className="flex bg-white w-full min-h-80 lg:min-h-[621.8145833333333px] 2xl:min-h-[874px]">
        <div className="w-2/5 bg-primary-content flex justify-center items-center lg:py-16 2xl:py-24 px-5 lg:px-11 2xl:px-16">
          <Grafismo
            id={graphics ?? "Grafismo4"}
            width={91}
            height={290}
            className="text-white lg:hidden"
            viewBox="0 0 410 1003.92"
          />
          <Grafismo
            id={graphics ?? "Grafismo4"}
            width={365.6895833333333}
            height={438.96979166666665}
            className="hidden lg:block text-white"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-6 lg:gap-14 2xl:gap-20 bg-secondary px-8 py-10 lg:py-0 lg:px-24 2xl:pl-36 lg:pr-16 2xl:pr-24">
          <h4 className="font-bison font-semibold text-[32px] lg:text-7xl 
            2xl:text-[100px] lg:leading-[62px] 2xl:leading-[88.2px] tracking-wider text-white">
            {title}
          </h4>
          <p className="font-manrope text-[9px] lg:text-xl 2xl:text-3xl text-white lg:leading-7 2xl:leading-10">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
