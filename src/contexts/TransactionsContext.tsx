import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

type TransactionsData = {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

type TransactionsContextType = {
  transactions: TransactionsData[]
  getAllTransactions: (query?: string) => Promise<void>
}

const TransactionsContext = createContext({} as TransactionsContextType)

type TransactionsProviderProps = {
  children: ReactNode
}

const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionsData[]>([])

  const getAllTransactions = async (query?: string) => {
    const { data } = await api.get('/transactions', {
      params: {
        q: query,
      },
    })

    setTransactions(data)
  }

  useEffect(() => {
    getAllTransactions()
  }, [])
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        getAllTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export { TransactionsContext, TransactionsProvider }
