'use client';
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

const ReactQueryProvider = ({children}: React.PropsWithChildren) => {
    const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default ReactQueryProvider