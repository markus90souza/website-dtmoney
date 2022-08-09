import { HeaderContainer, HeaderWrapper, NewTransactionsButtom } from './styles'

import brand from './../../assets/logo.svg'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={brand} alt={''} />
        <NewTransactionsButtom>Nova Transação</NewTransactionsButtom>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export { Header }
