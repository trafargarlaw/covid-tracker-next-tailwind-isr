import React from 'react'
import StatCard from './StatCard'

const StatCards = () => {
  return (
    <div className='mt-6'>
        <h1 className="font-Roboto text-2xl font-bold text-slate-700 ml-8">Worldwide Coronavirus Cases</h1>
        <div className="flex justify-around flex-wrap gap-4 mt-6">
            <StatCard title='Confirmed Cases' cases='498,530,471' casesColor='blue-500' detailsCases='+ 227,013' detailsTitle='from yesterday'/>
            <StatCard title='Deaths' cases='6,201,613' casesColor='red-500' detailsCases='+ 584' detailsTitle='from yesterday'/>
            <StatCard title='Recovered' cases='430,870,651' casesColor='green-300' detailsCases='86.43%' detailsTitle='ratio of recovery'/>
            <StatCard title='Active Cases' cases='61,458,207' casesColor='purple-500' detailsCases='54,032' detailsTitle='in Critical / Serious'/>
        </div>
    </div>
  )
}

export default StatCards