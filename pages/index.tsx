import type { NextPage } from 'next'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import WorldwideData from '../Components/WorldwideData'
import dynamic from 'next/dynamic'
const WorldMap = dynamic(() => import('../Components/WorldMap'), {
  ssr: false,
})

const Home: NextPage = (props: any) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row-reverse justify-around bg-gray-100 px-6 py-10">
        <Card>
          <WorldwideData
            worldwide={props.worldwideData}
            countries={props.countriesData}
          />
        </Card>
        <WorldMap countriesData={props.countriesData} />
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
      countriesData,
    },
  }
}
