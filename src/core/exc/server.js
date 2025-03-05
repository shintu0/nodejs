import express from 'express';
const app = express()
const PORT = 3000

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/',(req,res)=>{
    
})

app.route('/*').get((req, res) => {
    res.send("Hello Dear, NOT FOUND!")

});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))