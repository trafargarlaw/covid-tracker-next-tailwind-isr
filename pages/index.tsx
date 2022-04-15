import type { NextPage } from 'next'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import CountryCardContent from '../Components/CountryCardContent'
import StatCards from '../Components/StatCards'
import Globe from '../Components/Globe'
import { useState } from 'react'
import { CountryDataType, WorldwideDataType } from '../utils/types'
import BrowseByCountry from '../Components/BrowseByCountry'
import MostAffected from '../Components/MostAffected'

interface HomeProps {
  worldwideData: WorldwideDataType
  countriesData: CountryDataType[]
}

const Home: NextPage<HomeProps> = ({ worldwideData, countriesData }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('CAN')

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap items-center justify-center bg-gray-100 ">
        <Globe
          selectedCountry={selectedCountry}
          countriesCovData={countriesData}
        />
        <Card addClass="bg-white">
          <CountryCardContent
            countries={countriesData}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </Card>
      </div>
      <StatCards worldwide={worldwideData} />
      <div className="mt-6 flex flex-wrap lg:mx-16   ">
        <Card addClass="row-span-2 lg:basis-[58%]  lg:w-[60%]">
          <BrowseByCountry
            countriesCovData={countriesData}
            worldwideCovData={worldwideData}
          />
        </Card>

        <div className="mx-2 mt-4 w-full space-y-4 lg:mx-0 lg:mt-0 lg:basis-[40%]">
          <Card addClass="!mx-0">
            <MostAffected countriesCovData={countriesData.slice(0, 5)} />
          </Card>
          <Card addClass="!mx-0">
            <MostAffected countriesCovData={countriesData.slice(0, 5)} />
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const worldwideData = await fetch('https://disease.sh/v3/covid-19/all').then(
    (result) => result.json()
  )
  const countriesData = await fetch(
    'https://disease.sh/v3/covid-19/countries'
  ).then((result) => result.json())

  return {
    props: {
      worldwideData,
      countriesData: countriesData.sort((a: any, b: any) => {
        return b['cases'] - a['cases']
      }),
    },
    revalidate: 60 * 60 * 24,
  }
}
