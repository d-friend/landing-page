/** Types used by both the student and teacher content files. */

export type Locale = "en" | "vi";

export const LOCALES: Locale[] = ["en", "vi"];

export const DEFAULT_LOCALE: Locale = "vi";

/** Drives the pilot signup form on both landing pages. */
export type PilotFormCopy = {
  cta: string;
  submitting: string;
  emailLabel: string;
  emailPlaceholder: string;
  hint: string;
  success: string;
  errorMissing: string;
  errorEmail: string;
  errorGeneric: string;
};
