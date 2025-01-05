'use client'

import { Suspense } from 'react'
import { TradingProvider } from '../components/TradingContext'
import SignalBox from '../components/SignalBox'
import ParametersBox from '../components/ParametersBox'
import ListBox from '../components/ListBox'
import BacktestBox from '../components/BacktestBox'
import LoadingSpinner from '../components/LoadingSpinner'
import { Activity } from 'lucide-react'

export default function Home() {
  return (
    <TradingProvider>
      <main className="container mx-auto p-4">
        <div className="flex items-center gap-3 mb-8">
          <Activity className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Trading Dashboard
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Suspense fallback={<LoadingSpinner />}>
            <SignalBox />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <ParametersBox />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <ListBox />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <BacktestBox />
          </Suspense>
        </div>
      </main>
    </TradingProvider>
  )
}

