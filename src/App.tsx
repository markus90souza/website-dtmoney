import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { CssBoot } from './styles/boot'
import { defaultTheme } from './styles/themes/default'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBoot />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
export { App }
