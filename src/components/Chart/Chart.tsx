"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { ImageLoadMonkey } from '@/components/ImageLoadMonkey/ImageLoadMonkey'
import { useStore } from '@/store/store'
import { chartConfig } from '@/constants/constants'
import { formatter } from '@/utils/formatter'

export const Chart = () => {
  const data = useStore(state => state.chartData)
  const calculatedTax = useStore(state => state.calculatedTax)
  const isCalculate = useStore(state => state.isCalculate)

  const formatted = formatter(Number(calculatedTax));

  if (!isCalculate) {
    return (
      <Card className="flex flex-col items-center p-2.5">
        <ImageLoadMonkey />
      </Card>
    )
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          Вы заплатите
          <div className="text-2xl font-bold text-center">{formatted ?? 0}</div>
        </CardTitle>
        <CardDescription>За полный год работы</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Ниже в таблице вы найдете детальную информацию <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
