
import { useTRPC } from '@/trpc/client'
import { caller } from '@/trpc/server'
import React from 'react'

const page = async () => {
  const data = await caller.hello({text: "Ram"})
  return (
    <div>
      Hello World
      {JSON.stringify(data)}
    </div>
  )
}

export default page
