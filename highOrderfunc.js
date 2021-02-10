let log = console.log

let operationsArr = [ 
    {
        date: '2012-12-21T00:00:00Z', 
        amount: -30
    },
    {
        date: '2012-12-21T00:00:00Z', 
        amount: -15
    },
    {
        date: '2012-12-22T00:00:00Z', 
        amount: -30
    },
    {
        date: '2012-12-23T00:00:00Z', 
        amount: -30
    } 
]

let startDate = "2012-12-21";
let endDate = "2012-12-23";

function amountOfTransactionsInGivenDate(transactions, startDate, endDate ) {
    const start = new Date(startDate).toISOString()
    const end = new Date(endDate).toISOString()
    
    const result = transactions.filter(item => {
        return item.date >= start && item.date <= end 
    })

    return result.reduce((accumulator, current) =>{ 
        return accumulator + current.amount
    }, 0)
}

log(amountOfTransactionsInGivenDate(operationsArr, startDate, endDate))