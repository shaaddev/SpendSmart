'use client'
import { ResponsivePie } from '@nivo/pie'

export function DoughnutChart({ data }: any) {
  return(
    <div className='aspect-square'>
      <ResponsivePie 
        data={data}
        margin={{ top: 40, right: 40, bottom: 60, left: 40 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'pastel2' }}
        borderWidth={0}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableArcLinkLabels={false}
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
        fill={[
          {
            match: { id: 'entertainment'}, id: 'dots'
          },
          {
            match: { id: 'groceries'}, id: 'dots'
          },
          {
            match: { id: 'health/medical'}, id: 'dots'
          },
          {
            match: { id: 'food'}, id: 'dots'
          },
          {
            match: { id: 'personal'}, id: 'dots'
          },
          {
            match: { id: 'other'}, id: 'dots'
          },
        ]}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px"
            },
            container: {
              fontSize: "14px",
              textTransform: "capitalize",
              borderRadius: "6px",
              color: 'white',
              backgroundColor: 'black',
            }
          }
        }}
      />
    </div>
  )
}