import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderWrapper, NewTransactionsButtom } from './styles'

import brand from './../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={brand} alt={''} />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButtom>Nova Transação</NewTransactionsButtom>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export { Header }
