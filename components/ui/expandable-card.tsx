'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Maximize2, Minimize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTrading } from '../../contexts/TradingContext'
import { cn } from '@/lib/utils'

interface ExpandableCardProps {
  id: string
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function ExpandableCard({ id, title, icon, children, className }: ExpandableCardProps) {
  const { expandedBox, setExpandedBox } = useTrading()
  const isExpanded = expandedBox === id

  return (
    <Card 
      className={cn(
        "trading-card transition-all duration-300",
        isExpanded && "fixed inset-4 z-50",
        !isExpanded && className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpandedBox(isExpanded ? null : id)}
          className="hover:bg-purple-500/20"
          aria-label={isExpanded ? "Küçült" : "Genişlet"}
        >
          {isExpanded ? (
            <Minimize2 className="h-4 w-4 text-purple-400" />
          ) : (
            <Maximize2 className="h-4 w-4 text-purple-400" />
          )}
        </Button>
      </CardHeader>
      <CardContent className={cn(
        "overflow-auto",
        isExpanded ? "max-h-[calc(100vh-8rem)]" : "max-h-[400px]"
      )}>
        {children}
      </CardContent>
    </Card>
  )
}

