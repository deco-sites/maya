// import { useSignal } from "@preact/signals";
import Icon from "site/components/ui/Icon.tsx";
import { usePartialSection } from "@deco/deco/hooks";
export interface Option {
  label: string;
  /**
   * @hide
   */
  value?: string;
}
interface Props {
  options: Option[];
  name: string;
  currentFiltersActive?: {
    [key: string]: string;
  };
  filterBy: string;
}
export const SelectOptions = (
  { options, name, currentFiltersActive = {}, filterBy }: Props,
) => {
  // const open = useSignal(false);
  return (
    <div class="max-w-md lg:mx-auto space-y-6 w-fit lg:w-full" // onBlur={() => {
    >
      <div class="dropdown-menu relative">
        <label
          htmlFor={`dropdown-toggle-${name}`}
          class="flex border-2 border-transparent focus:border-2 focus:border-primary focus:primary text-primary py-3 2xl:py-4 text-[5.19px] lg:text-xs 2xl:text-base uppercase font-bold tracking-widest bg-secondary-content font-manrope items-center gap-3 w-full justify-between transition-all"
        >
          {name}
          <Icon
            id="ChevronDown2"
            width={20}
            height={20}
            className="w-[14px] h-[14px] 2xl:w-[20px] 2xl:h-[20px]"
          />
        </label>
        <input
          type="checkbox"
          id={`dropdown-toggle-${name}`}
          className="hidden peer"
        />
        <div
          class={`absolute  bottom-0 left-0 w-full translate-y-full z-10 hidden peer-checked:!block`}
        >
          <div class="bg-white rounded-lg shadow-xl relative mt-1 overflow-hidden">
            {options.map((option) => {
              const isSelected =
                option.value === currentFiltersActive[filterBy];
              const urlToFilter = new URLSearchParams({
                ...currentFiltersActive,
                [filterBy]: option.value || "",
              }).toString();
              return (
                <div
                  class={`py-1 px-4 flex items-center w-full hover:bg-secondary-content ${
                    isSelected ? "bg-secondary-content" : ""
                  }`}
                >
                  <button
                    class={`flex-1 flex`}
                    {...usePartialSection({
                      href: isSelected ? "?" : `?${urlToFilter}`,
                    })}
                  >
                    <div class="text-accent-content text-[5.19px] lg:text-base font-manrope">
                      {option.label}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <select class="block focus:border-primary focus:primary text-primary h-8 text-base uppercase font-bold tracking-widest bg-secondary-content" onChange={(event) => {
  //     console.log("🔥 event", (event?.target as HTMLOptionElement)?.value)
  //   }}>
  //     <option disabled selected className="text-base">{name}</option>
  //     {options.map((option) => (
  //       <option value={option.value} className="text-base capitalize">
  //         {option.label}
  //       </option>
  //     ))}
  //   </select>
  // );
};
