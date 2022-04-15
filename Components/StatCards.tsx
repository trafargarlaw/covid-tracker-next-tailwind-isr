import StatCard from './StatCard'
import { WorldwideDataType } from '../utils/types'
import { addComma, getPercentage } from '../utils/utilityFunctions'

interface StatCardsProps {
  worldwide: WorldwideDataType
}

const StatCards: React.FC<StatCardsProps> = ({ worldwide }) => {
  return (
    <div className="mt-6 lg:mx-16">
      <h1 className="ml-8 font-Roboto text-2xl font-bold text-slate-700">
        Worldwide Coronavirus Cases
      </h1>
      <div className="mt-6 flex flex-wrap gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        <StatCard
          title="Confirmed Cases"
          cases={addComma(worldwide.cases)}
          casesColor="blue-500"
          fillColor="blue-400"
          detailsCases={`+ ${addComma(worldwide.todayCases)}`}
          detailsTitle="from yesterday"
        />
        <StatCard
          title="Deaths"
          cases={addComma(worldwide.deaths)}
          casesColor="red-500"
          fillColor="red-400"
          detailsCases={`+ ${addComma(worldwide.todayDeaths)}`}
          detailsTitle="from yesterday"
        />
        <StatCard
          title="Recovered"
          cases={addComma(worldwide.recovered)}
          casesColor="green-300"
          fillColor="green-200"
          detailsCases={`${getPercentage(
            worldwide.recovered,
            worldwide.cases
          )}%`}
          detailsTitle="ratio of recovery"
        />
        <StatCard
          title="Active Cases"
          cases={addComma(worldwide.active)}
          casesColor="purple-500"
          fillColor="purple-400"
          detailsCases={`${addComma(worldwide.critical)}`}
          detailsTitle="in Critical / Serious"
        />
      </div>
    </div>
  )
}

export default StatCards
