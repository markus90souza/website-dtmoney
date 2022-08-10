import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dataFormatter, priceFormatter } from '../../utils/Formatter'
import { Search } from './Form/Search'
import {
  Container,
  TransactionsTable,
  TransactionsTableContainer,
  Price,
} from './styles'

const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)
  return (
    <Container>
      <Header />
      <Summary />

      <TransactionsTableContainer>
        <Search />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <Price variant={transaction.type}>
                    {transaction.type === 'outcome' && ' - '}
                    {priceFormatter.format(transaction.price)}
                  </Price>
                </td>
                <td>{transaction.category}</td>
                <td>{dataFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsTableContainer>
    </Container>
  )
}
export { Transactions }
