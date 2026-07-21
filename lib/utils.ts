import { clsx, type ClassValue } from "clsx";

// clsx-only: the vendored MagicUI components merge a handful of layout
// utilities with a caller className — no conflicting-class dedupe needed,
// so tailwind-merge stays out of the bundle.
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
