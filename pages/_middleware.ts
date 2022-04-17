import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
  const country = req!.geo!.country?.toLowerCase() || 'ma'

  const countryIso3 = await fetch('http://country.io/iso3.json')
    .then((res) => res.json())
    .then((data) => data[country.toUpperCase()])

  if (!PUBLIC_FILE.test(req.nextUrl.pathname)) {
    req.nextUrl.pathname = `/${countryIso3}`
    return NextResponse.rewrite(req.nextUrl)
  }
}
