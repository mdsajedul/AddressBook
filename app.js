const express = require('express')
const morgan = require('morgan')

const app=express()



app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('*',(req,res)=>{
    res.send('<h1>404 Error,use the correct url</h1>')
})

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

