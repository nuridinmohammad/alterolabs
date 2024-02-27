import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';


export default getRequestConfig(async ({ locale }) => {
  const locales = ['id', 'en','ko'];
  if (!locales.includes(locale as any)) return notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});