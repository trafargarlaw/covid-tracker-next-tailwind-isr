import { CountryDataType, WorldwideDataType } from '../utils/types'
import { addComma } from '../utils/utilityFunctions'

interface Props {
  countriesCovData: CountryDataType[]
  worldwideCovData: WorldwideDataType
}

const BrowseByCountry: React.FC<Props> = ({
  countriesCovData,
  worldwideCovData,
}) => {
  return (
    <div className="text-slate-700 ">
      <h1 className="font-bold ">Browse By Country</h1>
      <div>
        <div className="grid grid-cols-4 border-b p-2 font-semibold text-slate-600 ">
          <span className="">Location</span>
          <span className="text-right" id="cases">
            Confirmed
          </span>
          <span className="text-right" id="recovered">
            Recovered
          </span>
          <span className="text-right" id="deaths">
            Deaths
          </span>
        </div>
        <ul className="max-h-[32rem] overflow-scroll text-xs font-medium sm:text-sm ">
          <li className="grid grid-cols-4 border-b p-1 text-right">
            <div className="flex  items-center space-x-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/183/183595.png"
                alt="flag"
                className="h-7 w-7"
              />
              <span>World</span>
            </div>
            <div className="space-x-2 ">
              <span className="hidden whitespace-nowrap  text-blue-500 md:inline-block ">
                + {addComma(worldwideCovData.todayCases)}
              </span>
              <span>{addComma(worldwideCovData.cases)}</span>
            </div>
            <span>{addComma(worldwideCovData.recovered)}</span>
            <div className="space-x-2">
              <span className="hidden whitespace-nowrap text-red-500  md:inline-block ">
                + {addComma(worldwideCovData.todayDeaths)}
              </span>
              <span>{addComma(worldwideCovData.deaths)}</span>
            </div>
          </li>
          {countriesCovData.map((country) => (
            <li
              className="grid grid-cols-4 border-b p-1 text-right"
              key={country.country}
            >
              <div className="flex  items-center space-x-4 ">
                <img
                  src={country.countryInfo.flag}
                  alt="flag"
                  className="h-4 w-7 rounded-md"
                />
                <span className="max-w-[5rem] overflow-hidden text-ellipsis whitespace-nowrap">
                  {country.country}
                </span>
              </div>
              <div className=" space-x-2">
                <span className="hidden whitespace-nowrap  text-blue-500 md:inline-block ">
                  + {addComma(country.todayCases)}
                </span>
                <span>{addComma(country.cases)}</span>
              </div>
              <span>{addComma(country.recovered)}</span>
              <div className="space-x-2">
                <span className="hidden whitespace-nowrap text-red-500  md:inline-block ">
                  + {addComma(country.todayDeaths)}
                </span>
                <span>{addComma(country.deaths)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BrowseByCountry
