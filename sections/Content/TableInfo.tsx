import { Title } from "$store/sections/Content/HeroMain.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import type { SectionProps } from "deco/types.ts";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";

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
    src: ImageWidget;
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
}

export const SelectOptions = (
  { options, name }: { options: Option[]; name: string },
) => {
  return (
    <select class="block focus:border-primary focus:primary text-primary h-8 text-base uppercase font-bold tracking-widest bg-secondary-content">
      <option disabled selected className="text-base">{name}</option>
      {options.map((option) => (
        <option value={option.value} className="text-base capitalize">
          {option.label}
        </option>
      ))}
    </select>
  );
};

const Content = ({ name, description, content }: ContentCollapse) => {
  return (
    <div className="border-b border-black">
      <details className="collapse collapse-table py-6 rounded-none group 
        hover:bg-primary transition-all duration-300">
        <summary className="collapse-title p-0  transition-all">
          <div className="flex items-center">
            <span class="font-manrope text-3xl leading-10 flex-1 text-black
               group-hover:text-white transition-all collapse-text pl-6">
              {name}
            </span>
            <div
              className="flex justify-between items-center pr-10"
              style={{ flex: "3" }}
            >
              <span class="font-manrope text-xl  leading-8 max-w-lg
                 text-black group-hover:text-white 
                transition-all duration-300 short-description collapse-text">
                {description}
              </span>
              <div
                className="relative"
                style={{ width: "73.14px", height: "72.81px" }}
              >
                <Icon
                  id="PlusCircle"
                  width={73.14}
                  height={72.81}
                  data-plus
                  className="collapse-icon text-black group-hover:text-white collapse-text"
                  strokeWidth={2}
                />
                <Icon
                  id="MinusCircle"
                  width={73.14}
                  height={72.81}
                  data-minus
                  className="collapse-icon text-black group-hover:text-white collapse-text"
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>
        </summary>
        <div className="collapse-content flex flex-col">
          <Image
            src={content.image.src}
            alt={content.image.alt ?? name}
            width={1280}
            height={290}
            className="w-full"
            loading="lazy"
          />
          <div className="flex flex-col px-16 ">
            <div className="flex justify-between gap-6 mt-9 mb-14">
              <div className="flex flex-col">
                <span className="font-manrope text-xl font-bold text-white leading-8">
                  Sector
                </span>
                <span className="font-manrope text-xl text-white leading-8">
                  {content.sector.map(({ label }) => label).join(", ")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-manrope text-xl font-bold text-white leading-8">
                  Website
                </span>
                <span className="font-manrope text-xl text-white leading-8">
                  {content.website}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-manrope text-xl font-bold text-white leading-8">
                  Co-Invertors
                </span>
                <span className="font-manrope text-xl text-white leading-8">
                  {content.coInvestors}
                </span>
              </div>
            </div>
            <p className="font-manrope text-xl leading-8 text-white">
              {content.longDescription}
            </p>
          </div>
        </div>
      </details>
    </div>
  );
};

export default function TableInfoCompanys(
  { titleWords, filteredBy, contents }: SectionProps<ReturnType<typeof loader>>,
) {
  return (
    <div className="bg-secondary-content">
      <div className="flex flex-col py-32 max-w-[66.67%] mx-auto w-full">
        <div className="flex justify-between border-b-2 border-primary items-end py-8">
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
          <div className="flex gap-6 ">
            <SelectOptions name="Country" options={filteredBy.country} />
            <SelectOptions name="Sector" options={filteredBy.sector} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center border-b border-black">
            <span class="font-manrope font-bold text-base leading-10 flex-1 text-black tracking-widest uppercase">
              Company name
            </span>
            <span
              class="font-manrope font-bold text-base leading-10   text-black tracking-widest uppercase"
              style={{ flex: "3" }}
            >
              Short Description
            </span>
          </div>
          <div className="flex flex-col max-h-[500px] overflow-y-auto scrollbar-variant">
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
          src:
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

  return { ...dataModified, filteredBy };
};
