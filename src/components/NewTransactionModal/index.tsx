import * as Dialog from '@radix-ui/react-dialog'
import { useContextSelector } from 'use-context-selector'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from './styles'

import { TransactionsContext } from '../../contexts/TransactionsContext'

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
    reset,
    formState: { isSubmitting },
  } = useForm<newTransactionProps>({
    resolver: zodResolver(newTransationSchema),
    defaultValues: {
      type: 'income',
    },
  })

  const createTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransactions
    },
  )

  const handleCreateNewTransaction = async (data: newTransactionProps) => {
    const { description, price, category, type } = data

    await createTransactions({
      description,
      category,
      price,
      type,
    })

    reset()
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
