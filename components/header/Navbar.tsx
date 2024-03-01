import { MenuButton } from "$store/islands/Header/Buttons.tsx";
import Text from "deco-sites/maya/components/ui/Text.tsx";
import Icon from "deco-sites/maya/components/ui/Icon.tsx";

function Navbar({
  langText = "EN",
}: {
  langText: string;
}) {
  return (
    <>
      <div class="flex justify-between items-center gap-2 w-[83.23%] mx-auto py-16">
        <a
          href="/"
          aria-label="logo"
        >
          <Icon
            id="Logo"
            width={280}
            height={40}
            className="w-[199px] h-7 2xl:w-[280px] 2xl:h-10 text-[var(--color-main)]"
          />
        </a>
        <div className="ml-auto flex items-center gap-5 2xl:gap-8">
          <Text variant="caption" className="text-[var(--color-lang-menu)]">
            {langText}
          </Text>
          <MenuButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;
