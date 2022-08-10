import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import { Overlay, Content, CloseButton } from './styles'

const NewTransactionModal = () => {
  return (
    <Dialog.DialogPortal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder={'Descrição'} />
          <input type="text" placeholder={'Preço'} />
          <input type="text" placeholder={'Categoria'} />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.DialogPortal>
  )
}

export { NewTransactionModal }
