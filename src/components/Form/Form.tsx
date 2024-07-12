"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import { CheckboxWithText } from '../CheckBoxWithText/CheckBoxWithText'
import { useStore } from '@/store/store'
import { calculateTax } from '@/utils/calculateTax'

export const Form = () => {
  const wage = useStore(state => state.wage)
  const updateWage = useStore(state => state.updateWage)
  const updateSumOfTax = useStore(state => state.updateSumOfTax)
  const updateChartData = useStore(state => state.updateChartData)
  const updateTableData = useStore(state => state.updateTableData)

  const handleInputWage = (event: { target: { value: string } }) => {
    updateWage(event.target.value);
  }

  const handleCalculate = () => {
    const calculated = calculateTax(wage)
    updateSumOfTax(calculated)
    updateChartData()
    updateTableData()
  }
  return (
    <Card className='flex flex-col justify-evenly'>
      <CardHeader>
        <CardTitle>Калькулятор НДФЛ</CardTitle>
        <CardDescription>Введи свою заработную плату, калькулятор произведет расчет и выведет сумму всего НДФЛ</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <p>Введите вашу ежемесячную зарплату</p>
        <Input
          type="number"
          placeholder={'123456'}
          required
          onChange={handleInputWage}
        />
        <CheckboxWithText />
      </CardContent>
      <CardFooter>
        <Button variant="default" size="lg" disabled={!wage} onClick={handleCalculate}>Рассчитать</Button>
      </CardFooter>
    </Card>
  )
}
