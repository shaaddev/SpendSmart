'use client'
import { ResponsiveBar } from "@nivo/bar";

export function BarChart({ data }: any) {
  return(
    <div className="aspect-square">
      <ResponsiveBar 
        data={data}
        keys={['value']}
        indexBy='id'
        margin={{ top: 0, right: 0, bottom: 40, left: 40}}
        padding={0.3}
        colors={{ scheme: 'pastel2' }}
        defs={[
          {
            id: 'dots',
            type:'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px"
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
              color: 'white',
              backgroundColor: 'black'
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            }
          }
        }}
      />
    </div>
  )
}