import Icon from "$store/components/ui/Icon.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import type { ComponentChildren } from "preact";
import { Logo } from "$store/components/header/Header.tsx";
import Navbar from "$store/components/header/Navbar.tsx";
import Text from "$store/components/ui/Text.tsx";

export interface Props {
  items: SiteNavigationElement[];
  logo: Logo;
  langText: string;
}

function MenuItem({ item }: { item: SiteNavigationElement }) {
  return (
    <div class="collapse collapse-plus">
      <input type="checkbox" />
      <div class="collapse-title">{item.name}</div>
      <div class="collapse-content">
        <ul>
          <li>
            <a class="underline text-sm" href={item.url}>Ver todos</a>
          </li>
          {item.children?.map((node) => (
            <li>
              <MenuItem item={node} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Menu({ items, langText, logo }: Props) {
  return (
    <div class="flex flex-col h-full bg-primary-content">
      {/* {headerMain} */}
      <Navbar langText={langText} logo={logo} />
      <ul class="px-4 flex-grow flex flex-col divide-y divide-base-200">
        {items.map((item) => (
          <li>
            <a class="underline" href={item.url}>
              <Text variant="menu">
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
