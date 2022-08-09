import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  Container,
  TransactionsTable,
  TransactionsTableContainer,
  Price,
} from './styles'

const Transactions = () => {
  return (
    <Container>
      <Header />
      <Summary />

      <TransactionsTableContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de sites</td>
              <td>
                R$
                <Price variant="income">12,000,00</Price>
              </td>
              <td>Venda</td>
              <td>20/08/202o</td>
            </tr>

            <tr>
              <td>Gasolina</td>
              <td>
                R$
                <Price variant="outcome"> - 800,00</Price>
              </td>
              <td>Transporte</td>
              <td>22/08/202o</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsTableContainer>
    </Container>
  )
}
export { Transactions }
