import Header from "site/components/ui/SectionHeader.tsx";
import { useId } from "site/sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Button from "site/components/ui/Button.tsx";

export interface CategoryGridProps {
  href?: string;
  image?: ImageWidget;
  /** @description Alternative text */
  label?: string;
  buttonText?: string;
}

export interface Props {
  header?: {
    title?: string;
    description?: string;
  };
  list?: CategoryGridProps[];
  layout?: {
    headerAlignment?: "center" | "left";
    categoryCard?: {
      textPosition?: "top" | "bottom";
      textAlignment?: "center" | "left";
    };
  };
}

function CategoryGrid(props: Props) {
  const id = useId();
  const {
    header = {
      title: "Explore Our Categories",
      description: "Your description",
    },
    list = [
      {
        href: "/category",
        image:
          "https://decoims.com/maya/c905ff20-a48f-4b73-9e52-3e3cba085c81/01c01ba9-ac16-4371-82ca-b93d17545f9c.png",
        label: "category",
        buttonText: "Explore collection",
      },
      {
        href: "/category",
        image:
          "https://decoims.com/maya/262c7161-6eb0-4307-ba8f-0aef68f08c22/9b80d57d-64b0-4eef-a3cd-fa8daafaae9c.png",
        label: "category",
        buttonText: "Explore collection",
      },
      {
        href: "/category",
        image:
          "https://decoims.com/maya/36376fd8-846e-44c6-9365-3923e68dd0a0/ed4c0eb3-96ab-484f-b293-e91d196a5063.png",
        label: "category",
        buttonText: "Explore collection",
      },
      {
        href: "/category",
        image:
          "https://decoims.com/maya/13b1d5f4-43fd-4c29-977d-a429b1a380d9/b9882ff7-3dbc-43e4-9813-5cec23c012cd.png",
        label: "category",
        buttonText: "Explore collection",
      },
    ],
    layout = {
      headerAlignment: "center",
      categoryCard: {
        textPosition: "bottom",
        textAlignment: "left",
      },
    },
  } = props;

  return (
    <div
      id={id}
      class="container mt-16"
    >
      <Header
        title={header.title}
        description={header.description || ""}
        alignment={layout.headerAlignment || "center"}
      />

      <div class="grid md:grid-cols-2 grid-cols-1 mt-6">
        {list.map((
          { href, image, label, buttonText },
        ) => (
          <div>
            <a
              href={href}
              class={`relative flex ${
                layout.categoryCard?.textAlignment === "left"
                  ? "justify-start"
                  : "justify-start items-center"
              } ${
                layout.categoryCard?.textPosition === "bottom"
                  ? "flex-col-reverse"
                  : "flex-col"
              }`}
            >
              {image &&
                (
                  <figure>
                    <Image
                      class="w-full"
                      src={image}
                      alt={label}
                      width={720}
                      height={480}
                      loading="lazy"
                    />
                  </figure>
                )}
              <Button
                class="font-light text-base-content bg-base-100 py-4 px-6 absolute m-6"
                aria-label={label}
              >
                {buttonText}
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;
