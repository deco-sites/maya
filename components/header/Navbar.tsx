import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonLinx from "$store/islands/Header/Cart/linx.tsx";
import CartButtonShopify from "$store/islands/Header/Cart/shopify.tsx";
import CartButtonVDNA from "$store/islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import CartButtonWake from "$store/islands/Header/Cart/wake.tsx";
import CartButtonNuvemshop from "$store/islands/Header/Cart/nuvemshop.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import { Logo } from "$store/components/header/Header.tsx";
import Text from "deco-sites/maya/components/ui/Text.tsx";

function Navbar({ items, logo }: {
  items: SiteNavigationElement[];
  logo?: Logo;
}) {
  const platform = usePlatform();

  return (
    <>
      <div style={{ height: navbarHeight }}
       class="flex justify-between items-center w-full gap-2 px-[8.33%] mx-auto">
        {logo && (
          <a
            href="/"
            // class="flex-grow inline-flex items-center justify-center"
            // style={{ minHeight: navbarHeight }}
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
            EN
          </Text>
          <MenuButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;
