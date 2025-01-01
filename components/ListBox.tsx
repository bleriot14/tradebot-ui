'use client'

import { useState } from 'react'
import { useTrading } from '../contexts/TradingContext'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { List, Plus, X } from 'lucide-react'
import { ExpandableCard } from './ui/expandable-card'

export default function ListBox() {
  const { whitelist, blacklist, addToList, removeFromList } = useTrading()
  const [newSymbol, setNewSymbol] = useState('')
  const [listType, setListType] = useState<'white' | 'black'>('white')

  const handleAdd = () => {
    if (newSymbol) {
      addToList(listType, newSymbol.toUpperCase())
      setNewSymbol('')
    }
  }

  return (
    <ExpandableCard
      id="lists"
      title="Sembol Listeleri"
      icon={<List className="w-5 h-5 text-purple-400" />}
    >
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="font-medium text-purple-200">Whitelist</h3>
          <div className="space-y-2">
            {whitelist.map((symbol) => (
              <div key={symbol} className="signal-item flex justify-between items-center">
                <span className="text-gray-300">{symbol}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromList('white', symbol)}
                  className="hover:text-red-400"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-medium text-purple-200">Blacklist</h3>
          <div className="space-y-2">
            {blacklist.map((symbol) => (
              <div key={symbol} className="signal-item flex justify-between items-center">
                <span className="text-gray-300">{symbol}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromList('black', symbol)}
                  className="hover:text-red-400"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <Input
          placeholder="Sembol ekle..."
          value={newSymbol}
          onChange={(e) => setNewSymbol(e.target.value)}
          className="trading-input"
        />
        <Button 
          onClick={() => {
            setListType('white')
            handleAdd()
          }}
          className="trading-button"
        >
          <Plus className="w-4 h-4 mr-1" /> Whitelist
        </Button>
        <Button 
          onClick={() => {
            setListType('black')
            handleAdd()
          }}
          className="trading-button"
        >
          <Plus className="w-4 h-4 mr-1" /> Blacklist
        </Button>
      </div>
    </ExpandableCard>
  )
}

