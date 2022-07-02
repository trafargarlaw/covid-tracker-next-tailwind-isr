import { useD3 } from '../utils/useD3'
import * as d3 from 'd3'
import { queue } from 'd3-queue'
import { mesh, feature } from 'topojson'
import worldJson from '../public/json/world-110m.json'
import map from '../public/json/map.json'
import { CountryDataType } from '../utils/types'
import { useState } from 'react'

interface GlobePorps {
  selectedCountry: string
  countriesCovData: CountryDataType[]
}

const Globe: React.FC<GlobePorps> = ({ selectedCountry, countriesCovData }) => {
  const [currentRotation, setCurrentRotation] = useState([0, 0, 0])
  const renderGlobe = (
    canv: d3.Selection<d3.BaseType, unknown, HTMLElement, any>
  ) => {
    const width = 500
    const height = 500
    const projection = d3
      .geoOrthographic()
      .translate([width / 2, height / 2])
      .scale(width / 2 - 20)
      .clipAngle(90)
      .precision(0.4)

    const c = (canv.node() as HTMLCanvasElement).getContext('2d')!
    const path = d3.geoPath().projection(projection).context(c)
    const title = d3.select('.title')

    queue().await(ready)
    function ready(error: Error) {
      if (error) throw error

      const globe = { type: 'Sphere' }
      const land = feature(worldJson as any, worldJson.objects.land as any)
      const countries = map.features.filter(
        (country: { id: string }) =>
          !!countriesCovData.find(
            (value: { countryInfo: { iso3: any } }) =>
              value.countryInfo.iso3 == country.id
          )
      )
      const borders = mesh(
        worldJson as any,
        worldJson.objects.countries as any,
        function (a: any, b: any) {
          return a !== b
        }
      )

      function transition(iso3: string) {
        d3.transition()
          .duration(1250)
          .on('start', function () {
            title.text(
              countriesCovData.find(
                (value: { countryInfo: { iso3: string } }) =>
                  value.countryInfo.iso3 == iso3
              )!.cases
            )
          })
          .tween('rotate', function () {
            const p = d3.geoCentroid(
              countries.find((value: { id: string }) => value.id == iso3) as any
            )
            const r = d3.interpolate(currentRotation, [-p[0], -p[1]])
            console.log(iso3)
            return function (t) {
              projection.rotate(r(t) as any)
              c?.clearRect(0, 0, width, height)
              c.fillStyle = 'rgb(206, 223, 246)'
              c?.beginPath()
              path(land)
              c?.fill()
              c.fillStyle = '#1821E6'
              c.beginPath()
              path(
                countries.find(
                  (value: { id: string }) => value.id == iso3
                ) as any
              ),
                c.fill()
              c.strokeStyle = '#fff'
              c.lineWidth = 0.5
              c.beginPath()
              path(borders)
              c.stroke()
              c.strokeStyle = 'hsla(208, 100%, 18%, 0.2)'
              c.lineWidth = 2
              c.beginPath()
              path(globe as any), c.stroke()
            }
          })
          .on('end', function () {
            setCurrentRotation(projection.rotate())
          })
      }
      transition(selectedCountry)
    }
  }
  const ref = useD3(renderGlobe, selectedCountry)
  return (
    <canvas
      ref={ref as any}
      className="h-[300px] w-[300px] sm:h-[500px]   sm:w-[500px]   "
      width={500}
      height={500}
    ></canvas>
  )
}

export default Globe
