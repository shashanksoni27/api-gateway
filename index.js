const gateway = require('fast-gateway')
require('dotenv').config();


const server = gateway({
  routes: [{
    prefix: '/login',
    target: 'http://localhost:8080/userLoginSignUp/'
  },
  {
	prefix : '/user',
	target : 'http://localhost:8080/userApi',
	middlewares: [
      require('express-jwt')({
        secret: 'ASSH7912EEKNQWQWOD0IH11RKOK544SWDI22U49@#y!('
      })
    ]
  },
  {
	prefix : '/project',
	target : 'http://localhost:8080/projectApi',
	middlewares: [
      require('express-jwt')({
        secret: 'ASSH7912EEKNQWQWOD0IH11RKOK544SWDI22U49@#y!('
      })
    ]
  },
  {
	prefix : '/phase',
	target : 'http://localhost:8080/phaseApi',
	middlewares: [
      require('express-jwt')({
        secret: 'ASSH7912EEKNQWQWOD0IH11RKOK544SWDI22U49@#y!('
      })
    ]
  },
  {
	prefix : '/company',
	target : 'http://localhost:8081/company',
	middlewares: [
      require('express-jwt')({
        secret: 'ASSH7912EEKNQWQWOD0IH11RKOK544SWDI22U49@#y!('
      })
    ]
  },
  {
	prefix : '/investment',
	target : 'http://localhost:8081/investment',
	middlewares: [
      require('express-jwt')({
        secret: 'ASSH7912EEKNQWQWOD0IH11RKOK544SWDI22U49@#y!('
      })
    ]
  },
  {
	prefix : '/notification',
	target : 'http://localhost:8082/notification',
	middlewares: [
      require('express-jwt')({
        secret: 'ASSH7912EEKNQWQWOD0IH11RKOK544SWDI22U49@#y!('
      })
    ]
  },
  {
	prefix : '/job',
	target : 'http://localhost:8082/job',
	middlewares: [
      require('express-jwt')({
        secret: 'ASSH7912EEKNQWQWOD0IH11RKOK544SWDI22U49@#y!('
      })
    ]
  },
  {
	prefix : '/clientVendorApi',
	target : 'http://localhost:8083/clientVendorApi',
	middlewares: [
      require('express-jwt')({
        secret: 'ASSH7912EEKNQWQWOD0IH11RKOK544SWDI22U49@#y!('
      })
    ]
  },
  {
	prefix : '/expenseApi',
	target : 'http://localhost:8083/expenseApi',
	middlewares: [
      require('express-jwt')({
        secret: 'ASSH7912EEKNQWQWOD0IH11RKOK544SWDI22U49@#y!('
      })
    ]
  },
  {
	prefix : '/saleApi',
	target : 'http://localhost:8083/saleApi',
	middlewares: [
      require('express-jwt')({
        secret: 'ASSH7912EEKNQWQWOD0IH11RKOK544SWDI22U49@#y!('
      })
    ]
  },
  {
	prefix : '/invoiceApi',
	target : 'http://localhost:8083/invoiceApi',
	middlewares: [
      require('express-jwt')({
        secret: 'ASSH7912EEKNQWQWOD0IH11RKOK544SWDI22U49@#y!('
      })
    ]
  }]
})
 
server.start(8000).then(server => {
  console.log(`API Gateway listening on 8000 port!`)
});
