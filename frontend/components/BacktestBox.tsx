'use client'

import { useTrading } from './TradingContext'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LineChart, Clock, BarChart } from 'lucide-react'
import { ExpandableCard } from '@/components/expandable-card'

export default function BacktestBox() {
  const { 
    backtestTimeframe, 
    backtestDuration, 
    performanceMetric,
    updateParameters 
  } = useTrading()

  return (
    <ExpandableCard
      id="backtest"
      title="Backtest Ayarları"
      icon={<LineChart className="w-5 h-5 text-purple-400" />}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-purple-400" />
            <label className="text-sm text-gray-400">Zaman Dilimi (dk)</label>
          </div>
          <Input 
            type="number"
            value={backtestTimeframe}
            onChange={(e) => updateParameters({ backtestTimeframe: Number(e.target.value) })}
            className="trading-input"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-purple-400" />
            <label className="text-sm text-gray-400">Test Süresi (gün)</label>
          </div>
          <Input 
            type="number"
            value={backtestDuration}
            onChange={(e) => updateParameters({ backtestDuration: Number(e.target.value) })}
            className="trading-input"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <BarChart className="w-4 h-4 text-purple-400" />
            <label className="text-sm text-gray-400">Performans Metriği</label>
          </div>
          <Select 
            value={performanceMetric}
            onValueChange={(value: 'sharpe' | 'sortino' | 'winRate') => 
              updateParameters({ performanceMetric: value })}
          >
            <SelectTrigger className="trading-input">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sharpe">Sharpe Ratio</SelectItem>
              <SelectItem value="sortino">Sortino Ratio</SelectItem>
              <SelectItem value="winRate">Win Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ExpandableCard>
  )
}

