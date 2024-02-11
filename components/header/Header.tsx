import Drawers from "$store/islands/Header/Drawers.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";

export interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

export interface Props {
  alerts?: string[];
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: SiteNavigationElement[] | null;

  /**
   * @title Logo
   * @description In the logo we have two variants, the default one that is used in the menu, and the white variant that is used in the menu with a blue background.
   */
  logo?: {
    default: Logo;
    variant: Logo;
  };
  /**
   * @title Language Text
   * @default EN
   */
  langText?: string;
}

function Header({
  alerts,
  navItems = [
    {
      "@type": "SiteNavigationElement",
      name: "Feminino",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Masculino",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Sale",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Linktree",
      url: "/",
    },
  ],
  logo = {
    default: {
      src:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
      width: 100,
      height: 16,
      alt: "Logo",
    },
    variant: {
      src:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
      width: 100,
      height: 16,
      alt: "Logo",
    },
  },
  langText = "EN",
}: Props) {
  const platform = usePlatform();
  const items = navItems ?? [];

  return (
    <>
      <header>
        <Drawers
          menu={{ items, logo: logo.variant, langText }}
          platform={platform}
        >
          <div class="bg-base-100 w-full z-50 ">
            {alerts && alerts.length > 0 && <Alert alerts={alerts} />}
            <Navbar
              logo={logo.default}
              langText={langText}
            />
          </div>
        </Drawers>
      </header>
    </>
  );
}

export default Header;
