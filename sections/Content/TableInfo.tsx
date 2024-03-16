import { Title } from "$store/sections/Content/HeroMain.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import type { SectionProps } from "deco/types.ts";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import { SelectOptions } from "$store/components/ui/SelectOptions.tsx";

interface FilteredBy {
  [key: string]: Option[];
}

/** @title {{label}} */
export interface Option {
  label: string;
  /**
   * @hide
   */
  value?: string;
}

/** @title {{name}} */
export interface Founder {
  name: string;
  image: ImageWidget;
}

export interface Content {
  image: {
    desktop: ImageWidget;
    mobile: ImageWidget;
    alt?: string;
  };
  sector: Option[];
  country: Option;
  website: string;
  coInvestors: string;
  /**
   * @format textarea
   */
  longDescription: string;
  founders: Founder[];
}

/** @title {{name}} */
export interface ContentCollapse {
  name: string;
  description: string;
  content: Content;
}

export interface Props {
  titleWords?: Title[];
  /**
   * @hide
   */
  filteredBy?: FilteredBy[];
  contents?: ContentCollapse[];
  /**
   * @hide
   */
  filtersActive?: {
    [key: string]: string;
  };
}

const Content = ({ name, description, content }: ContentCollapse) => {
  const styleTextContent =
    "font-manrope text-white text-[9px] lg:text-sm 2xl:text-xl lg:leading-[22px] 2xl:leading-8";
  return (
    <div className="border-b border-black">
      <details className="collapse collapse-table py-2 lg:py-[18px]  2xl:py-[26px] rounded-none group 
        hover:bg-primary transition-all duration-300">
        <summary className="min-h-fit collapse-title p-0  transition-all">
          <div className="flex items-center">
            <span class="font-manrope text-[9px] lg:text-xl 2xl:text-3xl leading-3 lg:leading-7 2xl:leading-10 flex-1 text-black
               group-hover:text-white transition-all collapse-text pl-1 lg:pl-6">
              {name}
            </span>
            <div
              className="flex justify-between items-center lg:pr-7 pr-3 2xl:pr-10 gap-6 lg:gap-0"
              style={{ flex: "3" }}
            >
              <span class="font-manrope text-[6.48px] lg:text-sm 2xl:text-xl leading-none lg:leading-[22px] 2xl:leading-8 max-w-lg
                 text-black group-hover:text-white 
                transition-all duration-300 short-description collapse-text">
                {description}
              </span>
              <div className="relative min-w-[23.7px] min-h-6 lg:hidden">
                <Icon
                  id="PlusCircle"
                  width={22}
                  height={22}
                  data-plus
                  className="collapse-icon text-black group-hover:text-white 
                    collapse-text"
                  strokeWidth={2}
                />
                <Icon
                  id="MinusCircle"
                  width={22}
                  height={22}
                  data-minus
                  className="collapse-icon text-black group-hover:text-white 
                    collapse-text"
                  strokeWidth={2}
                />
              </div>
              <div className="hidden lg:block relative w-[52.03px] h-[51.80px] 2xl:w-[73.14px] 2xl:h-[72.81px]">
                <Icon
                  id="PlusCircle"
                  width={73.14}
                  height={72.81}
                  data-plus
                  className="collapse-icon text-black group-hover:text-white 
                    collapse-text w-[52.03px] h-[51.80px] 2xl:w-[73.14px] 2xl:h-[72.81px]"
                  strokeWidth={2}
                />
                <Icon
                  id="MinusCircle"
                  width={73.14}
                  height={72.81}
                  data-minus
                  className="collapse-icon text-black group-hover:text-white 
                    collapse-text w-[52.03px] h-[51.80px] 2xl:w-[73.14px] 2xl:h-[72.81px]"
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>
        </summary>
        <div className="collapse-content flex flex-col">
          <Image
            src={content.image?.mobile ?? ""}
            alt={content.image.alt ?? name}
            width={253}
            height={58}
            className="w-full lg:hidden"
            loading="lazy"
          />
          <Image
            src={content.image?.desktop ?? ""}
            alt={content.image.alt ?? name}
            width={1280}
            height={290}
            className="w-full hidden lg:block"
            loading="lazy"
          />
          <div className="flex flex-col px-3 lg:px-11 2xl:px-16 ">
            <div className="flex justify-between gap-4 2xl:gap-6  mt-2 lg:mt-6 2xl:mt-9  mb-3 lg:mb-10 2xl:mb-14">
              <div className="flex flex-col">
                <span className={`font-bold ${styleTextContent}`}>
                  Sector
                </span>
                <span className={`${styleTextContent}`}>
                  {content.sector.map(({ label }) => label).join(", ")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold ${styleTextContent}`}>
                  Website
                </span>
                <span className={` ${styleTextContent}`}>
                  {content.website}
                </span>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold ${styleTextContent}`}>
                  Co-Invertors
                </span>
                <span className={` ${styleTextContent}`}>
                  {content.coInvestors}
                </span>
              </div>
            </div>
            <p className={` ${styleTextContent}`}>
              {content.longDescription}
            </p>
            <div className="flex flex-col mt-3 lg:mt-10 2xl:mt-14 gap-1 lg:gap-3 2xl:gap-4">
              <span className="font-manrope font-bold text-white text-[9px] lg:text-sm 2xl:text-xl lg:leading-[22px] 2xl:leading-8">
                Founders
              </span>
              <div className="flex flex-wrap gap-3 lg:gap-[34px] 2xl:gap-12">
                {content.founders.map(({ image, name: founderName }) => (
                  <div className="flex gap-2 2xl:gap-3 items-center w-2/5 lg:w-auto">
                    <Image
                      src={image}
                      alt={founderName}
                      width={40}
                      height={40}
                      loading="lazy"
                      className="lg:hidden"
                    />
                    <Image
                      src={image}
                      alt={founderName}
                      width={100}
                      height={100}
                      loading="lazy"
                      className="w-[71.14px] h-[71.14px] 2xl:w-[100px] 2xl:h-[100px] hidden lg:block"
                    />
                    <p className="font-manrope text-[9px] lg:text-sm 2xl:text-xl lg:leading-[22px] 2xl:leading-8 text-white max-w-16 lg:max-w-28 tracking-wider">
                      {founderName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default function TableInfoCompanys(
  { titleWords, filteredBy, contents, filtersActive }: SectionProps<
    ReturnType<typeof loader>
  >,
) {
  return (
    <div className="bg-secondary-content">
      <div className="px-[8.33%] lg:px-0 flex flex-col pt-[50px] lg:pt-[91px] 
        2xl:pt-32 pb-10 lg:pb-28 2xl:pb-[158px] lg:max-w-[66.67%] mx-auto w-full">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between border-b lg:border-b-2 border-primary lg:items-end pb-1 lg:py-[22px] 2xl:py-8 gap-6 lg:gap-0">
          <h2 className="block">
            {titleWords.map(({ title, inEmphasis }) => (
              <Text
                key={title}
                variant="heading-3"
                className={`text-primary ${inEmphasis ? "highligh-text" : ""}`}
              >
                {title} {" "}
              </Text>
            ))}
          </h2>
          <div className="flex gap-2 lg:gap-4 2xl:gap-6 w-full justify-end lg:w-[35%]">
            <SelectOptions
              name="Country"
              options={filteredBy.country}
              currentFiltersActive={filtersActive}
              filterBy="country"
            />
            <SelectOptions
              name="Sector"
              options={filteredBy.sector}
              currentFiltersActive={filtersActive}
              filterBy="sector"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="py-1 lg:py-0 flex items-center border-b border-black">
            <span class="font-manrope font-bold text-[5.19px] lg:text-xs 2xl:text-base lg:leading-7  2xl:leading-10 flex-1 text-black tracking-widest uppercase">
              Company name
            </span>
            <span
              class="font-manrope font-bold text-[5.19px] lg:text-xs 2xl:text-base lg:leading-7  2xl:leading-10  text-black tracking-widest uppercase"
              style={{ flex: "3" }}
            >
              Short Description
            </span>
          </div>
          <div className="flex flex-col max-h-96 lg:max-h-[355px] 2xl:max-h-[500px] overflow-y-auto scrollbar-variant">
            {contents.map((contentProp) => <Content {...contentProp} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

const DEFAULT_PROPS = {
  titleWords: [
    {
      title: "MEET THE",
      inEmphasis: false,
    },
    {
      title: "MAYAns",
      inEmphasis: true,
    },
  ],
  filteredBy: {
    sector: [
      {
        label: "All",
        value: "all",
      },
      {
        label: "HealhTech",
        value: "healtech",
      },
      {
        label: "InsureTech",
        value: "insuretech",
      },
      {
        label: "Tech",
        value: "tech",
      },
    ],
  },
  contents: [
    {
      name: "Alice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content: {
        image: {
          desktop:
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4277/cc66e76b-1f1c-434a-97cf-2d3a4f22c9f8",
          mobile:
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4277/cc66e76b-1f1c-434a-97cf-2d3a4f22c9f8",
          alt: "Company Alice",
        },
        sector: [
          {
            label: "HealhTech",
            value: "healtech",
          },
          {
            label: "InsureTech",
            value: "insuretech",
          },
        ],
        country: {
          label: "Brazil",
          value: "br",
        },
        website: "alice.com.br",
        coInvestors: "Softbank, Kaszek, ThornTree Capital Partners, Canary",
        longDescription:
          "Alice is a technology company reinventing the health insurance industry in Brazil by offering B2C health insurance combined with proprietary primary care, delivered digitally and in-person. Primary care teams, namely Health Squads, look after members and coordinate their care within a network of high-quality providers who are seamlessly integrated through Alice digital health platform, creating a virtual verticalized health system that delivers better health outcomes at lower costs.",
        founders: [
          {
            "name": "Andrea Florence",
            "image":
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4277/f5cb0d0b-05ea-4eeb-89c9-9ea952ac380f",
          },
          {
            "name": "Guilherme Azevedo",
            "image":
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4277/fd64c41f-6085-44d7-a78e-ae21996e1549",
          },
          {
            "name": "Andrea Florence",
            "image":
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4277/fd64c41f-6085-44d7-a78e-ae21996e1549",
          },
          {
            "name": "Guilherme Azevedo",
            "image":
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4277/fd64c41f-6085-44d7-a78e-ae21996e1549",
          },
        ],
      },
    },
  ],
};

export const loader = (props: Props, req: Request) => {
  const countryParamValue = new URL(req.url)?.searchParams?.get("country");
  const sectorParamValue = new URL(req.url)?.searchParams?.get("sector");

  const data = { ...DEFAULT_PROPS, ...props };
  const dataModified = {
    ...data,
    contents: data.contents.map((dataContent) => {
      return {
        ...dataContent,
        content: {
          ...dataContent.content,
          sector: dataContent.content.sector.map(({ label }) => ({
            label,
            value: label.toLocaleLowerCase(),
          })),
          country: {
            ...dataContent.content.country,
            value: dataContent.content.country.label.toLocaleLowerCase(),
          },
        },
      };
    }),
  };

  const filteredBy = dataModified.contents.reduce(
    (acc: { sector: Option[]; country: Option[] }, currentData) => {
      const dataSector = currentData.content.sector.filter((currentSector) =>
        !acc?.["sector"]?.find((sectorInAcc: Option) =>
          sectorInAcc.value === currentSector.value
        )
      ).filter((currentSector) => !!currentSector.value);

      acc["sector"].push(...dataSector);

      const hasInsertedCountry = acc["country"]?.find((accCountry) =>
        accCountry.value === currentData.content.country?.value
      );

      if (!hasInsertedCountry) {
        acc["country"]?.push(currentData.content.country);
      }

      return acc;
    },
    {
      sector: [],
      country: [],
    },
  );

  const checkFilter = (filter: string | null) => {
    return filter ? JSON.stringify(filteredBy).includes(filter) : false;
  };

  const contentsModified = dataModified.contents.filter(({ content }) => {
    const hasCountryFilter = checkFilter(countryParamValue);
    const hasSectorFilter = checkFilter(sectorParamValue);

    if (hasCountryFilter && hasSectorFilter) {
      return (
        content.country.value === countryParamValue ||
        content.sector.some((sector) => sector.value === sectorParamValue)
      );
    }

    if (hasCountryFilter) {
      return content.country.value === countryParamValue;
    }

    if (hasSectorFilter) {
      return content.sector.some((sector) => sector.value === sectorParamValue);
    }

    return true;
  });

  const filtersActive: { [key: string]: string } = {};

  if (sectorParamValue) {
    filtersActive.sector = sectorParamValue;
  }

  if (countryParamValue) {
    filtersActive.country = countryParamValue;
  }

  return {
    ...dataModified,
    contents: contentsModified,
    filteredBy,
    filtersActive,
  };
};
