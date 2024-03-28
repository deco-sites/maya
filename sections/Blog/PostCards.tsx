import { ImageWidget } from "apps/admin/widgets.ts";
import type { SectionProps } from "deco/types.ts";
import Image from "apps/website/components/Image.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface FilterBy {
  label: string;
  value: string;
  /**
   * @hide
   */
  active?: boolean;
}

export interface CallToAction {
  /**
   * @default Read more
   */
  text: string;
  href: string;
}

/**@title {{title}} - {{#type}}{{label}}{{/type}} */
export interface Post {
  image: {
    src: ImageWidget;
    srcMobile: ImageWidget;
    alt?: string;
  };
  /**
   * @description One of the types previously registered in the Filter by field
   */
  type: FilterBy;
  /**
   * @format date
   */
  date: string;
  title: string;
  callToAction: CallToAction;
}

export interface Props {
  /**
   * @title Filter by
   * @description The same word is used in type post
   */
  filterBy?: FilterBy[];
  posts?: Post[];
}

export default function PostCards(
  { filterBy, posts }: SectionProps<ReturnType<typeof loader>>,
) {
  return (
    <div className="w-full sm:w-[83.23%] mx-auto mb-12 lg:mb-44 2xl:mb-60">
      <div className="px-5 lg:px-0 flex flex-col items-center gap-14 lg:gap-28 2xl:gap-40">
        <div className="w-full lg:w-auto flex gap-2 lg:gap-5 2xl:gap-[30px]  justify-center items-center overflow-x-auto">
          {filterBy.map((filter) => {
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 2xl:gap-28 items-center justify-center auto-rows-max">
          {posts?.map(({ title, image, type, date, callToAction }) => (
            <div
              key={title}
              className="flex flex-col justify-start self-stretch"
            >
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt ?? title}
                  width={290}
                  height={133}
                  className="lg:hidden w-full object-cover max-h-32"
                />
                <Image
                  src={image.src}
                  alt={image.alt ?? title}
                  width={464}
                  height={413}
                  className="hidden lg:block w-full object-contain"
                />
                <span
                  className="absolute top-1 lg:top-3 2xl:top-4 left-1 2xl:left-2 px-2 lg:px-4
                  2xl:px-7 bg-white text-primary font-manrope font-bold text-[8px] lg:text-xs
                  2xl:text-lg uppercase tracking-wider lg:!rounded-md flex items-center justify-center
                  min-h-4 lg:min-h-14"
                  style={{ borderRadius: "2px" }}
                >
                  {type.label}
                </span>
              </div>
              <time
                datetime={date}
                className="font-manrope font-medium text-[8px] lg:text-xs 2xl:text-lg tracking-wider text-secondary mt-2 lg:mt-4 2xl:mt-6 uppercase"
              >
                {date}
              </time>
              <div className="flex flex-col gap-3 lg:gap-9 h-full">
                <span className="font-manrope text-[9px] lg:text-xl  2xl:text-3xl tracking-wider text-secondary lg:leading-10 mt-2 lg:mt-4 line-clamp-2">
                  {title}
                </span>
                <div className="flex justify-between items-center gap-10 lg:contents">
                  <a
                    className="btn btn-active btn-link font-manrope font-bold uppercase  
                      text-[8px] lg:text-xs 2xl:text-lg  tracking-widest px-0 mr-auto mt-auto lg:leading-6 2xl:leading-9  !no-underline lg:!underline lg:underline-offset-[8px] 
                      2xl:underline-offset-[12px] min-h-fit h-auto"
                    href={callToAction.href}
                    title={callToAction.text}
                  >
                    {callToAction.text}
                  </a>
                  <hr className="border-primary bg-primary lg:hidden w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const loader = ({ filterBy = [], posts = [] }: Props, req: Request) => {
  const filterParamValue = new URL(req.url)?.searchParams?.get("filter");

  const enableToFilter = filterParamValue &&
    JSON.stringify(filterBy).includes(filterParamValue);

  const currentPosts = enableToFilter
    ? posts.filter(({ type }) => type.value === filterParamValue)
    : posts;

  const currentFilterBy = enableToFilter
    ? filterBy.map((filter) => ({
      ...filter,
      active: filter.value === filterParamValue,
    }))
    : filterBy;

  return {
    posts: currentPosts,
    filterBy: [
      { label: "All", value: "all", active: !enableToFilter },
      ...currentFilterBy,
    ],
  };
};
