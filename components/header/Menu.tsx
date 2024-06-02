import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Text from "$store/components/ui/Text.tsx";
import MenuButton from "./Buttons/Menu.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { Lang } from "./Header.tsx";

interface LangsPartition {
  activeLang: Lang | null;
  inactiveLangs: Lang[];
}

export interface Props {
  items: SiteNavigationElement[];
  langText: Lang[];
}

const animationMenu = `
  @keyframes fade-in-bottom {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0,28.45px,0);
      transform: translate3d(0,40px,0)
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0)
    }
  }

  @media (min-width: 1536px) { 
    @keyframes fade-in-bottom {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0,40px,0);
        transform: translate3d(0,40px,0)
      }
      to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
      }
    }
  }
        
  .animate-fade-in-bottom {
    animation: fade-in-bottom 0.2s ease-out forwards;
  }
`;

function Menu({ items, langText }: Props) {
  const { activeLang } = langText?.reduce(
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
    <div class="w-full flex flex-col h-full bg-primary-content overflow-y-auto 2xl:gap-3 pb-10 max-h-dvh max-h-screen">
      <style
        dangerouslySetInnerHTML={{ __html: animationMenu }}
      />
      <div class="flex justify-between items-center gap-2 w-[83.23%] mx-auto py-14 lg:py-16">
        <a
          href="/"
          aria-label="logo"
        >
          <Icon
            id="Logo"
            width={140}
            height={28}
            className="lg:hidden text-white"
          />
          <Icon
            id="Logo"
            width={280}
            height={40}
            className="hidden lg:block w-[199px] h-7 2xl:w-[280px] 2xl:h-10 text-white"
          />
        </a>
        <div className="ml-auto flex items-center gap-3 lg:gap-5 2xl:gap-8">
          <Text variant="caption" className="text-secondary ">
            {activeLang?.label ?? "EN"}
          </Text>
          {
            /* <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="">
              <Text variant="caption" className="text-secondary ">
                {activeLang?.label ?? "EN"}
              </Text>
            </div>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu bg-secondary-content  p-0 items-start"
            >
              {inactiveLangs.map(({ label, value }) => (
                <button
                  className={`appearance-none border-none`}
                  {...usePartialSection({ href: `?language=${value}` })}
                  style={{
                    width: "max-content",
                  }}
                >
                  <Text variant="caption" className="text-secondary ">
                    {label}
                  </Text>
                </button>
              ))}
            </div>
          </div> */
          }
          <MenuButton />
        </div>
      </div>
      <ul class="px-4 flex-grow flex flex-col lg:gap-4 2xl:gap-[22px] items-center">
        {items.map((item, index) => {
          const delay = index * 0.1 + 0.18;
          return (
            <li
              class="opacity-0 animate-fade-in-bottom"
              style={{
                animationDuration: `${delay}s`,
                animationDelay: `${delay}s`,
              }}
            >
              <a
                class="font-bison font-bold text-2xl lg:text-[56px] 2xl:text-[80px] 
              text-white leading-[60px] lg:leading-[80px] 2xl:leading-[113.76px]"
                href={item.url}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
