import { ReactNode } from 'react'
import {
  TooltipTrigger,
  TooltipContainer,
  TooltipRoot,
  TooltipContent,
  TooltipArrow,
} from './styles'

export interface TooltipTooltipProps {
  children: ReactNode
  content: string
}

export function Tooltip({ children, content }: TooltipTooltipProps) {
  return (
    <span>
      <TooltipContainer delayDuration={100} skipDelayDuration={500}>
        <TooltipRoot>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipRoot>
      </TooltipContainer>
    </span>
  )
}

Tooltip.displayName = 'Tooltip'
