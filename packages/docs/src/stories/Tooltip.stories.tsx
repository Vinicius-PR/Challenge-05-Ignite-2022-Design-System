import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TooltipTooltipProps, Tooltip } from '@ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
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
            This tooltip receive 2 props. A React Node (children) and the
            content to display.
          </Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipTooltipProps>

export const Primary: StoryObj<TooltipTooltipProps> = {
  args: {
    children: <>24</>,
    content: '24 de Outubro - disponível',
  },
}
