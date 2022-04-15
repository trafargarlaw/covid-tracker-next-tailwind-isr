import StatCard from './StatCard'
import { WorldwideDataType } from '../utils/types'
import { addComma, getPercentage } from '../utils/utilityFunctions'

interface StatCardsProps {
  worldwide: WorldwideDataType
}

const StatCards: React.FC<StatCardsProps> = ({ worldwide }) => {
  // tailwind purple-500 hsl (240, 100%, 50%)
  // tailwind green-300 hsl (120, 100%, 50%)

  return (
    <div className="mt-6 lg:mx-16">
      <h1 className="ml-8 font-Roboto text-2xl font-bold text-slate-700">
        Worldwide Coronavirus Cases
      </h1>
      <div className="mt-6 flex flex-wrap gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        <StatCard
          title="Confirmed Cases"
          cases={addComma(worldwide.cases)}
          casesColor="#3b82f6"
          fillColor="#60a5fa"
          detailsCases={`+ ${addComma(worldwide.todayCases)}`}
          detailsTitle="from yesterday"
        />
        <StatCard
          title="Deaths"
          cases={addComma(worldwide.deaths)}
          casesColor="#ef4444"
          fillColor="#f87171"
          detailsCases={`+ ${addComma(worldwide.todayDeaths)}`}
          detailsTitle="from yesterday"
        />
        <StatCard
          title="Recovered"
          cases={addComma(worldwide.recovered)}
          casesColor="#86efac"
          fillColor="#bbf7d0"
          detailsCases={`${getPercentage(
            worldwide.recovered,
            worldwide.cases
          )}%`}
          detailsTitle="ratio of recovery"
        />
        <StatCard
          title="Active Cases"
          cases={addComma(worldwide.active)}
          casesColor="#a855f7"
          fillColor="#c084fc"
          detailsCases={`${addComma(worldwide.critical)}`}
          detailsTitle="in Critical / Serious"
        />
      </div>
    </div>
  )
}

export default StatCards
