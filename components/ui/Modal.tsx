import { useId } from "site/sdk/useId.ts";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";

interface Props {
  onClose?: () => void;
  open?: boolean;
  class?: string;
  classModalBackdrop?: string;
  style?: string;
  children?: ComponentChildren;
  loading?: "eager" | "lazy";
}

function Modal(props: Props) {
  const {
    children,
    open,
    onClose,
    loading = "lazy",
    classModalBackdrop = "",
  } = props;
  const lazy = useSignal(loading === "lazy" && !open);
  const id = useId();

  useEffect(() => {
    const handler = (e: KeyboardEvent) =>
      (e.key === "Escape" || e.keyCode === 27) && open && onClose?.();

    addEventListener("keydown", handler);

    return () => {
      removeEventListener("keydown", handler);
    };
  }, [open]);

  useEffect(() => {
    lazy.value = false;
  }, []);

  return (
    <>
      <input
        id={id}
        checked={open}
        type="checkbox"
        class="modal-toggle"
        onChange={(e) => e.currentTarget.checked === false && onClose?.()}
      />
      <div class="modal">
        {!lazy.value && children}
        <label class={`modal-backdrop ${classModalBackdrop}`} for={id}>
          Close
        </label>
      </div>
    </>
  );
}

export default Modal;
