const Router=require('express')
const router=new Router
const productRoutes=require('./productRoutes')
const stockRoutes=require('./stock.Routes')

router.use('/products', productRoutes)
router.use('/stocks', stockRoutes)