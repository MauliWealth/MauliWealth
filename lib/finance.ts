export type ProjectionResult = {
  investedAmount: number
  estimatedReturns: number
  totalValue: number
}

/**
 * Future value of a monthly SIP, compounded monthly, assuming each instalment
 * is invested at the start of the month (the convention most Indian SIP
 * calculators use — an annuity due).
 */
export function calculateSip(monthlyAmount: number, annualRatePct: number, years: number): ProjectionResult {
  const months = Math.max(1, Math.round(years * 12))
  const monthlyRate = annualRatePct / 100 / 12
  const investedAmount = monthlyAmount * months

  const totalValue =
    monthlyRate === 0
      ? investedAmount
      : monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)

  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturns: Math.round(totalValue - investedAmount),
    totalValue: Math.round(totalValue),
  }
}

/** Future value of a one-time lumpsum investment, compounded annually. */
export function calculateLumpsum(principal: number, annualRatePct: number, years: number): ProjectionResult {
  const totalValue = principal * Math.pow(1 + annualRatePct / 100, years)
  return {
    investedAmount: Math.round(principal),
    estimatedReturns: Math.round(totalValue - principal),
    totalValue: Math.round(totalValue),
  }
}

export type GoalResult = {
  requiredMonthlySip: number
  totalInvested: number
  totalGrowth: number
  targetAmount: number
}

/**
 * Solves for the monthly SIP required to reach a target future value — the
 * inverse of calculateSip. Powers the goal-based calculators (Marriage,
 * Retirement, Child Education): "I need ₹X in Y years — how much should I
 * invest monthly?"
 */
export function calculateRequiredSip(targetAmount: number, annualRatePct: number, years: number): GoalResult {
  const months = Math.max(1, Math.round(years * 12))
  const monthlyRate = annualRatePct / 100 / 12

  const requiredMonthlySip =
    monthlyRate === 0
      ? targetAmount / months
      : targetAmount / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))

  const totalInvested = requiredMonthlySip * months

  return {
    requiredMonthlySip: Math.round(requiredMonthlySip),
    totalInvested: Math.round(totalInvested),
    totalGrowth: Math.round(targetAmount - totalInvested),
    targetAmount: Math.round(targetAmount),
  }
}

/** Formats a number as a whole-rupee amount with Indian digit grouping, e.g. ₹12,34,567. */
export function formatINR(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.max(0, value))
}
