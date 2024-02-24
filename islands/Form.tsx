import Icon from "$store/components/ui/Icon.tsx";
import { useSignal } from "@preact/signals";
import Index from "apps/vtex/workflows/events.ts";
// import { invoke } from "$store/runtime.ts";
import type { JSX } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

export interface Props {
  name?: string;
  email?: string;
  linkedin?: string;
  skills?: string;
  interestedCompanies?: string;
  additionalInterests?: string;
  button?: string;
}

function InputField(
  { type, id, label }: { type: string; id: string; label: string },
) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="font-manrope block mb-3 2xl:mb-4 text-xl 2xl:text-3xl leading-7 2xl:leading-10 text-black"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="border border-black rounded w-full min-h-[55px] 
          2xl:min-h-[78px] font-manrope text-xl text-black outline-1"
        required
      />
    </div>
  );
}

function InputMulti({
  id,
  label,
  placeholder = "",
}: { id: string; label: string; placeholder?: string }) {
  const [tags, setTags] = useState<string[]>([]);
  const inputMultiRef = useRef<HTMLInputElement>(null);

  // deno-lint-ignore no-explicit-any
  const addTag = (event: any) => {
    const target = event.target as HTMLInputElement;
    if (
      event?.key === "," || event?.code === "Comma" || event.type === "focusout"
    ) {
      const tag = target?.value?.replace(/\s+/g, " ");
      if (tag.length > 1 && !tags.includes(tag)) {
        setTags((
          prev,
        ) => [...prev, ...tag.split(",").filter((string) => !!string)]);
      }
      target.value = "";
    }
  };

  const removeTag = (index: number) => {
    setTags((prev) => {
      return [...prev.filter((currentTag) => currentTag !== prev[index])];
    });
  };

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="font-manrope mb-3 2xl:mb-4 text-xl 2xl:text-3xl leading-7 2xl:leading-10 text-black flex items-baseline gap-1"
      >
        {label}{" "}
        <span className="text-xs">({"Add a comma after each tag"})</span>
      </label>
      <div className="tag-box">
        <ul
          className="flex border border-black rounded flex-wrap list-none gap-1 px-4 2xl:px-6 py-3 2xl:py-4"
          onClick={() => {
            inputMultiRef.current?.focus();
          }}
        >
          {tags.length === 0 && (
            <li
              className={` p-2 2xl:p-3 flex gap-2 text-black items-center justify-center cursor-pointer font-manrope ${
                placeholder ? "" : "bg-[#e4e4e4]"
              }`}
            >
              <Icon
                id="Plus"
                width={16}
                height={16}
                strokeWidth={3}
                className="text-black"
              />
              {placeholder}
            </li>
          )}
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-[#e4e4e4] p-2 2xl:p-3 flex gap-2 text-black items-center justify-center cursor-pointer font-manrope"
              onClick={() => removeTag(index)}
            >
              {tag}
              <Icon
                id="Close"
                width={12}
                height={12}
                strokeWidth={3}
                className="text-black"
              />
            </li>
          ))}
          <input
            ref={inputMultiRef}
            type="string"
            id={id}
            className="font-manrope text-xl text-black flex-1 border-none outline-0"
            onKeyUp={(e) => addTag(e)}
            onBlur={(e) => addTag(e)}
            data-value={tags.join(",")}
            autocomplete="off"
          />
        </ul>
      </div>
    </div>
  );
}

export default function Form({
  name = "Name",
  email = "Email",
  linkedin = "Linkedin",
  skills = "Skills",
  interestedCompanies = "Interested in spefic companies?",
  additionalInterests =
    "Anything additional you would like to tell us about yourself and/or interests?",
  button = "Submit",
}: Props) {
  const loading = useSignal(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      loading.value = true;

      // const email =
      //   (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;
      await console.log(e.currentTarget.elements);
      // await invoke.vtex.actions.newsletter.subscribe({ email });
    } finally {
      loading.value = false;
    }
  };

  return (
    <div class="flex flex-col gap-4">
      <form
        class="form-control"
        onSubmit={handleSubmit}
      >
        <InputField type="text" id="name" label={name} />
        <InputField type="email" id="email" label={email} />
        <InputField type="text" id="linkedin" label={linkedin} />
        <InputMulti id="skills" label={skills} />
        <InputMulti
          id="insterestedCompanies"
          label={interestedCompanies}
          placeholder={"Add Record"}
        />
        <div className="mb-5">
          <label
            htmlFor="additionalInterests"
            className="font-manrope block mb-3 2xl:mb-4 text-xl 2xl:text-3xl leading-7 2xl:leading-10 text-black w-3/5"
          >
            {additionalInterests}
          </label>
          <textarea
            id="additionalInterests"
            className="border-black rounded w-full min-h-36 2xl:min-h-60 border outline-1 font-manrope text-xl text-black"
            required
          />
        </div>

        <div class="flex flex-wrap gap-3 justify-between items-center">
          <button
            type="submit"
            class="font-manrope appearance-none flex justify-center items-center uppercase tracking-wider text-base 2xl:text-2xl px-10 2xl:px-14 py-5 2xl:py-7 rounded-md min-h-16 2xl:min-h-[91px] border border-primary font-bold bg-primary text-white"
            disabled={loading}
          >
            {button}
          </button>
          <button
            type="button"
            class="appearance-none flex justify-center items-center text-base 2xl:text-xl font-manrope text-black gap-2 2xl:gap-3"
            disabled={loading}
          >
            <Icon
              id="Reload"
              width={24}
              height={24}
              className="w-5 h-5 2xl:w-6 2xl:h-6"
            />
            Clear form
          </button>
        </div>
      </form>
    </div>
  );
}