import { MenuButton } from "$store/islands/Header/Buttons.tsx";
import Image from "apps/website/components/Image.tsx";
import { Logo } from "$store/components/header/Header.tsx";
import Text from "deco-sites/maya/components/ui/Text.tsx";

function Navbar({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
    width: 280,
    height: 40,
    alt: "Logo",
  },
  langText = "EN",
}: {
  logo?: Logo;
  langText: string;
}) {
  return (
    <>
      <div class="flex justify-between items-center w-full gap-2 px-[8.33%] mx-auto py-16">
        {logo && (
          <a
            href="/"
            aria-label="logo"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 280}
              height={logo.height || 40}
            />
          </a>
        )}
        <div className="ml-auto flex items-center gap-8">
          <Text variant="caption">
            {langText}
          </Text>
          <MenuButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;
