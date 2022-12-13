import { useState } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './style'

import { X } from 'phosphor-react'

export interface ToastProps {
  content: string
  title: string
}

export function ToastComponent({ content, title }: ToastProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <ToastProvider>
      <button onClick={() => setOpen(true)}>Click me to open Toast</button>
      <ToastRoot duration={4000} open={open} onOpenChange={setOpen}>
        <ToastTitle>
          {title}
          <ToastClose>
            <X size={20} />
          </ToastClose>
        </ToastTitle>
        <ToastDescription>{content}</ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}

ToastComponent.displayName = 'Toast'
