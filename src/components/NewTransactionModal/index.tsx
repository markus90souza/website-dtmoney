import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { Controller, useForm } from 'react-hook-form'

const newTransationSchema = zod.object({
  description: zod.string(),
  category: zod.string(),
  price: zod.number(),
  type: zod.enum(['income', 'outcome']),
})

type newTransactionProps = zod.infer<typeof newTransationSchema>
const NewTransactionModal = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionProps>({
    resolver: zodResolver(newTransationSchema),
    defaultValues: {
      type: 'income',
    },
  })

  const handleCreateNewTransaction = async (data: newTransactionProps) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log(data)
  }
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder={'Descrição'}
            {...register('description')}
            required
          />
          <input
            type={'number'}
            placeholder={'Preço'}
            {...register('price', { valueAsNumber: true })}
            required
          />
          <input
            type="text"
            placeholder={'Categoria'}
            {...register('category')}
            required
          />

          <Controller
            control={control}
            name={'type'}
            render={({ field }) => {
              console.log(field)
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saida
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}

export { NewTransactionModal }
