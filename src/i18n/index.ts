/**
 * Spanish lives at `/`, English at `/en/`. Each language is a real page so search
 * engines index both and can offer the right one through hreflang.
 */
export const languages = {
  es: { label: 'Español', short: 'ES', locale: 'es_AR', hreflang: 'es-AR' },
  en: { label: 'English', short: 'EN', locale: 'en_US', hreflang: 'en' },
} as const;

export type Lang = keyof typeof languages;
export type Localized<T = string> = Record<Lang, T>;

export const defaultLang: Lang = 'es';
export const langs = Object.keys(languages) as Lang[];

export function getLang(url: URL): Lang {
  const first = url.pathname.split('/')[1];
  return langs.find((lang) => lang === first) ?? defaultLang;
}

export function homePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
