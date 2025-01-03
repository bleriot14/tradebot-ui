'use client'

import { useTrading } from '@/components/TradingContext'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Settings, ArrowRightLeft } from 'lucide-react'
import { ExpandableCard } from '@/components/expandable-card'

export default function ParametersBox() {
  const { 
    timeframe, 
    maType, 
    entryAmount, 
    stopLoss, 
    takeProfit,
    updateParameters 
  } = useTrading()

  return (
    <ExpandableCard
      id="parameters"
      title="Giriş/Çıkış Parametreleri"
      icon={<Settings className="w-5 h-5 text-purple-400" />}
    >
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-4 h-4 text-purple-400" />
            <h3 className="font-medium text-purple-200">Giriş Parametreleri</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Zaman Dilimi (dk)</label>
              <Input 
                type="number" 
                value={timeframe}
                onChange={(e) => updateParameters({ timeframe: Number(e.target.value) })}
                className="trading-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">MA Tipi</label>
              <Select 
                value={maType}
                onValueChange={(value: '50' | '100') => updateParameters({ maType: value })}
              >
                <SelectTrigger className="trading-input">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50">MA 50</SelectItem>
                  <SelectItem value="100">MA 100</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Giriş Miktarı ($)</label>
              <Input 
                type="number"
                value={entryAmount}
                onChange={(e) => updateParameters({ entryAmount: Number(e.target.value) })}
                className="trading-input"
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-4 h-4 text-purple-400" />
            <h3 className="font-medium text-purple-200">Çıkış Parametreleri</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Stop Loss (%)</label>
              <Input 
                type="number"
                value={stopLoss}
                onChange={(e) => updateParameters({ stopLoss: Number(e.target.value) })}
                className="trading-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Take Profit (%)</label>
              <Input 
                type="number"
                value={takeProfit}
                onChange={(e) => updateParameters({ takeProfit: Number(e.target.value) })}
                className="trading-input"
              />
            </div>
          </div>
        </div>
      </div>
    </ExpandableCard>
  )
}

