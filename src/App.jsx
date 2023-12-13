import { useState, useEffect } from 'react'
import fetchTransactions from './api/transactions'
import './App.css'

const App = () => {
  const [transactions, setTransactions] = useState([])
  const [filteredTransactions, setFilteredTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [transactionsPerPage] = useState(10)
  const [sortBy, setSortBy] = useState('date')
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    async function handleFetchTransactions() {
      try {
        const fetchedTransactions = await fetchTransactions()
        setTransactions(fetchedTransactions)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    handleFetchTransactions()
  }, [])

  useEffect(() => {
    if (startDate && endDate) {
      const startDateObj = new Date(startDate)
      const endDateObj = new Date(endDate)
      const result = transactions.filter(transaction => {
        const transactionDate = new Date(transaction.date)
        return transactionDate >= startDateObj && transactionDate <= endDateObj
      })
      setFilteredTransactions(result)
    } else {
      setFilteredTransactions(transactions)
    }
  }, [startDate, endDate, transactions])

  const handleSort = criteria => {
    if (criteria === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(criteria)
      setSortOrder('asc')
    }
  }

  const indexOfLastTransaction = currentPage * transactionsPerPage
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  )

  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  )

  const sortedTransactions = currentTransactions.slice().sort((a, b) => {
    if (sortBy === 'date') {
      return (
        (sortOrder === 'asc' ? 1 : -1) * (new Date(a.date) - new Date(b.date))
      )
    } else if (sortBy === 'amount') {
      return (sortOrder === 'asc' ? 1 : -1) * (a.amount - b.amount)
    }
  })

  const totalTransactionCount = filteredTransactions.length
  const totalTransactionAmount = filteredTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div>
        Error: {error}. Please retry loading the page. There&apos;s a 50% chance
        of success on the next attempt.
      </div>
    )
  }

  return (
    <div className='container'>
      <h2>Payment Transactions</h2>

      <div>
        <label>
          Start Date:
          <input
            type='date'
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type='date'
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th onClick={() => handleSort('date')}>Date</th>
            <th>Description</th>
            <th onClick={() => handleSort('amount')}>Amount (USD)</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>${transaction.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='pagination'>
        <button
          onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <div className='summary'>
        <p>Total Transactions: {totalTransactionCount}</p>
        <p>Total Transaction Amount: ${totalTransactionAmount.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default App
