import { useD3 } from '../utils/useD3'
import Card from './Card'
import * as d3 from 'd3'

interface StatCardProps {
  title: string
  cases: string
  casesColor: string
  detailsCases: string
  detailsTitle: string
  fillColor: string
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  cases,
  casesColor,
  detailsCases,
  detailsTitle,
  fillColor,
}) => {
  const data = [
    { date: '2022-03-14', cases: 461678072 },
    { date: '2022-03-15', cases: 463901519 },
    { date: '2022-03-16', cases: 465954428 },
    { date: '2022-03-17', cases: 467868149 },
    { date: '2022-03-18', cases: 469577252 },
    { date: '2022-03-19', cases: 470647389 },
    { date: '2022-03-20', cases: 472118029 },
    { date: '2022-03-21', cases: 474093465 },
    { date: '2022-03-22', cases: 475866103 },
    { date: '2022-03-23', cases: 477617482 },
    { date: '2022-03-24', cases: 479458583 },
    { date: '2022-03-25', cases: 480815100 },
    { date: '2022-03-26', cases: 481727049 },
    { date: '2022-03-28', cases: 483219734 },
    { date: '2022-03-29', cases: 484968478 },
    { date: '2022-03-30', cases: 486560758 },
    { date: '2022-03-31', cases: 488406809 },
    { date: '2022-04-01', cases: 489571518 },
    { date: '2022-04-02', cases: 490616434 },
    { date: '2022-04-03', cases: 491405149 },
  ]

  const renderLineChart = (svg: any) => {
    let height = 150,
      width = 800,
      margin = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }

    const yMax = d3.max(data, (d) => d.cases * Math.random()), // randomness to see how it look for different kinds of date
      yMin = d3.min(data, (d) => d.cases * Math.random()),
      yScale = d3
        .scaleLinear()
        .domain([yMin, yMax! * 1.5] as any)
        .range([height - margin.bottom, margin.top])
    const xExtent = d3.extent(data, (d) => new Date(d.date)),
      xScale = d3
        .scaleTime()
        .domain(xExtent as any)
        .range([margin.left, width - margin.right])

    const area = d3
      .area()
      .x((d: any) => xScale(new Date(d.date)))
      .y1((d: any) => yScale(d.cases * Math.random()))
      .y0(yScale(0))
      .curve(d3.curveNatural)

    svg
      .append('path')
      .attr('d', area(data as any))
      .attr('stroke-width', '2px')
  }
  const statCardRef = useD3(renderLineChart, '')

  return (
    <Card addClass="relative">
      <div className="space-y-2 font-Roboto">
        <h1 className="text-sm font-bold text-slate-700	">{title}</h1>
        <div
          className={`text-4xl font-bold  lg:text-3xl `}
          style={{ color: casesColor }}
        >
          {cases}
        </div>
      </div>
      <div className="!mt-8 font-Roboto">
        <div className="text-sm font-bold text-slate-700">{detailsCases}</div>
        <div className="text-xs text-slate-900">{detailsTitle}</div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 w-full">
        <svg
          className={` h-full w-full   `}
          style={{ fill: fillColor, stroke: casesColor }}
          width={'100%'}
          height={'100%'}
          ref={statCardRef as any}
        ></svg>
      </div>
    </Card>
  )
}

export default StatCard
