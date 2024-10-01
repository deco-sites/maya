import type { Props as MenuProps } from "site/components/header/Menu.tsx";
import Modal from "site/components/ui/Modal.tsx";
import { useUI } from "site/sdk/useUI.ts";
import type { ComponentChildren } from "preact";
import { lazy, Suspense } from "preact/compat";

const Menu = lazy(() => import("site/components/header/Menu.tsx"));

export interface Props {
  menu: MenuProps;
  /**
   * @ignore_gen true
   */
  children?: ComponentChildren;
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

function Drawers({ menu, children }: Props) {
  const { displayMenu } = useUI();

  return (
    <>
      <Modal
        loading="lazy"
        open={displayMenu.value}
        onClose={() => displayMenu.value = false}
        classModalBackdrop="hidden"
      >
        <Aside>
          {displayMenu.value && <Menu {...menu} />}
        </Aside>
      </Modal>
      {children}
    </>
  );
}

export default Drawers;
