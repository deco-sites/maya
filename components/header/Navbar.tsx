import { MenuButton } from "site/islands/Header/Buttons.tsx";
import Text from "site/components/ui/Text.tsx";
import Icon from "site/components/ui/Icon.tsx";
import type { Lang } from "./Header.tsx";

interface LangsPartition {
  activeLang: Lang | null;
  inactiveLangs: Lang[];
}

function Navbar({
  langText = [
    {
      label: "EN",
      value: "en",
      active: true,
    },
  ],
}: {
  langText: Lang[];
}) {
  const { activeLang, inactiveLangs } = langText.reduce(
    (partition: LangsPartition, lang: Lang) => {
      if (lang.active) {
        partition.activeLang = lang;
      } else {
        partition.inactiveLangs.push(lang);
      }
      return partition;
    },
    { activeLang: null, inactiveLangs: [] },
  );

  return (
    <>
      <div class="flex justify-between items-center gap-2 w-[83.23%] mx-auto py-14 lg:py-16">
        <a
          href="/"
          aria-label="logo"
        >
          <Icon
            id="Logo"
            width={140}
            height={28}
            className="lg:hidden text-[var(--color-main)]"
          />
          <Icon
            id="Logo"
            width={280}
            height={40}
            className="hidden lg:block w-[199px] h-7 2xl:w-[280px] 2xl:h-10 text-[var(--color-main)]"
          />
        </a>
        <div className="ml-auto flex items-center gap-3 lg:gap-5 2xl:gap-8">
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="opacity-0 pointer-events-none" //Arquivando a seção de troca de Inglês para Português
            >
              <Text
                variant="caption"
                className="text-[var(--color-lang-menu)]"
              >
                {activeLang?.label ?? "EN"}
              </Text>
            </div>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu bg-secondary-content  p-0 items-start"
            >
              {inactiveLangs.map(({ label, value }) => (
                <a
                  className={`appearance-none border-none`}
                  href={`?language=${value}`}
                  style={{
                    width: "max-content",
                  }}
                >
                  <Text
                    variant="caption"
                    className="text-[var(--color-lang-menu)]"
                  >
                    {label}
                  </Text>
                </a>
              ))}
            </div>
          </div>

          <MenuButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;
