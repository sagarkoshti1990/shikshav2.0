import { NextResponse } from 'next/server';

export function middleware(request: { nextUrl: { clone: () => any } }) {
  const url = request.nextUrl.clone();

  if (url.pathname.startsWith('/mfe_registration')) {
    url.hostname = 'localhost';
    url.port = '4104';
    return NextResponse.rewrite(url);
  }

  if (url.pathname.startsWith('/mfe_content')) {
    url.hostname = 'localhost';
    url.port = '4105';
    return NextResponse.rewrite(url);
  }

  if (
    url.pathname.startsWith('/sunbird-plugins') ||
    url.pathname.startsWith('/content-plugins') ||
    url.pathname.startsWith('/assets')
  ) {
    url.protocol = 'https';
    url.hostname = 'sunbirdsaas.com';
    url.port = '';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
