import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";

export default function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
      class={`btn-ghost bg-transparent hover:bg-transparent p-0 m-0 min-h-fit h-auto ${
        displayMenu.value ? `text-white` : `text-[var(--color-main)]`
      }`}
      aria-label={displayMenu.value ? "Close menu" : "open menu"}
      title={displayMenu.value ? "Close menu" : "open menu"}
      onClick={() => {
        displayMenu.value = !displayMenu.value;
      }}
    >
      {displayMenu.value
        ? (
          <div className="w-6 h-5 2xl:w-[35px] 2xl:h-[30px] flex items-center justify-center">
            <Icon
              id="Close"
              width={26}
              height={26}
              strokeWidth={3}
              className="w-[18px] h-[18px] 2xl:w-[26px] 2xl:h-[26px]"
            />
          </div>
        )
        : (
          <Icon
            id="Bars3"
            width={35}
            height={30}
            className="w-6 h-5 2xl:w-[35px] 2xl:h-[30px]"
            strokeWidth={0.01}
          />
        )}
    </Button>
  );
}
