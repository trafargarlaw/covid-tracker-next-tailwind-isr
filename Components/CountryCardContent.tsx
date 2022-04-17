import { useEffect, useState } from 'react'
import { CountryDataType, WorldwideDataType } from '../utils/types'
import { addComma, getPercentage } from '../utils/utilityFunctions'
import ProgressBar from './ProgressBar'

interface DataProps {
  countries: CountryDataType[]
  selectedCountry: string
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>
}

const WorldwideData: React.FC<DataProps> = ({
  countries,
  selectedCountry,
  setSelectedCountry,
}) => {
  const [selectedCountryData, setSelectedCountryData] =
    useState<CountryDataType>(
      countries.find(
        (country: CountryDataType) =>
          country.countryInfo.iso3 === selectedCountry
      )!
    )

  useEffect(() => {
    const country = countries.find(
      (country: CountryDataType) => country.countryInfo.iso3 === selectedCountry
    )
    setSelectedCountryData(country!)
  }, [selectedCountry])

  return (
    <>
      <div className="mb-4 flex ">
        <h1 className="font-Roboto text-xl font-bold text-slate-700	">
          Coronavirus Cases -
        </h1>
        <h2 className="ml-1 font-Roboto text-lg font-medium text-slate-400">
          Worldwide
        </h2>
      </div>
      <select
        name="countrySelect"
        id="counrySelect"
        value={selectedCountry}
        className="w-[22rem] rounded-md border  border-slate-500 p-2 font-Roboto text-slate-700 outline-none focus:border-blue-300"
        onChange={(e) => {
          setSelectedCountry(e.target.value)
        }}
      >
        {countries.map((c) => {
          if (c.country === 'Diamond Princess') return
          return (
            <option value={c.countryInfo.iso3} key={c.countryInfo.iso3}>
              {c.country}
            </option>
          )
        })}
      </select>
      <h6 className="text-xs font-semibold leading-5 tracking-widest text-slate-400	">
        TOTAL CONFIRMED CASES
      </h6>
      <div className="my-1 text-3xl font-bold text-slate-700">
        {addComma(selectedCountryData.cases)}
      </div>
      <ProgressBar />
      <ul className="mt-2 space-y-2">
        <li className="flex justify-between ">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-sm bg-purple-500"></div>
            <span className="text-slate-500">Active Cases</span>
          </div>
          <div className="font-bold text-slate-700 ">
            <span className="mr-1 rounded-md bg-gray-100 p-1 text-xs text-slate-400">
              +{addComma(selectedCountryData.todayCases)}
            </span>
            {addComma(selectedCountryData.cases)}
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-sm bg-green-300"></div>
            <span className="text-slate-500">Recovered</span>
          </div>
          <div className="font-bold text-slate-700">
            <span className="mr-1 rounded-md bg-gray-100 p-1 text-xs text-slate-400">
              +{addComma(selectedCountryData.todayRecovered)}
            </span>
            {addComma(selectedCountryData.recovered)}
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-sm bg-red-500"></div>
            <span className="text-slate-500">Deaths</span>
          </div>
          <div className="font-bold text-slate-700">
            <span className="mr-1 rounded-md bg-gray-100 p-1 text-xs text-slate-400">
              +{addComma(selectedCountryData.todayDeaths)}
            </span>
            {addComma(selectedCountryData.deaths)}
          </div>
        </li>
      </ul>
      <div className="mt-2 text-xs font-medium text-slate-500">
        The ratio of Recovery (
        {getPercentage(
          selectedCountryData.recovered,
          selectedCountryData.cases
        )}
        %) & Deaths (
        {getPercentage(selectedCountryData.deaths, selectedCountryData.cases)}
        %).
      </div>
    </>
  )
}

export default WorldwideData
