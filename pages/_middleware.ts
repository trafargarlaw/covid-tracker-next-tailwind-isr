import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
  const country = req!.geo!.country?.toLowerCase() || 'ma'

  const countryIso3 = await fetch('http://country.io/iso3.json')
    .then((res) => res.json())
    .then((data) => data[country.toUpperCase()])

  // no changes on routes that are public files
  if (!PUBLIC_FILE.test(req.nextUrl.pathname)) {
    // send all routes to the home page
    if (req.nextUrl.pathname !== '/') {
      const url = req.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
    req.nextUrl.pathname = `/${countryIso3}`
    return NextResponse.rewrite(req.nextUrl)
  }
}
