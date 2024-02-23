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

const Grafismo1 = lazy(() => import("$store/components/ui/Grafismo1.tsx"));
const Grafismo2 = lazy(() => import("$store/components/ui/Grafismo2.tsx"));
const Grafismo3 = lazy(() => import("$store/components/ui/Grafismo3.tsx"));
const Grafismo4 = lazy(() => import("$store/components/ui/Grafismo4.tsx"));
const Grafismo5 = lazy(() => import("$store/components/ui/Grafismo5.tsx"));
const Grafismo6 = lazy(() => import("$store/components/ui/Grafismo6.tsx"));
const Grafismo7 = lazy(() => import("$store/components/ui/Grafismo7.tsx"));
const Grafismo8 = lazy(() => import("$store/components/ui/Grafismo8.tsx"));
const Grafismo9 = lazy(() => import("$store/components/ui/Grafismo9.tsx"));

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

  return (
    // <Suspense fallback={<div>Carregando...</div>}>
    <GrafismoComponent {...props} />
    // </Suspense>
  );
}
