import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";

export default function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
      class="btn-ghost bg-transparent hover:bg-transparent p-0 m-0 min-h-fit h-auto"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = !displayMenu.value;
      }}
    >
      <Icon id="Bars3" width={35} height={30} strokeWidth={0.01} className="text-primary"/>
    </Button>
  );
}
