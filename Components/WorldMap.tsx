import { ResponsiveChoropleth } from '@nivo/geo'
import mapJson from '../map.json'
import React from 'react'

const WorldMap = ({ countriesData }: any) => {
  // transform the "country" key to "id"
  const data = countriesData.map((country: any) => ({
    id: country.countryInfo.iso3,
    value: country.cases,
  }))

  return (
    <div className="relative h-[400px] w-[700px]">
      <ResponsiveChoropleth
        data={data}
        features={mapJson.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors={[
          'hsl(215, 40%, 90%)',
          'hsl(215, 50%, 85%)',
          'hsl(215, 60%, 81%)',
          'hsl(215, 70%, 70%)',
          'hsl(215, 80%, 60%)',
          'hsl(215, 100%, 45%)',
        ]}
        domain={[0, 10000000]}
        unknownColor="rgb(192, 204, 230)"
        value="value"
        label="id"
        valueFormat=".2s"
        projectionType="mercator"
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        projectionTranslation={[0.5, 0.71]}
        borderWidth={0.1}
        borderColor="#152538"
        legends={[
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 45,
            translateY: 0,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: '#444444',
            itemOpacity: 0.85,
            symbolSize: 12,
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000000',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  )
}

export default WorldMap
