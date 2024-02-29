import type { JSX } from "preact";
import { lazy, Suspense } from "preact/compat";

export type Graphics =
  | "Grafismo1"
  | "Grafismo2"
  | "Grafismo3"
  | "Grafismo4"
  | "Grafismo5"
  | "Grafismo6"
  | "Grafismo7"
  | "Grafismo8"
  | "Grafismo9";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: Graphics;
  size?: number;
}

import Grafismo1 from "$store/components/ui/Grafismo1.tsx";
import Grafismo2 from "$store/components/ui/Grafismo2.tsx";
import Grafismo3 from "$store/components/ui/Grafismo3.tsx";
import Grafismo4 from "$store/components/ui/Grafismo4.tsx";
import Grafismo5 from "$store/components/ui/Grafismo5.tsx";
import Grafismo6 from "$store/components/ui/Grafismo6.tsx";
import Grafismo7 from "$store/components/ui/Grafismo7.tsx";
import Grafismo8 from "$store/components/ui/Grafismo8.tsx";
import Grafismo9 from "$store/components/ui/Grafismo9.tsx";

// Crie um objeto que mapeia os IDs para os componentes
const grafismoComponents = {
  Grafismo1,
  Grafismo2,
  Grafismo3,
  Grafismo4,
  Grafismo5,
  Grafismo6,
  Grafismo7,
  Grafismo8,
  Grafismo9,
};

export function Grafismo({ id, ...props }: Props) {
  const GrafismoComponent = grafismoComponents?.[id] || Grafismo4;

  return <GrafismoComponent {...props} />;
}
