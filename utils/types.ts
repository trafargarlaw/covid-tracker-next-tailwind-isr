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
  country: string
  countryInfo: {
    iso3: string
    flag: string
  }
  cases: number
  todayCases: number
  deaths: number
  todayDeaths: number
  todayRecovered: number
  recovered: number
}
