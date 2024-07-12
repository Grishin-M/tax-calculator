import { formatter } from '@/utils/formatter'
import { create } from 'zustand'

type TChartData = {
  id: string
  browser: string
  visitors: number
  fill: string
}

export type TCalculatedChartData = {
  thirteenTax: number
  fifteenTax: number
  eighteenTax: number
  twentyTax: number
  twentyTwoTax: number
}

export type TTableData = {
  rate: string
  beforeTax: string
  afterTax: string
  tax: string
}

export type State = {
  wage: number
  isCalculate: boolean
  isLoading: boolean
  beforeTax: boolean
  chartData: TChartData[]
  calculatedTax: number
  calculatedChartData: TCalculatedChartData
  tableData: TTableData[]
  updateWage: (newWage: string) => void
  updateChecked: (value: boolean) => void
  updateCalculate: (value: boolean) => void
  updateSumOfTax: (value: TCalculatedChartData) => void
  updateChartData: () => void
  updateTableData: () => void
}

export const useStore = create<State>((set, get) => ({
  wage: 0,
  isCalculate: false,
  isLoading: false,
  beforeTax: false,
  chartData: [
    { id: 'thirteenTax', browser: "НДФЛ 13%", visitors: 0, fill: "var(--color-chrome)" },
    { id: 'fifteenTax', browser: "НДФЛ 15%", visitors: 0, fill: "var(--color-safari)" },
    { id: 'eighteenTax', browser: "НДФЛ 18%", visitors: 0, fill: "var(--color-firefox)" },
    { id: 'twentyTax', browser: "НДФЛ 20%", visitors: 0, fill: "var(--color-edge)" },
    { id: 'twentyTwoTax', browser: "НДФЛ 22%", visitors: 0, fill: "var(--color-other)" },
  ],
  calculatedTax: 0,
  calculatedChartData: {
    thirteenTax: 0,
    fifteenTax: 0,
    eighteenTax: 0,
    twentyTax: 0,
    twentyTwoTax: 0,
  },
  tableData: [
    { rate: '13%', beforeTax: '0', afterTax: '0', tax: '0' },
    { rate: '15%', beforeTax: '0', afterTax: '0', tax: '0' },
    { rate: '18%', beforeTax: '0', afterTax: '0', tax: '0' },
    { rate: '20%', beforeTax: '0', afterTax: '0', tax: '0' },
    { rate: '22%', beforeTax: '0', afterTax: '0', tax: '0' },
  ],
  updateWage: (newWage: string) => set({
    wage: Number(newWage)
  }),
  updateChecked: (value: boolean) => set({ beforeTax: value }),
  updateCalculate: (value: boolean) => set({
    isCalculate: value
  }),
  updateSumOfTax: (value: TCalculatedChartData) => set({
    calculatedChartData: value
  }),
  updateChartData() {
    const date = get().calculatedChartData
    set({
      chartData: [
        { id: 'thirteenTax', browser: "НДФЛ 13%", visitors: date.thirteenTax, fill: "var(--color-chrome)" },
        { id: 'fifteenTax', browser: "НДФЛ 15%", visitors: date.fifteenTax, fill: "var(--color-safari)" },
        { id: 'eighteenTax', browser: "НДФЛ 18%", visitors: date.eighteenTax, fill: "var(--color-firefox)" },
        { id: 'twentyTax', browser: "НДФЛ 20%", visitors: date.twentyTax, fill: "var(--color-edge)" },
        { id: 'twentyTwoTax', browser: "НДФЛ 22%", visitors: date.twentyTwoTax, fill: "var(--color-other)" },
      ]
    })
  },
  updateTableData() {
    const date = get().calculatedChartData
    set({
      tableData: [
        { rate: '13%', beforeTax: '0', afterTax: '0', tax: formatter(date.thirteenTax) },
        { rate: '15%', beforeTax: '0', afterTax: '0', tax: formatter(date.fifteenTax) },
        { rate: '18%', beforeTax: '0', afterTax: '0', tax: formatter(date.eighteenTax) },
        { rate: '20%', beforeTax: '0', afterTax: '0', tax: formatter(date.twentyTax) },
        { rate: '22%', beforeTax: '0', afterTax: '0', tax: formatter(date.twentyTwoTax) },
      ]
    })
  }
}))