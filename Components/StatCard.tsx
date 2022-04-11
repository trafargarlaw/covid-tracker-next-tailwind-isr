import React from 'react'
import Card from './Card'

interface StatCardProps{
    title: string,
    cases: string,
    casesColor: string,
    detailsCases: string,
    detailsTitle: string
}

const StatCard: React.FC<StatCardProps> = ({title, cases, casesColor, detailsCases, detailsTitle}) => {
  return (
    <Card>
        <div className='font-Roboto space-y-2'>
            <h1 className="text-sm font-bold text-slate-700	">
                {title}
            </h1>
            <div className={`font-bold text-4xl text-${casesColor}`}>{cases}</div>
            {/* <div className={`font-bold text-4xl text-blue-500`}>{cases}</div> */}
        </div>

        <div className='font-Roboto !mt-8'>
            <div className='text-sm font-bold text-slate-700'>{detailsCases}</div>
            <div className='text-xs text-slate-400'>{detailsTitle}</div>
        </div>
    </Card>
  )
}

export default StatCard