"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { useStore } from '@/store/store'

export function CheckboxWithText() {
  const includeTax = useStore(state => state.includeTax)
  const updateChecked = useStore(state => state.updateChecked)

  const handleChecked = () => {
    updateChecked(!includeTax)
  }

  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" checked={includeTax} onClick={handleChecked} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          До вычета НДФЛ
        </label>
      </div>
    </div>
  )
}
