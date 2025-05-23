import Drawers from "site/islands/Header/Drawers.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Navbar from "./Navbar.tsx";
import { getCookies, setCookie } from "std/http/cookie.ts";
import { AppContext } from "apps/website/mod.ts";
import { type SectionProps } from "@deco/deco";
// import { AppContext } from "site/apps/site.ts";
export interface Lang {
  label: string;
  value: string;
  /**
   * @hide
   */
  active?: boolean;
}
export interface Props {
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: SiteNavigationElement[] | null;
  /**
   * @title Language Options
   */
  langText?: Lang[];
}
function Header({
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
  langText = [
    {
      label: "EN",
      value: "en",
      active: false,
    },
  ],
}: SectionProps<ReturnType<typeof loader>>) {
  // }: Props) {
  const items = navItems ?? [];
  return (
    <>
      <header>
        <Drawers menu={{ items, langText }}>
          <div
            class="bg-[var(--bg-main)] w-full z-50"
            style={{ marginBottom: "-1px" }}
          >
            <Navbar langText={langText} />
          </div>
        </Drawers>
      </header>
    </>
  );
}
const TEN_DAYS_MS = 10 * 24 * 3600 * 1000;
export const loader = (props: Props, req: Request, ctx: AppContext) => {
  const cookies = getCookies(req.headers);
  const currentCookieLang = cookies?.["language"] ?? "en";
  const langParamValue = new URL(req.url)?.searchParams?.get("language");
  if (langParamValue) {
    setCookie(ctx.response.headers, {
      name: "language",
      value: langParamValue,
      path: "/",
      expires: new Date(Date.now() + TEN_DAYS_MS),
    });
  }
  const currentLang = langParamValue ?? currentCookieLang;
  const langText = props?.langText?.map((item) => ({
    ...item,
    active: item.value === currentLang,
  }));
  return { ...props, langText };
};
export default Header;
