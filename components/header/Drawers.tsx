import type { Props as MenuProps } from "$store/components/header/Menu.tsx";
import Drawer from "$store/components/ui/Drawer.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { ComponentChildren } from "preact";
import { lazy, Suspense } from "preact/compat";

const Menu = lazy(() => import("$store/components/header/Menu.tsx"));
const Searchbar = lazy(() => import("$store/components/search/Searchbar.tsx"));

export interface Props {
  menu: MenuProps;
  // searchbar?: SearchbarProps;
  /**
   * @ignore_gen true
   */
  children?: ComponentChildren;
  platform: ReturnType<typeof usePlatform>;
}

const Aside = (
  { children }: {
    children: ComponentChildren;
  },
) => (
  <div class="bg-base-100 flex h-full max-w-[100vw] w-full">
    <Suspense
      fallback={
        <div class="w-screen flex items-center justify-center">
          <span class="loading loading-ring" />
        </div>
      }
    >
      {children}
    </Suspense>
  </div>
);

function Drawers({ menu, children, platform }: Props) {
  const { displayMenu } = useUI();

  return (
    <>
      <Drawer
        open={displayMenu.value}
        onClose={() => {
          displayMenu.value = false;
        }}
        aside={
          <Aside>
            {displayMenu.value && <Menu {...menu} />}
          </Aside>
        }
      >
        {children}
      </Drawer>
    </>
  );
}

export default Drawers;
