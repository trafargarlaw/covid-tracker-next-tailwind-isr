import { CountryDataType, WorldwideDataType } from '../utils/types'
import { addComma } from '../utils/utilityFunctions'
import { FixedSizeList } from 'react-window'

interface Props {
  countriesCovData: CountryDataType[]
  worldwideCovData: WorldwideDataType
}

const BrowseByCountry: React.FC<Props> = ({
  countriesCovData,
  worldwideCovData,
}) => {
  return (
    <div className="text-slate-900 ">
      <h1 className="font-bold ">Browse By Country</h1>
      <div>
        <div className="grid grid-cols-4 border-b p-2 font-semibold text-slate-900 ">
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
          <FixedSizeList
            itemSize={32}
            itemCount={countriesCovData.length}
            height={500}
            width={'100%'}
          >
            {({ index, style }) => (
              <li
                key={index}
                className="grid grid-cols-4 border-b p-1 text-right"
                style={style}
              >
                <div className="flex  items-center space-x-4">
                  <img
                    src={countriesCovData[index].countryInfo.flag}
                    alt="flag"
                    className="aspect-auto w-8"
                  />
                  <span>{countriesCovData[index].country}</span>
                </div>
                <div className="space-x-2 ">
                  <span className="hidden whitespace-nowrap  text-blue-600 md:inline-block ">
                    + {addComma(countriesCovData[index].todayCases)}
                  </span>
                  <span>{addComma(countriesCovData[index].cases)}</span>
                </div>
                <span>{addComma(countriesCovData[index].recovered)}</span>
                <div className="space-x-2">
                  <span className="hidden whitespace-nowrap text-red-600  md:inline-block ">
                    + {addComma(countriesCovData[index].todayDeaths)}
                  </span>
                  <span>{addComma(countriesCovData[index].deaths)}</span>
                </div>
              </li>
            )}
          </FixedSizeList>
        </ul>
      </div>
    </div>
  )
}

export default BrowseByCountry
