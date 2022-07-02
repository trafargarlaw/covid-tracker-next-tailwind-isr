import Image from 'next/image'
import { CountryDataType, WorldwideDataType } from '../utils/types'
import { addComma } from '../utils/utilityFunctions'

interface Props {
  countriesCovData: CountryDataType[]
}

const MostAffected: React.FC<Props> = ({ countriesCovData }) => {
  return (
    <div className="text-slate-700 ">
      <h1 className="font-bold ">Most Affected Countries</h1>
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
        <ul className="max-h-[20rem] overflow-scroll text-xs font-medium sm:text-sm ">
          {countriesCovData.map((country) => (
            <li
              className="grid grid-cols-4 border-b p-2 text-right "
              key={country.country}
            >
              <div className="flex  items-center space-x-4 ">
                <img
                  src={country.countryInfo.flag}
                  alt="flag"
                  className="aspect-auto w-8 rounded-md"
                />
                <span className="max-w-[5rem] overflow-hidden text-ellipsis whitespace-nowrap">
                  {country.country}
                </span>
              </div>
              <div className=" space-x-2">
                <span className="hidden whitespace-nowrap  text-blue-600 md:inline-block "></span>
                <span>{addComma(country.cases)}</span>
              </div>
              <span>{addComma(country.recovered)}</span>
              <div className="space-x-2">
                <span className="hidden whitespace-nowrap text-red-600  md:inline-block "></span>
                <span>{addComma(country.deaths)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MostAffected
