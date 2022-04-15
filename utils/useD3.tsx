import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

export const useD3 = (
  renderChartFn: (
    canv: d3.Selection<d3.BaseType, unknown, HTMLElement, any>
  ) => void,
  dependencies: any
) => {
  const ref = useRef()

  useEffect(() => {
    renderChartFn(d3.select(ref.current!))
    return () => {}
  }, [dependencies])
  return ref
}
