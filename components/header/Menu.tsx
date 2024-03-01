import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Text from "$store/components/ui/Text.tsx";
import MenuButton from "./Buttons/Menu.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  items: SiteNavigationElement[];
  langText: string;
}

function Menu({ items, langText }: Props) {
  return (
    <div class="w-full flex flex-col h-full bg-primary-content overflow-y-auto 2xl:gap-3 pb-10">
      <div class="flex justify-between items-center gap-2 w-[83.23%] mx-auto py-16">
        <a
          href="/"
          aria-label="logo"
        >
          <Icon
            id="Logo"
            width={280}
            height={40}
            className="w-[199px] h-7 2xl:w-[280px] 2xl:h-10 text-white"
          />
        </a>
        <div className="ml-auto flex items-center gap-5 2xl:gap-8">
          <Text variant="caption" className="text-secondary ">
            {langText}
          </Text>
          <MenuButton />
        </div>
      </div>
      <ul class="px-4 flex-grow flex flex-col gap-4 2xl:gap-[22px] items-center">
        {items.map((item) => (
          <li>
            <a
              class="font-bison font-bold text-[56px] 2xl:text-[80px] 
              text-white leading-[80px] 2xl:leading-[113.76px]"
              href={item.url}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
