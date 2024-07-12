"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useStore } from '@/store/store'
import { Card } from '../ui/card'

export function TaxTable() {
  const tableData = useStore(state => state.tableData)
  const wage = useStore(state => state.wage)
  const totalWagePerYear = wage * 12;
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">НДФЛ</TableHead>
            <TableHead>Сумма до вычета</TableHead>
            <TableHead>Сумма на руки</TableHead>
            <TableHead className="text-right">Сумма налога</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((tax, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{tax.rate}</TableCell>
              <TableCell>{tax.beforeTax}</TableCell>
              <TableCell>{tax.afterTax}</TableCell>
              <TableCell className="text-right">{tax.tax}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Общая сумма на руки, после вычета НДФЛ</TableCell>
            <TableCell className="text-right">{totalWagePerYear}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  )
}
