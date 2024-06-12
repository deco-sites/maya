import { useEffect, useRef } from "preact/compat";
import { debounce } from "std/async/debounce.ts";

export function TailwindAnimationConfig() {
  const replacersRef = useRef<NodeListOf<HTMLElement> | null>(null); // useRef for efficient element selection

  useEffect(() => {
    const replaceClasses = (element: HTMLElement) => {
      try {
        if (element.dataset?.replace) {
          const replaceData = JSON.parse(
            element.dataset?.replace?.replace(/'/g, '"'),
          );
          for (const key in replaceData) {
            element.classList.remove(key);
            element.classList.add(...(replaceData[key].split(" ")));
          }
        }
      } catch (error) {
        console.warn(
          `Error parsing data-replace attribute for element: ${element}`,
          error,
        );
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          replaceClasses(entry.target as HTMLElement);
          observer.unobserve(entry.target); // Disconnect after first intersection
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.50,
    });

    const updateReplacers = () => {
      const newReplacers = document.querySelectorAll(
        "[data-replace]",
      ) as NodeListOf<HTMLElement>;

      // Length comparison and update logic
      if (newReplacers.length !== replacersRef.current?.length) {
        replacersRef.current = newReplacers;

        // Clear existing observers for efficiency
        observer.disconnect();

        // Observe new replacers
        newReplacers.forEach((replacer) => observer.observe(replacer));
      }
    };

    // Initial element selection and observation
    updateReplacers();

    // Debounce scroll event for improved performance (optional)
    const debouncedUpdate = () => debounce(updateReplacers, 250)(); // Adjust debounce time as needed
    globalThis.window.addEventListener("scroll", debouncedUpdate);

    return () => {
      globalThis.window.removeEventListener("scroll", debouncedUpdate);
      observer.disconnect(); // Disconnect observer on unmount
    };
  }, []);

  return <div />; // Empty element for rendering
}
