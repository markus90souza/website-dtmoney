import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Container } from './styles'

import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const searchSchema = zod.object({
  query: zod.string(),
})

type searchFormProps = zod.infer<typeof searchSchema>

const Search = () => {
  const getAllTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.getAllTransactions
    },
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormProps>({
    resolver: zodResolver(searchSchema),
  })

  const handleSearchTransactions = async (data: searchFormProps) => {
    await getAllTransactions(data.query)
  }
  return (
    <Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder={'Busque por transações'}
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  )
}

export { Search }
