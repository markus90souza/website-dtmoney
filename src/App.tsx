import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions'
import { CssBoot } from './styles/boot'
import { defaultTheme } from './styles/themes/default'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBoot />
      <Transactions />
    </ThemeProvider>
  )
}
export { App }
