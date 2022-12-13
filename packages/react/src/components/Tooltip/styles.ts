import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipContent = styled(Tooltip.Content, {
  color: '$gray100',
  fontSize: '$sm',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  width: '$4',
  height: '$2',
  fill: '$gray900',
})
