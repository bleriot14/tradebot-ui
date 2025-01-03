'use client'

import { useTrading } from '@/components/TradingContext'
import { Signal, TrendingUp, TrendingDown } from 'lucide-react'
import { ExpandableCard } from '@/components/expandable-card'

export default function SignalBox() {
  const { signals } = useTrading()

  return (
    <ExpandableCard
      id="signals"
      title="Sinyaller"
      icon={<Signal className="w-5 h-5 text-purple-400" />}
    >
      <div className="space-y-3">
        {signals.map((signal, index) => (
          <div key={index} className="signal-item flex justify-between items-center">
            <div className="flex items-center gap-2">
              {signal.type === 'BUY' ? (
                <TrendingUp className="w-5 h-5 text-green-500" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-500" />
              )}
              <span className={signal.type === 'BUY' ? 'text-green-400' : 'text-red-400'}>
                {signal.type}
              </span>
            </div>
            <span className="text-gray-400">{signal.timestamp}</span>
            {signal.profit !== undefined && (
              <span className={`font-mono ${signal.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {signal.profit.toFixed(2)}%
              </span>
            )}
          </div>
        ))}
      </div>
    </ExpandableCard>
  )
}

