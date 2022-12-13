import { styled, keyframes } from '@stitches/react'
import * as Toast from '@radix-ui/react-toast'

const slideIn = keyframes({
  from: { transform: `translateX(100%)` },
  to: { transform: 'translateX(0)' },
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const ToastProvider = styled(Toast.Provider, {})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$8',
  maxWidth: 360,
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  display: 'flex',
  flexDirection: 'column',
  padding: '$3 $5',
  gap: 4,
  borderRadius: 6,

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  display: 'flex',
  justifyContent: 'space-between',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
})

export const ToastClose = styled(Toast.Close, {
  background: 'none',
  border: 'none',
  padding: 0,
  lineHeight: 0,

  svg: {
    color: '$gray200',
    cursor: 'pointer',
    marginLeft: '$2',
  },
})
