import Icon from "$store/components/ui/Icon.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import type { ComponentChildren } from "preact";
import { Logo } from "$store/components/header/Header.tsx";
import Navbar from "$store/components/header/Navbar.tsx";
import Text from "$store/components/ui/Text.tsx";
import { navbarHeight } from "$store/components/header/constants.ts";
import Image from "apps/website/components/Image.tsx";
import MenuButton from "./Buttons/Menu.tsx"

export interface Props {
  items: SiteNavigationElement[];
  logo: Logo;
  langText: string;
}

function Menu({ items, langText, logo }: Props) {
  return (
    <div class="w-full flex flex-col h-full bg-primary-content">
      <div
        class="flex justify-between items-center w-full gap-2 px-[8.33%] mx-auto py-16"
      >
        {logo && (
          <a
            href="/"
            aria-label="logo"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 100}
              height={logo.height || 13}
            />
          </a>
        )}
        <div className="ml-auto flex items-center gap-8">
          <Text variant="caption">
            {langText}
          </Text>
          <MenuButton />
        </div>
      </div>
      <ul class="px-4 flex-grow flex flex-col gap-6 items-center">
        {items.map((item) => (
          <li className="contents">
            <a class="" href={item.url}>
              <Text variant="menu" class="leading-[80px]">
                {item.name}
              </Text>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
