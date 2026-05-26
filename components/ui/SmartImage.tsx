import Image from "apps/website/components/Image.tsx";
import type { JSX } from "preact";

type SmartImageProps = JSX.IntrinsicElements["img"] & {
  src?: string;
  preload?: boolean;
  sizes?: string;
};

const DIRECT_IMAGE_HOST =
  /(?:supabase\.co|decoims\.com|vteximg\.com\.br|vtexassets\.com|assets\.decocache\.com|data\.decoassets\.com)/i;

export default function SmartImage(props: SmartImageProps) {
  const {
    src = "",
    alt = "",
    class: className,
    width,
    height,
    loading,
    decoding,
    preload,
    sizes,
  } = props;

  if (src.startsWith("/") || DIRECT_IMAGE_HOST.test(src)) {
    return (
      <img
        alt={alt}
        class={className}
        decoding={decoding}
        height={height}
        loading={loading}
        src={src}
        width={width}
      />
    );
  }

  return (
    <Image
      alt={alt}
      class={className}
      decoding={decoding}
      height={height}
      loading={loading}
      preload={preload}
      sizes={sizes}
      src={src}
      width={width}
    />
  );
}
