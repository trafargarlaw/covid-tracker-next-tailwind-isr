import React from 'react'
import { WorldwideData } from '../utils/types'
import ProgressBar from './ProgressBar'

const WorldwideData: React.FC<WorldwideData> = ({
  cases,
  active,
  recovered,
  deaths,
}) => {
  const getPercentage = (value: number, total: number) => {
    return ((value * 100) / total).toFixed(2).toString()
  }
  return (
    <>
      <div className="mb-4 flex">
        <h1 className="font-Roboto text-xl font-bold text-slate-700	">
          Coronavirus Cases -
        </h1>
        <h2 className="ml-1 font-Roboto text-lg font-medium text-slate-400">
          Worldwide
        </h2>
      </div>
      <h6 className="text-xs font-semibold leading-5 tracking-widest text-slate-400	">
        TOTAL CONFIRMED CASES
      </h6>
      <div className="my-1 text-3xl font-bold text-slate-700">{cases}</div>
      <ProgressBar />
      <ul className="mt-2 space-y-2">
        <li className="flex justify-between ">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-l bg-purple-500"></div>
            <span className="text-slate-500">Active Cases</span>
          </div>
          <div className="font-bold text-slate-700 ">{cases}</div>
        </li>
        <li className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-sm bg-green-300"></div>
            <span className="text-slate-500">Recovered</span>
          </div>
          <div className="font-bold text-slate-700">{recovered}</div>
        </li>
        <li className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-r-sm bg-red-500"></div>
            <span className="text-slate-500">Deaths</span>
          </div>
          <div className="font-bold text-slate-700">{deaths}</div>
        </li>
      </ul>
      <div className="mt-2 text-xs font-medium text-slate-500">
        The ratio of Recovery ({getPercentage(recovered, cases)}%) & Deaths (
        {getPercentage(deaths, cases)}%).
      </div>
    </>
  )
}

export default WorldwideData
