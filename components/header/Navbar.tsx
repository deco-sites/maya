import { MenuButton } from "$store/islands/Header/Buttons.tsx";
import Image from "apps/website/components/Image.tsx";
import { Logo } from "$store/components/header/Header.tsx";
import Text from "deco-sites/maya/components/ui/Text.tsx";

function Navbar({
  logo = {
    default: {
      src:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
      width: 280,
      height: 40,
      alt: "Logo",
    },
    variant: {
      src:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
      width: 280,
      height: 40,
      alt: "Logo",
    },
  },
  langText = "EN",
}: {
  logo?: {
    default: Logo;
    variant: Logo;
  };
  langText: string;
}) {
  const currentLogo = logo.default ?? logo.variant;

  return (
    <>
      <div class="flex justify-between items-center w-full gap-2 px-[8.33%] mx-auto py-16">
        {logo && (
          <a
            href="/"
            aria-label="logo"
          >
            <Image
              src={currentLogo.src}
              alt={currentLogo.alt}
              width={currentLogo.width || 280}
              height={currentLogo.height || 40}
            />
          </a>
        )}
        <div className="ml-auto flex items-center gap-8">
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
