export interface WorldwideDataType {
  updated: number
  cases: number
  todayCases: number
  deaths: number
  todayDeaths: number
  recovered: number
  todayRecovered: number
  active: number
  critical: number
}

export interface CountryDataType {
  updated: number
  country: string
  countryInfo: {
    _id: number
    iso2: string
    iso3: string
    uniqueItems: true
    lat: number
    long: number
    flag: string
  }
  cases: number
  todayCases: number
  deaths: number
  todayDeaths: number
  recovered: number
  todayRecovered: number
  active: number
  critical: number
  population: number
}
