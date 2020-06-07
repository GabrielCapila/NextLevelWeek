import express, { request, response, json } from 'express'

const app = express()

const users = ['claudin',
'zezin']

app.get('/users', (request, response) => {
    const search = request.query.search

    const filterdUsers = search ? users.filter(user => user.includes(search)) : users

    return response.json(users)
})

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id)

    const user = users[id]

    return response.json(user)
})

app.post('/users', (request, response)=>{
    const user = {
        name: 'Gabriel',
        email:'gabriel.capila20@gmail.com'
    }
    return response.json(user)
})

app.listen(3333)