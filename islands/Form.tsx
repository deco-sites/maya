import Icon from "$store/components/ui/Icon.tsx";
import { useSignal } from "@preact/signals";
// import type { JSX } from "preact";
import { useRef, useState } from "preact/hooks";
import { invoke } from "../runtime.ts";
import { render } from "apps/resend/utils/reactEmail.ts";
import { ContactEmailTemplate } from "site/mail/contact.tsx";

export interface Props {
  name?: string;
  email?: string;
  linkedin?: string;
  skills?: string;
  interestedCompanies?: string;
  additionalInterests?: string;
  button?: string;
  submitedText?: string;
}

type FormElements = {
  name: HTMLInputElement;
  email: HTMLInputElement;
  linkedin: HTMLInputElement;
  skills: HTMLDataListElement;
  insterestedCompanies: HTMLDataListElement;
  additionalInterests: HTMLInputElement;
};

function InputField(
  { type, id, label }: { type: string; id: string; label: string },
) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="font-manrope block mb-1 lg:mb-3 2xl:mb-4 text-[9px] lg:text-xl 2xl:text-3xl lg:leading-7 2xl:leading-10 text-black"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="border border-black rounded w-full min-h-6 lg:min-h-[55px] 
          2xl:min-h-[78px] font-manrope  text-[9px] lg:text-xl text-black outline-1"
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
        className="font-manrope  mb-1 lg:mb-3 2xl:mb-4 text-[9px] lg:text-xl 2xl:text-3xl lg:leading-7 2xl:leading-10 text-black flex items-baseline gap-1"
      >
        {label}{" "}
        <span className="text-[8px] lg:text-xs">
          ({"Add a comma after each tag"})
        </span>
      </label>
      <div className="tag-box">
        <ul
          className="flex border border-black rounded flex-wrap list-none gap-1 px-1 lg:px-4 2xl:px-6 py-1 lg:py-3 2xl:py-4"
          onClick={() => {
            inputMultiRef.current?.focus();
          }}
        >
          {tags.length === 0 && (
            <li
              className={`p-1 lg:p-2 2xl:p-3 flex gap-2 text-black items-center justify-center cursor-pointer font-manrope text-[8px] lg:text-xs 2xl:text-body ${
                placeholder ? "" : "bg-[#e4e4e4]"
              }`}
            >
              <Icon
                id="Plus"
                width={16}
                height={16}
                strokeWidth={3}
                className="text-black w-2 h-2 lg:w-auto lg:h-auto"
              />
              {placeholder}
            </li>
          )}
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-[#e4e4e4] p-1 lg:p-2 2xl:p-3 flex gap-2 text-black items-center justify-center cursor-pointer font-manrope text-[8px] lg:text-body"
              onClick={() => removeTag(index)}
            >
              {tag}
              <Icon
                id="Close"
                width={12}
                height={12}
                strokeWidth={3}
                className="text-black w-2 h-2 lg:w-auto lg:h-auto"
              />
            </li>
          ))}
          <input
            ref={inputMultiRef}
            type="string"
            id={id}
            className="font-manrope text-[9px] lg:text-xl text-black flex-1 border-none outline-0"
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
  submitedText = "Sent! ✅",
}: Props) {
  const loading = useSignal(false);
  const submited = useSignal(false);

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    try {
      loading.value = true;

      // const email =
      //   (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;
      const currentForm = e.currentTarget as HTMLFormElement;
      const {
        name,
        email,
        linkedin,
        skills,
        insterestedCompanies,
        additionalInterests,
      } = currentForm.elements as unknown as FormElements;

      const payload = {
        name: name?.value,
        email: email?.value,
        linkedin: linkedin?.value,
        skills: skills?.dataset?.value,
        insterestedCompanies: insterestedCompanies?.dataset?.value,
        additionalInterests: additionalInterests?.value,
      };

      console.log(payload);
      await invoke.resend.actions.emails.send({
        to: "mw.marcowilliam@gmail.com",
        html: render(<ContactEmailTemplate {...payload} />, {
          pretty: true,
        }),
        subject: "Formulário de contato | Maya - deco",
      });
    } finally {
      loading.value = false;
      submited.value = true;
    }
  };

  return (
    <div class="flex flex-col gap-4">
      <form
        class="form-control"
        onSubmit={handleSubmit}
        name="contact"
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
            className="font-manrope block mb-1 lg:mb-3 2xl:mb-4 text-[9px] lg:text-xl 2xl:text-3xl lg:leading-7 2xl:leading-10 text-black w-3/5"
          >
            {additionalInterests}
          </label>
          <textarea
            id="additionalInterests"
            className="border-black rounded w-full min-h-36 2xl:min-h-60 border outline-1 font-manrope text-[9px] lg:text-xl text-black"
            required
          />
        </div>

        <div class="flex flex-wrap gap-3 lg:gap-3 justify-start lg:justify-between items-center">
          <button
            type="submit"
            class="font-manrope appearance-none flex justify-center items-center uppercase tracking-wider text-[8px] lg:text-base 2xl:text-2xl lg:px-10 2xl:px-14 py-2 lg:py-5 2xl:py-7 rounded-md min-h-7 lg:min-h-16 2xl:min-h-[91px] border border-primary font-bold bg-primary text-white min-w-20"
            disabled={loading.value || submited.value}
          >
            {submited.value ? submitedText : button}
          </button>
          <label
            htmlFor="ClearForm"
            type="button"
            class="appearance-none flex flex-row-reverse lg:flex-row justify-center items-center text-[8px] lg:text-base 2xl:text-xl font-manrope text-black gap-1 lg:gap-2 2xl:gap-3"
            disabled={loading.value}
          >
            <Icon
              id="Reload"
              width={24}
              height={24}
              className="w-2 h-2 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6"
            />

            <input
              id="ClearForm"
              type="reset"
              value="Clear form"
              class="text-[8px] lg:text-base 2xl:text-xl font-manrope text-black"
            />
            {/* Clear form */}
          </label>
        </div>
      </form>
    </div>
  );
}
