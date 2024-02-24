import Icon from "$store/components/ui/Icon.tsx";
import { useSignal } from "@preact/signals";
// import { invoke } from "$store/runtime.ts";
import type { JSX } from "preact";

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
        <InputField type="text" id="skills" label={skills} />
        <InputField
          type="text"
          id="insterestedCompanies"
          label={interestedCompanies}
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
