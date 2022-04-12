import React from 'react'
import StatCard from './StatCard'
import { WorldwideDataType } from '../utils/types'
import { addComma } from '../utils/utilityFunctions'

interface StatCardsProps {
  worldwide: WorldwideDataType
}

const StatCards: React.FC<StatCardsProps> = ({ worldwide }) => {
  return (
    <div className="mt-6">
      <h1 className="ml-8 font-Roboto text-2xl font-bold text-slate-700">
        Worldwide Coronavirus Cases
      </h1>
      <div className="mt-6 flex flex-wrap gap-4 sm:grid  sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4">
        <StatCard
          title="Confirmed Cases"
          cases={addComma(worldwide.cases)}
          casesColor="blue-500"
          detailsCases="+ 227,013"
          detailsTitle="from yesterday"
        />
        <StatCard
          title="Deaths"
          cases={addComma(worldwide.deaths)}
          casesColor="red-500"
          detailsCases="+ 584"
          detailsTitle="from yesterday"
        />
        <StatCard
          title="Recovered"
          cases={addComma(worldwide.recovered)}
          casesColor="green-300"
          detailsCases="86.43%"
          detailsTitle="ratio of recovery"
        />
        <StatCard
          title="Active Cases"
          cases={addComma(worldwide.active)}
          casesColor="purple-500"
          detailsCases="54,032"
          detailsTitle="in Critical / Serious"
        />
      </div>
    </div>
  )
}

export default StatCards
