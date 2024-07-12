import { WAGE_YEAR_SUM_OF_TAX } from '../constants/constants';

export const calculateTax = (wage: number) => {
  const wagePerYear = wage * 12
  const thirteenTax = WAGE_YEAR_SUM_OF_TAX[13] * 0.13
  const fifteenTax = (wagePerYear - WAGE_YEAR_SUM_OF_TAX[13]) * 0.15
  const eighteenTax = (wagePerYear - WAGE_YEAR_SUM_OF_TAX[15]) * 0.18
  const twentyTax = (wagePerYear - WAGE_YEAR_SUM_OF_TAX[18]) * 0.20
  const twentyTwoTax = (wagePerYear - WAGE_YEAR_SUM_OF_TAX[20]) * 0.22
  const result = {
    thirteenTax: 0,
    fifteenTax: 0,
    eighteenTax: 0,
    twentyTax: 0,
    twentyTwoTax: 0,
  }
  if (wagePerYear <= WAGE_YEAR_SUM_OF_TAX[13]) {
    return {
      ...result,
      thirteenTax: wagePerYear * 0.13
    }
  }
  if (wagePerYear <= WAGE_YEAR_SUM_OF_TAX[15]) {
    return {
      ...result,
      thirteenTax: thirteenTax,
      fifteenTax: fifteenTax,
    }
  }
  if (wagePerYear <= WAGE_YEAR_SUM_OF_TAX[18]) {
    return {
      ...result,
      thirteenTax: thirteenTax,
      fifteenTax: fifteenTax,
      eighteenTax: eighteenTax,
    }
  }
  if (wagePerYear <= WAGE_YEAR_SUM_OF_TAX[20]) {
    return {
      ...result,
      thirteenTax: thirteenTax,
      fifteenTax: fifteenTax,
      eighteenTax: eighteenTax,
      twentyTax: twentyTax,
    }
  }
  if (wagePerYear >= WAGE_YEAR_SUM_OF_TAX[22]) {
    return {
      ...result,
      thirteenTax: thirteenTax,
      fifteenTax: fifteenTax,
      eighteenTax: eighteenTax,
      twentyTax: twentyTax,
      twentyTwoTax: twentyTwoTax,
    }
  }
  return result;
}
