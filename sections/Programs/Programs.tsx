import { type Section } from "@deco/deco/blocks";
import { type SectionProps } from "@deco/deco";
import { usePartialSection } from "@deco/deco/hooks";
export interface FilterBy {
  label: string;
  value: string;
  /**
   * @hide
   */
  active?: boolean;
}
export interface Props {
  /**
   * @title Filter by
   * @description The same word is used in type program
   */
  filterBy?: FilterBy[];
  /**
   * @description Use Components insisd folder /Programs/
   */
  sections?: Section[];
}
export default function Programs(
  { filterBy, sections }: SectionProps<ReturnType<typeof loader>>,
) {
  return (
    <div className="lg:mt-24 2xl:mt-36 mb-11 lg:mb-36 2xl:mb-52">
      <div className="lg:w-full mx-auto mb-11 lg:mb-24 2xl:mb-60">
        <div className="flex flex-col items-center gap-2 lg:gap-28 2xl:gap-40">
          <div className="flex gap-2 lg:gap-5 2xl:gap-[30px] items-center">
            {filterBy?.map((filter) => {
              const style = filter.active
                ? "bg-primary text-white"
                : "bg-transparent text-primary";
              return (
                <button
                  className={`appearance-none flex justify-center items-center uppercase tracking-wider text-[8px] lg:text-base 2xl:text-2xl px-4 lg:px-10 2xl:px-14 py-2 lg:py-5 2xl:py-7 rounded-md min-h-7 lg:min-h-16 2xl:min-h-[91px] border border-primary font-bold ${style}`}
                  {...usePartialSection({ href: `?filter=${filter.value}` })}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:gap-20 2xl:gap-28">
        {sections?.map(({ Component, props }, index) => (
          <div key={index} className="contents">
            <Component {...props} />
            {index !== sections.length - 1 && (
              <hr className="border border-white w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export const loader = (
  { filterBy = [], sections = [] }: Props,
  req: Request,
) => {
  const filterParamValue = new URL(req.url)?.searchParams?.get("filter");
  const enableToFilter = filterParamValue &&
    JSON.stringify(filterBy).includes(filterParamValue);
  const currentSections = enableToFilter
    ? sections.filter((section) =>
      section.props.type.value === filterParamValue
    )
    : sections;
  const currentFilterBy = enableToFilter
    ? filterBy.map((filter) => ({
      ...filter,
      active: filter.value === filterParamValue,
    }))
    : filterBy;
  return {
    sections: currentSections,
    filterBy: [
      { label: "All", value: "all", active: !enableToFilter },
      ...currentFilterBy,
    ],
  };
};
