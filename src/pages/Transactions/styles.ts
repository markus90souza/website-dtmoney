import styled from 'styled-components'

export const Container = styled.div``

export const TransactionsTableContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 1.25rem 2rem;

    &:first-child {
      width: 50%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

type PriceProps = {
  variant: 'income' | 'outcome'
}

export const Price = styled.span<PriceProps>`
  margin-left: 0.5rem;
  color: ${({ theme, variant }) =>
    variant === 'income' ? theme['green-300'] : theme['red-300']};
`
