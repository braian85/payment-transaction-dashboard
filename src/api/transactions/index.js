function fetchTransactions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error('API request failed'))
      } else {
        resolve([
          {
            id: 1,
            date: '2021-07-26',
            description: 'Grocery Shopping',
            amount: 45.3,
          },
          {
            id: 2,
            date: '2021-07-27',
            description: 'Online Subscription',
            amount: 19.99,
          },
          {
            id: 3,
            date: '2021-07-28',
            description: 'Cafe Visit',
            amount: 12.5,
          },
          {
            id: 4,
            date: '2021-07-29',
            description: 'Gas Station',
            amount: 30.0,
          },
          {
            id: 5,
            date: '2021-07-30',
            description: 'Gym Membership',
            amount: 25.0,
          },
          {
            id: 6,
            date: '2021-08-01',
            description: 'Book Purchase',
            amount: 15.99,
          },
          {
            id: 7,
            date: '2021-08-02',
            description: 'Movie Tickets',
            amount: 28.5,
          },
          {
            id: 8,
            date: '2021-08-03',
            description: 'Electronics',
            amount: 199.99,
          },
          { id: 9, date: '2021-08-04', description: 'Pharmacy', amount: 8.75 },
          {
            id: 10,
            date: '2021-08-05',
            description: 'Restaurant',
            amount: 60.0,
          },
          {
            id: 11,
            date: '2021-08-06',
            description: 'Clothing Store',
            amount: 75.0,
          },
          {
            id: 12,
            date: '2021-08-07',
            description: 'Car Wash',
            amount: 12.99,
          },
          {
            id: 13,
            date: '2021-08-08',
            description: 'Movie Tickets',
            amount: 32.0,
          },
          {
            id: 14,
            date: '2021-08-09',
            description: 'Grocery Shopping',
            amount: 49.5,
          },
          {
            id: 15,
            date: '2021-08-10',
            description: 'Electronics',
            amount: 299.99,
          },
          {
            id: 16,
            date: '2021-08-11',
            description: 'Gas Station',
            amount: 35.0,
          },
          {
            id: 17,
            date: '2021-08-12',
            description: 'Online Subscription',
            amount: 19.99,
          },
          {
            id: 18,
            date: '2021-08-13',
            description: 'Coffee Shop',
            amount: 8.0,
          },
          {
            id: 19,
            date: '2021-08-14',
            description: 'Pharmacy',
            amount: 12.25,
          },
          {
            id: 20,
            date: '2021-08-15',
            description: 'Movie Tickets',
            amount: 27.5,
          },
          {
            id: 21,
            date: '2021-08-16',
            description: 'Grocery Shopping',
            amount: 42.0,
          },
          {
            id: 22,
            date: '2021-08-17',
            description: 'Restaurant',
            amount: 55.0,
          },
          {
            id: 23,
            date: '2021-08-18',
            description: 'Book Purchase',
            amount: 14.99,
          },
          {
            id: 24,
            date: '2021-08-19',
            description: 'Gas Station',
            amount: 28.0,
          },
          {
            id: 25,
            date: '2021-08-20',
            description: 'Cafe Visit',
            amount: 10.0,
          },
          {
            id: 26,
            date: '2021-08-21',
            description: 'Movie Tickets',
            amount: 30.5,
          },
          {
            id: 27,
            date: '2021-08-22',
            description: 'Grocery Shopping',
            amount: 47.25,
          },
          {
            id: 28,
            date: '2021-08-23',
            description: 'Online Subscription',
            amount: 19.99,
          },
          {
            id: 29,
            date: '2021-08-24',
            description: 'Pharmacy',
            amount: 9.5,
          },
          {
            id: 30,
            date: '2021-08-25',
            description: 'Gym Membership',
            amount: 25.0,
          },
        ])
      }
    }, 1000)
  })
}

export default fetchTransactions
