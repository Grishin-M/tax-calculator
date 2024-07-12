import { ChartConfig } from '@/components/ui/chart';

export const chartConfig: ChartConfig = {
  tax: {
    label: "Общая сумма НДФЛ",
  },
  chrome: {
    label: "НДФЛ 13%",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "НДФЛ 15%",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "НДФЛ 18%",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "НДФЛ 20%",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "НДФЛ 22%",
    color: "hsl(var(--chart-5))",
  },
}

export const WAGE_YEAR_SUM_OF_TAX = {
  13: 2400000,
  15: 5000000,
  18: 20000000,
  20: 50000000,
  22: 50000001
}