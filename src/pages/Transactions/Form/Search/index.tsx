import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Container } from './styles'

const searchSchema = zod.object({
  query: zod.string(),
})

type searchFormProps = zod.infer<typeof searchSchema>

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormProps>({
    resolver: zodResolver(searchSchema),
  })

  const handleSearchTransactions = async (data: searchFormProps) => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log(data)
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
