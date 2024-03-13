import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "deco-sites/maya/components/ui/Icon.tsx";

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
  copyrightText?: string;
  extraLinks?: Item[];
  socialIcons?: SocialItem[];
  items?: Item[];
}

export default function SimpleFooter({
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
    <div className="w-full bg-primary-content lg:px-[8.33%]">
      <div className="w-[63.43%] mx-auto lg:w-full 2xl:w-11/12 pt-16 pb-5 lg:pt-28 2xl:pt-40 lg:pb-20 2xl:pb-28 flex flex-col lg:flex-row gap-10 lg:gap-48">
        <div className="flex flex-col justify-between flex-1">
          <a
            href="/"
            aria-label="logo"
          >
            <Icon
              id="Logo"
              width={140}
              height={28}
              className="lg:hidden text-white"
            />
            <Icon
              id="Logo"
              width={280}
              height={40}
              className="hidden lg:block w-[199px] h-7 2xl:w-[280px] 2xl:h-10 text-white"
            />
          </a>
          <span className="hidden lg:block font-manrope text-sm 2xl:text-xl text-white">
            {copyrightText}
          </span>
        </div>
        <div className="flex w-full justify-between lg:contents">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-5 lg:gap-10 2xl:gap-14">
              {extraLinks.length && extraLinks.map((extraLink) => (
                <a
                  href={extraLink.href}
                  title={extraLink.label}
                  className="font-bison font-semibold text-base lg:text-[35px] 2xl:text-5xl text-white uppercase"
                >
                  {extraLink.label}
                </a>
              ))}
            </div>
            <div className="flex gap-1 lg:gap-[22px] 2xl:gap-8">
              {socialIcons.length && socialIcons.map((socialIcon) => (
                <a
                  href={socialIcon?.href}
                  title={socialIcon?.label}
                >
                  <Image
                    src={socialIcon?.image}
                    alt={socialIcon?.label}
                    width={36}
                    height={36}
                    className="hidden lg:block object-contain w-6 h-6 2xl:w-9 2xl:h-9"
                    loading="lazy"
                  />
                  <Image
                    src={socialIcon?.image}
                    alt={socialIcon?.label}
                    width={15}
                    height={15}
                    className="lg:hidden object-contain"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:gap-5 2xl:gap-8">
            {items.length && items.map((item) => (
              <a
                href={item.href}
                title={item.label}
                className="font-marope  text-[9px] lg:text-xl 2xl:text-[28px] text-white 
                  lg:leading-[46px] 2xl:leading-[65px]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <span className="font-manrope text-[6.48px] lg:text-sm 2xl:text-xl text-white lg:hidden">
          {copyrightText}
        </span>
      </div>
    </div>
  );
}
