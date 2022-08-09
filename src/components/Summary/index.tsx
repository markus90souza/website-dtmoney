import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { SummaryContainer, SummaryCard } from './styles'

const Summary = () => {
  const theme = useTheme()
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color={theme['green-500']} />
        </header>

        <strong>R$ 17,000,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saida</span>
          <ArrowCircleDown size={32} color={theme['red-500']} />
        </header>

        <strong>R$ 17,000,00</strong>
      </SummaryCard>

      <SummaryCard variant={'green'}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>

        <strong>R$ 17,000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}

export { Summary }
