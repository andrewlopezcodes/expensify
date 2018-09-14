import moment from 'moment';



export default [{
  id: '1',
  description: 'Car',
  note: '',
  amount: 1500000,
  createdAt: 60000
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 200000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Jets Game',
  note: '',
  amount: 8900,
  createdAt: moment(0).add(4, 'days').valueOf()
}
]
