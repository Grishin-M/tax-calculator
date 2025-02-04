import { WAGE_YEAR_SUM_OF_TAX } from '../constants/constants';

export const calculateTax = (wage: number, includeTax: boolean) => {
  const wagePerYear = wage * 12
  const result = {
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
  }

  if (wagePerYear <= WAGE_YEAR_SUM_OF_TAX[13]) {
    return {
      beforeTax: {
        ...result.beforeTax,
        thirteenTax: wagePerYear,
      },
      afterTax: {
        ...result.afterTax,
        thirteenTax: wagePerYear * 0.87,
      },
      sumOfTax: {
        ...result.sumOfTax,
        thirteenTax: wagePerYear * 0.13
      }
    }
  }

  if (wagePerYear <= WAGE_YEAR_SUM_OF_TAX[15]) {
    return {
      beforeTax: {
        ...result.beforeTax,
        thirteenTax: WAGE_YEAR_SUM_OF_TAX[13],
        fifteenTax: wagePerYear - WAGE_YEAR_SUM_OF_TAX[13]
      },
      afterTax: {
        ...result.afterTax,
        thirteenTax: WAGE_YEAR_SUM_OF_TAX[13] * 0.87,
        fifteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[13]) * 0.85
      },
      sumOfTax: {
        ...result.sumOfTax,
        thirteenTax: WAGE_YEAR_SUM_OF_TAX[13] * 0.13,
        fifteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[13]) * 0.15,
      }
    }
  }
  if (wagePerYear <= WAGE_YEAR_SUM_OF_TAX[18]) {
    return {
      beforeTax: {
        ...result.beforeTax,
        thirteenTax: WAGE_YEAR_SUM_OF_TAX[13],
        fifteenTax: wagePerYear - WAGE_YEAR_SUM_OF_TAX[13],
        eighteenTax: wagePerYear - WAGE_YEAR_SUM_OF_TAX[15],
      },
      afterTax: {
        ...result.afterTax,
        thirteenTax: WAGE_YEAR_SUM_OF_TAX[13] * 0.87,
        fifteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[13]) * 0.85,
        eighteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[15]) * 0.82,
      },
      sumOfTax: {
        ...result.sumOfTax,
        thirteenTax: WAGE_YEAR_SUM_OF_TAX[13] * 0.13,
        fifteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[13]) * 0.15,
        eighteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[15]) * 0.18,
      }
    }
  }
  if (wagePerYear <= WAGE_YEAR_SUM_OF_TAX[20]) {
    return {
      beforeTax: {
        ...result.beforeTax,
        thirteenTax: WAGE_YEAR_SUM_OF_TAX[13],
        fifteenTax: wagePerYear - WAGE_YEAR_SUM_OF_TAX[13],
        eighteenTax: wagePerYear - WAGE_YEAR_SUM_OF_TAX[15],
        twentyTax: wagePerYear - WAGE_YEAR_SUM_OF_TAX[18],
      },
      afterTax: {
        ...result.afterTax,
        thirteenTax: WAGE_YEAR_SUM_OF_TAX[13] * 0.87,
        fifteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[13]) * 0.85,
        eighteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[15]) * 0.82,
        twentyTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[18]) * 0.80,
      },
      sumOfTax: {
        ...result.sumOfTax,
        thirteenTax: WAGE_YEAR_SUM_OF_TAX[13] * 0.13,
        fifteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[13]) * 0.15,
        eighteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[15]) * 0.18,
        twentyTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[18]) * 0.20,
      }
    }
  }
  if (wagePerYear >= WAGE_YEAR_SUM_OF_TAX[22]) {
    return {
      beforeTax: {
        ...result.beforeTax,
        thirteenTax: WAGE_YEAR_SUM_OF_TAX[13],
        fifteenTax: wagePerYear - WAGE_YEAR_SUM_OF_TAX[13],
        eighteenTax: wagePerYear - WAGE_YEAR_SUM_OF_TAX[15],
        twentyTax: wagePerYear - WAGE_YEAR_SUM_OF_TAX[18],
        twentyTwoTax: wagePerYear - WAGE_YEAR_SUM_OF_TAX[20],
      },
      afterTax: {
        ...result.afterTax,
        thirteenTax: WAGE_YEAR_SUM_OF_TAX[13] * 0.87,
        fifteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[13]) * 0.85,
        eighteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[15]) * 0.82,
        twentyTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[18]) * 0.80,
        twentyTwoTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[20]) * 0.78,
      },
      sumOfTax: {
        ...result.sumOfTax,
        thirteenTax: WAGE_YEAR_SUM_OF_TAX[13] * 0.13,
        fifteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[13]) * 0.15,
        eighteenTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[15]) * 0.18,
        twentyTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[18]) * 0.20,
        twentyTwoTax: (wagePerYear - WAGE_YEAR_SUM_OF_TAX[20]) * 0.22,
      }
    }
  }
  return result;
}