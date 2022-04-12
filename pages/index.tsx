import type { NextPage } from 'next'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import WorldwideData from '../Components/WorldwideData'
import dynamic from 'next/dynamic'
import StatCards from '../Components/StatCards'
import Globe from '../Components/Globe'
import { useState } from 'react'

const WorldMap = dynamic(() => import('../Components/WorldMap'), {
  ssr: false,
})

const Home: NextPage = (props: any) => {
  const [selectedCountry, setSelectedCountry] = useState('CAN')

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap items-center justify-center bg-gray-100 ">
        <Globe
          selectedCountry={selectedCountry}
          countriesCovData={props.countriesData}
        />
        <Card>
          <WorldwideData
            worldwide={props.worldwideData}
            countries={props.countriesData}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </Card>
      </div>
      <StatCards worldwide={props.worldwideData} />
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
      countriesData,
    },
  }
}
