export default async function loadTranslations(locale: string) {
  try {
    const translations = await import(`../public/locales/${locale}.json`);
    return translations.default;
  } catch {
    return {};
  }
}
