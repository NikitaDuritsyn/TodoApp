require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser') //добавил  cookie-parser в проект

const userRouter = require('./routes/user.routes.js')
const authRouter = require('./routes/auth.routes.js')
const taskRouter = require('./routes/task.routes.js')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/api', taskRouter)
app.use('/api', userRouter)
app.use('/api', authRouter)

const start = async () => {
    try{
        app.listen(PORT, () => console.log(`server started on port http://localhost:${PORT}`))
    }catch(e){
        console.log(e);
    }
}
start()