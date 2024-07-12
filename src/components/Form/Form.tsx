"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import { CheckboxWithText } from '../CheckBoxWithText/CheckBoxWithText'
import { useStore } from '@/store/store'
import { calculateTax } from '@/utils/calculateTax'
import { formatter } from '@/utils/formatter'

export const Form = () => {
  const wage = useStore(state => state.wage)
  const isCalculate = useStore(state => state.isCalculate)
  const updateWage = useStore(state => state.updateWage)
  const updateSumOfTax = useStore(state => state.updateSumOfTax)
  const updateChartData = useStore(state => state.updateChartData)
  const updateTableData = useStore(state => state.updateTableData)
  const updateCalculate = useStore(state => state.updateCalculate)
  const updateCalculatedTax = useStore(state => state.updateCalculatedTax)

  const handleInputWage = (event: { target: { value: string } }) => {
    updateWage(event.target.value);
  }

  const handleCalculate = () => {
    const calculated = calculateTax(wage)
    updateSumOfTax(calculated)
    updateCalculatedTax()
    updateChartData()
    updateTableData()
    updateCalculate(true)
  }

  const handleClear = () => {
    updateCalculate(false)
  }

  return (
    <Card className='flex flex-col justify-evenly 2xl:p-0 xl:p-0 lg:p-0 md:p-0 sm:p-0'>
      <CardHeader>
        <CardTitle>Калькулятор НДФЛ</CardTitle>
        <CardDescription>Введи свою заработную плату, калькулятор произведет расчет и выведет сумму всего НДФЛ</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <p>Введите вашу ежемесячную зарплату</p>
        <Input
          type="number"
          placeholder={formatter(100000)}
          required
          onChange={handleInputWage}
        />
        <CheckboxWithText />
      </CardContent>
      <CardFooter className='flex gap-5'>
        <Button variant="default" size="lg" disabled={!wage} onClick={handleCalculate}>Рассчитать</Button>
        <Button variant="default" size="lg" disabled={!isCalculate} onClick={handleClear}>Вернуть бухгалтера</Button>
      </CardFooter>
    </Card >
  )
}
