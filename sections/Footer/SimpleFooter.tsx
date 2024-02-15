import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Item = {
  label: string;
  href: string;
};

export type SocialItem = {
  image: ImageWidget;
  width?: number;
  height?: number;
  label: string;
  href: string;
};

export interface Props {
  logo?: {
    src: ImageWidget;
    alt?: string;
    width?: number;
    height?: number;
  };
  copyrightText?: string;
  extraLinks?: Item[];
  socialIcons?: SocialItem[];
  items?: Item[];
}

export default function SimpleFooter({
  logo = {
    src: "",
    alt: "Maya Capital Logo",
    width: 280,
    height: 40,
  },
  copyrightText = "© Maya Capital 2024",
  extraLinks = [
    {
      label: "ABOUT US",
      href: "#",
    },
    {
      label: "PORTFOLIO",
      href: "#",
    },
  ],
  socialIcons = [],
  items = [
    {
      label: "Team",
      href: "#",
    },
    {
      label: "Programs",
      href: "#",
    },
    {
      label: "Career",
      href: "#",
    },
    {
      label: "Blog",
      href: "#",
    },
    {
      label: " Contact Us",
      href: "#",
    },
    {
      label: "Pitch Us",
      href: "#",
    },
  ],
}: Props) {
  return (
    <div className="w-full bg-primary-content px-[8.33%]">
      <div className="w-full 2xl:w-11/12 pt-32 2xl:pt-40 pb-28 flex gap-48">
        <div className="flex flex-col justify-between flex-1">
          {logo.src && (
            <a
              href="/"
              aria-label="logo"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 280}
                height={logo.height || 40}
              />
            </a>
          )}
          <span className="font-manrope text-xl text-white">
            {copyrightText}
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-14">
            {extraLinks.length && extraLinks.map((extraLink) => (
              <a
                href={extraLink.href}
                title={extraLink.label}
                className="font-bison font-semibold text-5xl text-white uppercase"
              >
                {extraLink.label}
              </a>
            ))}
          </div>
          <div className="flex gap-8">
            {socialIcons.length && socialIcons.map((socialIcon) => (
              <a
                href={socialIcon?.href}
                title={socialIcon?.label}
              >
                <Image
                  src={socialIcon?.image}
                  alt={socialIcon?.label}
                  width={logo?.width || 36}
                  height={logo?.height || 36}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {items.length && items.map((item) => (
            <a
              href={item.href}
              title={item.label}
              className="font-marope text-3xl text-white leading-tight"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
