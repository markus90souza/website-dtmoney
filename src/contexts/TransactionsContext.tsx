import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../services/api'

type TransactionsData = {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

type TransactionsDTO = {
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
}

type TransactionsContextType = {
  transactions: TransactionsData[]
  getAllTransactions: (query?: string) => Promise<void>
  createTransactions: (data: TransactionsDTO) => Promise<void>
}

const TransactionsContext = createContext({} as TransactionsContextType)

type TransactionsProviderProps = {
  children: ReactNode
}

const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionsData[]>([])

  const getAllTransactions = useCallback(async (query?: string) => {
    const { data } = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'Desc',
        q: query,
      },
    })

    setTransactions(data)
  }, [])

  const createTransactions = useCallback(async (data: TransactionsDTO) => {
    const { description, price, category, type } = data

    const response = await api.post('/transactions', {
      description,
      type,
      category,
      price,
      createdAt: new Date(),
    })

    setTransactions((oldState) => [response.data, ...oldState])
  }, [])

  useEffect(() => {
    getAllTransactions()
  }, [getAllTransactions])
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        getAllTransactions,
        createTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export { TransactionsContext, TransactionsProvider }
