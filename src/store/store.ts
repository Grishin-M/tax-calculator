import { formatter } from '@/utils/formatter'
import { create } from 'zustand'

type TChartData = {
  id: string
  browser: string
  visitors: number
  fill: string
}

type TTaxes = {
  thirteenTax: number
  fifteenTax: number
  eighteenTax: number
  twentyTax: number
  twentyTwoTax: number
}

export type TCalculatedData = {
  beforeTax: TTaxes
  afterTax: TTaxes
  sumOfTax: TTaxes
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
  includeTax: boolean
  chartData: TChartData[]
  calculatedTax: number
  allOfTax: TCalculatedData
  tableData: TTableData[]
  updateWage: (newWage: string) => void
  updateChecked: (value: boolean) => void
  updateCalculate: (value: boolean) => void
  updateSumOfTax: (value: TCalculatedData) => void
  updateChartData: () => void
  updateTableData: () => void
  updateCalculatedTax: () => void
}

export const useStore = create<State>((set, get) => ({
  wage: 0,
  isCalculate: false,
  includeTax: true,
  chartData: [
    { id: 'thirteenTax', browser: "НДФЛ 13%", visitors: 0, fill: "var(--color-chrome)" },
    { id: 'fifteenTax', browser: "НДФЛ 15%", visitors: 0, fill: "var(--color-safari)" },
    { id: 'eighteenTax', browser: "НДФЛ 18%", visitors: 0, fill: "var(--color-firefox)" },
    { id: 'twentyTax', browser: "НДФЛ 20%", visitors: 0, fill: "var(--color-edge)" },
    { id: 'twentyTwoTax', browser: "НДФЛ 22%", visitors: 0, fill: "var(--color-other)" },
  ],
  calculatedTax: 0,
  allOfTax: {
    beforeTax: {
      thirteenTax: 0,
      fifteenTax: 0,
      eighteenTax: 0,
      twentyTax: 0,
      twentyTwoTax: 0,
    },
    afterTax: {
      thirteenTax: 0,
      fifteenTax: 0,
      eighteenTax: 0,
      twentyTax: 0,
      twentyTwoTax: 0,
    },
    sumOfTax: {
      thirteenTax: 0,
      fifteenTax: 0,
      eighteenTax: 0,
      twentyTax: 0,
      twentyTwoTax: 0,
    }
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
  updateChecked: (value: boolean) => set({ includeTax: value }),
  updateCalculate: (value: boolean) => set({
    isCalculate: value
  }),
  updateSumOfTax: (value: TCalculatedData) => set({
    allOfTax: value
  }),
  updateChartData() {
    const date = get().allOfTax
    set({
      chartData: [
        { id: 'thirteenTax', browser: "НДФЛ 13% ", visitors: date.sumOfTax.thirteenTax, fill: "var(--color-chrome)" },
        { id: 'fifteenTax', browser: "НДФЛ 15% ", visitors: date.sumOfTax.fifteenTax, fill: "var(--color-safari)" },
        { id: 'eighteenTax', browser: "НДФЛ 18% ", visitors: date.sumOfTax.eighteenTax, fill: "var(--color-firefox)" },
        { id: 'twentyTax', browser: "НДФЛ 20% ", visitors: date.sumOfTax.twentyTax, fill: "var(--color-edge)" },
        { id: 'twentyTwoTax', browser: "НДФЛ 22% ", visitors: date.sumOfTax.twentyTwoTax, fill: "var(--color-other)" },
      ]
    })
  },
  updateTableData() {
    const date = get().allOfTax
    set({
      tableData: [
        { rate: '13%', beforeTax: formatter(date.beforeTax.thirteenTax), afterTax: formatter(date.afterTax.thirteenTax), tax: formatter(date.sumOfTax.thirteenTax) },
        { rate: '15%', beforeTax: formatter(date.beforeTax.fifteenTax), afterTax: formatter(date.afterTax.fifteenTax), tax: formatter(date.sumOfTax.fifteenTax) },
        { rate: '18%', beforeTax: formatter(date.beforeTax.eighteenTax), afterTax: formatter(date.afterTax.eighteenTax), tax: formatter(date.sumOfTax.eighteenTax) },
        { rate: '20%', beforeTax: formatter(date.beforeTax.twentyTax), afterTax: formatter(date.afterTax.twentyTax), tax: formatter(date.sumOfTax.twentyTax) },
        { rate: '22%', beforeTax: formatter(date.beforeTax.twentyTwoTax), afterTax: formatter(date.afterTax.twentyTwoTax), tax: formatter(date.sumOfTax.twentyTwoTax) },
      ]
    })
  },
  updateCalculatedTax() {
    const calculatedChartData = get().allOfTax
    set({
      calculatedTax: Object.values(calculatedChartData.sumOfTax).reduce((acc, number) => acc + number)
    })
  },
}))