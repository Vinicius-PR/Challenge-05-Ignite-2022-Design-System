import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, ToastProps, ToastComponent } from '@ignite-ui/react'

export default {
  title: 'Form/Toast',
  component: ToastComponent,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          <Text size="xs">
            This toast uses Radix UI. To use it, have to use state of React.
            This example uses a button to open the toast.
          </Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    content: 'Quarta-feira, 23 de Outubro às 16h',
  },
}
