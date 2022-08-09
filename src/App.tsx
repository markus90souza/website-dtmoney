import { ThemeProvider } from 'styled-components'
import { CssBoot } from './styles/boot'
import { defaultTheme } from './styles/themes/default'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBoot />
      <h1>hello</h1>
    </ThemeProvider>
  )
}
export { App }
