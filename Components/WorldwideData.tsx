import React, { useEffect, useMemo, useState } from 'react'
import { WorldwideData } from '../utils/types'
import ProgressBar from './ProgressBar'

interface DataProps {
  worldwide: WorldwideData
  countries: any[]
}

const WorldwideData: React.FC<DataProps> = ({ worldwide, countries }) => {
  const [selectedCountry, setSelectedCountry] = useState('worldwide')
  const [selectedCountryData, setSelectedCountryData] = useState<any>(worldwide)
  const getPercentage = (value: number, total: number) => {
    return ((value * 100) / total).toFixed(2).toString()
  }
  useEffect(() => {
    if (selectedCountry === 'worldwide') {
      setSelectedCountryData(worldwide)
    } else {
      const country = countries.find(
        (country: any) => country.country === selectedCountry
      )
      setSelectedCountryData(country)
    }
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
        className="w-full rounded-md border  border-slate-500 p-2 font-Roboto text-slate-700 outline-none focus:border-blue-300"
        onChange={(e) => {
          setSelectedCountry(e.target.value)
        }}
      >
        <option value="worldwide">Worldwide</option>
        {countries.map(({ country }) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </select>
      <h6 className="text-xs font-semibold leading-5 tracking-widest text-slate-400	">
        TOTAL CONFIRMED CASES
      </h6>
      <div className="my-1 text-3xl font-bold text-slate-700">
        {selectedCountryData.cases}
      </div>
      <ProgressBar />
      <ul className="mt-2 space-y-2">
        <li className="flex justify-between ">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-l bg-purple-500"></div>
            <span className="text-slate-500">Active Cases</span>
          </div>
          <div className="font-bold text-slate-700 ">
            <span className="mr-1 rounded-md bg-gray-100 p-1 text-xs text-slate-400">
              +{selectedCountryData.todayCases}
            </span>
            {selectedCountryData.cases}
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-sm bg-green-300"></div>
            <span className="text-slate-500">Recovered</span>
          </div>
          <div className="font-bold text-slate-700">
            <span className="mr-1 rounded-md bg-gray-100 p-1 text-xs text-slate-400">
              +{selectedCountryData.todayRecovered}
            </span>
            {selectedCountryData.recovered}
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-r-sm bg-red-500"></div>
            <span className="text-slate-500">Deaths</span>
          </div>
          <div className="font-bold text-slate-700">
            <span className="mr-1 rounded-md bg-gray-100 p-1 text-xs text-slate-400">
              +{selectedCountryData.todayDeaths}
            </span>
            {selectedCountryData.deaths}
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
