import Drawers from "$store/islands/Header/Drawers.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";

export interface Props {
  alerts?: string[];
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: SiteNavigationElement[] | null;

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
  langText = "EN",
}: Props) {
  const items = navItems ?? [];

  return (
    <>
      <header>
        <Drawers
          menu={{ items, langText }}
        >
          <div
            class="bg-[var(--bg-main)] w-full z-50"
            style={{ marginBottom: "-1px" }}
          >
            {alerts && alerts.length > 0 && <Alert alerts={alerts} />}
            <Navbar
              langText={langText}
            />
          </div>
        </Drawers>
      </header>
    </>
  );
}

export default Header;
