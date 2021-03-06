// This is just some sample data so you don't have to think of your own!
module.exports = {
  expenditure : {
    mortgage : {
        name: 'Mortgage Payment',
        amount: '320000',
        category: 'Bills',
        type: 'recurring',
        date: '2nd'
    },
    car : {
        name: 'Car Loan Repayment',
        amount: '43500',
        category: 'Loan',
        type: 'recurring',
        date: '5th'
    }
  },
  income: {
    salary : {
        name: 'Salary',
        amount: '700000',
        category: 'Income',
        type: 'recurring',
        date: '1st'
    },
    paperround : {
        name: 'Paper Round',
        amount: '6860',
        category: 'Income',
        type: 'recurring',
        date: '1st'
    }
  },
  transactions: {
    "2016" : {
        "january": {
            coffee: {
              name: 'coffee',
              amount: '280',
              date: '1st'
            },
            book: {
              name: 'book',
              amount: '499',
              date: '2nd'
            }
        }
    }
  }
}
