import { createContext, ReactNode, useEffect, useState } from 'react'

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
}

const TransactionsContext = createContext({} as TransactionsContextType)

type TransactionsProviderProps = {
  children: ReactNode
}

const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionsData[]>([])

  useEffect(() => {
    const loadTransactions = async () => {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()
      setTransactions(data)
    }

    loadTransactions()
  }, [])
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export { TransactionsContext, TransactionsProvider }
