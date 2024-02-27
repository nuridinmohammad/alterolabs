import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { locales, localePrefix } from './helpers/navigation';

export function middleware(req: NextRequest, res: NextResponse) {
  const handleI18nRouting = createIntlMiddleware({
    locales,
    localePrefix,
    defaultLocale: 'id'
  });
  const response = handleI18nRouting(req);
  return response;
}

export const config = {
  matcher: ['/', '/(id|en|ko)', '/(id|en|ko)/:path*', "/((?!api|_next|_vercel|.*\\..*).*)"]
};