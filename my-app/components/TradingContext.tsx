'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface TradingContextType {
  // Sinyal parametreleri
  timeframe: number
  maType: '50' | '100'
  entryAmount: number
  stopLoss: number
  takeProfit: number
  
  // Backtest parametreleri
  backtestTimeframe: number
  backtestDuration: number
  performanceMetric: 'sharpe' | 'sortino' | 'winRate'
  
  // Listeler
  whitelist: string[]
  blacklist: string[]
  
  // Sinyaller
  signals: Array<{
    type: 'BUY' | 'SELL'
    timestamp: string
    profit?: number
  }>
  
  // Güncelleme fonksiyonları
  updateParameters: (params: Partial<TradingContextType>) => void
  addToList: (type: 'white' | 'black', symbol: string) => void
  removeFromList: (type: 'white' | 'black', symbol: string) => void
  addSignal: (signal: { type: 'BUY' | 'SELL', timestamp: string, profit?: number }) => void
  expandedBox: string | null
  setExpandedBox: (boxId: string | null) => void
}

const TradingContext = createContext<TradingContextType | undefined>(undefined)

export function TradingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({
    timeframe: 5,
    maType: '50' as const,
    entryAmount: 100,
    stopLoss: 1,
    takeProfit: 3,
    backtestTimeframe: 5,
    backtestDuration: 30,
    performanceMetric: 'sharpe' as const,
    whitelist: [],
    blacklist: [],
    signals: []
  })

  const [expandedBox, setExpandedBox] = useState<string | null>(null)

  const updateParameters = (params: Partial<TradingContextType>) => {
    setState(prev => ({ ...prev, ...params }))
  }

  const addToList = (type: 'white' | 'black', symbol: string) => {
    setState(prev => ({
      ...prev,
      [`${type}list`]: [...prev[`${type}list`], symbol]
    }))
  }

  const removeFromList = (type: 'white' | 'black', symbol: string) => {
    setState(prev => ({
      ...prev,
      [`${type}list`]: prev[`${type}list`].filter(s => s !== symbol)
    }))
  }

  const addSignal = (signal: { type: 'BUY' | 'SELL', timestamp: string, profit?: number }) => {
    setState(prev => ({
      ...prev,
      signals: [...prev.signals, signal]
    }))
  }

  return (
    <TradingContext.Provider value={{
      ...state,
      expandedBox,
      setExpandedBox,
      updateParameters,
      addToList,
      removeFromList,
      addSignal
    }}>
      {children}
    </TradingContext.Provider>
  )
}

export const useTrading = () => {
  const context = useContext(TradingContext)
  if (context === undefined) {
    throw new Error('useTrading must be used within a TradingProvider')
  }
  return context
}

