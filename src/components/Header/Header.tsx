import React from 'react'
import { ModeToggle } from '@/components/mode'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { Logo } from '../Logo/Logo'

export const Header = () => {
  return (
    <Card>
      <CardHeader className='flex flex-row justify-between items-center'>
        <CardTitle className='flex gap-2 items-center'>
          <Logo
            srcLight="./logoLight.svg"
            srcDark="./logoDark.svg"
            width={41}
            height={59}
            alt="калькулятор"
          />
          Реактивный калькулятор НДФЛ 22%
        </CardTitle>
        <ModeToggle />
      </CardHeader>
    </Card>
  )
}
