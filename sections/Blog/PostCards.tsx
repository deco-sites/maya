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
    <div className="w-[83.23%] mx-auto mb-44 2xl:mb-60">
      <div className="flex flex-col items-center gap-28 2xl:gap-40">
        <div className="flex gap-5 2xl:gap-[30px] items-center">
          {filterBy.map((filter) => {
            const style = filter.active
              ? "bg-primary text-white"
              : "bg-transparent text-primary";
            return (
              <button
                className={`appearance-none flex justify-center items-center uppercase tracking-wider text-base 2xl:text-2xl px-10 2xl:px-14 py-5 2xl:py-7 rounded-md min-h-16 2xl:min-h-[91px] border border-primary font-bold ${style}`}
                {...usePartialSection({ href: `?filter=${filter.value}` })}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-3  gap-16 2xl:gap-28 items-center justify-center auto-rows-max">
          {posts?.map(({ title, image, type, date, callToAction }) => (
            <div
              key={title}
              className="flex flex-col justify-start self-stretch"
            >
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt ?? title}
                  width={464}
                  height={413}
                  className="w-full object-contain"
                />
                <span className="absolute top-3 2xl:top-4 left-1 2xl:left-2 px-4
                  2xl:px-7 bg-white text-primary font-manrope font-bold text-xs
                  2xl:text-lg uppercase tracking-wider rounded-md flex items-center justify-center
                  min-h-14">
                  {type.label}
                </span>
              </div>
              <time
                datetime={date}
                className="font-manrope font-medium text-xs 2xl:text-lg tracking-wider text-secondary mt-4 2xl:mt-6 uppercase"
              >
                {date}
              </time>
              <div className="flex flex-col gap-9 h-full">
                <span className="font-manrope text-xl  2xl:text-3xl tracking-wider text-secondary leading-10 mt-4 line-clamp-2">
                  {title}
                </span>
                <a
                  className="btn btn-active btn-link font-manrope font-bold leading-9 uppercase  
                    text-xs 2xl:text-lg  tracking-widest px-0 mr-auto mt-auto"
                  href={callToAction.href}
                  title={callToAction.text}
                  style={{
                    textUnderlineOffset: "12px",
                  }}
                >
                  {callToAction.text}
                </a>
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
