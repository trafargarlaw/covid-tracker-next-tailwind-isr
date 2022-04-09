import React from 'react'

const SelectedCountryData = () => {
  return (
    <div className="space-y-6">
      <div className="mb-4 flex items-center">
        <h1 className="font-Roboto text-xl font-bold text-slate-700	">
          Coronavirus Cases -
        </h1>
        <h2 className="ml-1 font-Roboto text-lg font-medium text-slate-400">
          {/* selected country */}
          Morocco
        </h2>
      </div>
      <div className="flex justify-around">
        <div>
          <h6 className="text-xs font-semibold leading-5 tracking-widest text-slate-400	">
            CONFIRMED
          </h6>
          <div className="font-bold text-purple-500 ">
            {/* {countryCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
            90000000
          </div>
        </div>
        <div>
          <h6 className="text-xs font-semibold leading-5 tracking-widest text-slate-400	">
            RECOVERED
          </h6>
          <div className="font-bold text-green-300 ">
            {/* {countryRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
            90000000
          </div>
        </div>
        <div>
          <h6 className="text-xs font-semibold leading-5 tracking-widest text-slate-400	">
            DEATHS
          </h6>
          <div className="font-bold text-red-500 ">
            {/* {countryDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
            90000000
          </div>
        </div>
      </div>
      <div className="mt-2 text-xs font-medium text-slate-500">
        The ratio of Recovery (
        {/* {((countryRecovered / countryCases) * 100).toFixed(2).toString()} */}{' '}
        10 %) & Deaths (
        {/* {((countryDeaths / countryCases) * 100).toFixed(2).toString()} */}90
        %).
      </div>
      <div className="flex justify-between pt-2">
        <div>
          <span className="text-xs font-medium text-slate-500 ">
            Currently Infected Patients
          </span>
          <div className="font-bold text-slate-700 ">
            {/* {(countryCases - countryDeaths - countryRecovered)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
            90000
          </div>
        </div>
        <div className="border-grey-300 max-w-xs rounded-md border p-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-r-sm bg-green-300"></div>
              <span className="text-xs text-slate-500 ">Mild condition</span>
            </div>
            <div className="text-xs font-bold  text-slate-700">
              {/* {(countryCases - countryCritical)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
              90000
            </div>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-r-sm bg-red-500"></div>
              <span className="text-xs text-slate-500 ">
                Critical condition
              </span>
            </div>
            <div className="text-xs font-bold text-slate-700">
              {/* {countryCritical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
              100
            </div>
          </li>
        </div>
      </div>
    </div>
  )
}

export default SelectedCountryData
