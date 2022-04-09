import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../Components/Card'
import SelectedCountryData from '../Components/SelectedCountryData'
import SideBar from '../Components/SideBar'
import WorldwideData from '../Components/WorldwideData'

const Home: NextPage = (props: any) => {
  // Template https://thecovtrackerr.netlify.app/
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SideBar />
      <div className="ml-28">
        <div>
          <h1 className="text-primaryColors-title pt-4 font-Roboto text-xl font-bold	">
            COVID-19 Coronavirus Tracker
          </h1>
        </div>
        <Card>
          <WorldwideData {...props.worldwideData} />
          {/* hadok les trois points kaytsmaw spread operator, kayched dakchi li f l array dyal data o kayspreadih f7ala ktebt cases=props.data.cases recovered=props.data.recovered etc.... */}
        </Card>
        <Card>
          <SelectedCountryData />
          {/* hadi khass fetch b had lien https://disease.sh/v3/covid-19/countries/morocco la khdemti 7awl mtmechghel M3aha: */}
          {/* fetchi data f getStaticProps te7t lfetch lowl b la même façon bach fetchinah o returni countryData */}
          {/* dowz data f l props dyal SelectedCountryData b la même façon bach dowztha f WorldwideData*/}
          {/* o7Awl tmchghel m3a dik SelctedCountryData t kherejlik dik data d maroc*/}
        </Card>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  //bach tfhm static site generation, checki network f dev tool, chof requests atl9a makayna 7ta request alors que data katfetcha
  const worldwideData = await fetch('https://disease.sh/v3/covid-19/all').then(
    (result) => result.json()
  )
  // const countryData = await fetch('https://disease.sh/v3/covid-19/countries/morocco').then(
  //   (result) => result.json()
  // )

  return {
    props: {
      worldwideData,
      //countryData
    },
  }
}
