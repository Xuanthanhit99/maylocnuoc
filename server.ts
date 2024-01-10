// const express = require('express');
import express from 'express'
import next from 'next'
import { routes } from './backend/route'
// const next = require('next');
import bodyParser from 'body-parser';
import { connectDB } from './backend/config/db';

const PORT = parseInt(process.env.PORT || '', 10) || 3000
const dev = process.env.NODE_ENV !== 'production' 
const app = next({dev});
const handle = app.getRequestHandler()
const server = express()

server.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
server.use(routes);

//connect db 
connectDB()

app.prepare().then(() => {

    server.get('/', (req: any,res: any) => {
        return app.render(req,res,'/',req.query)
    })

    server.all('*', (req: any,res: any) => {
        return handle(req,res)
    })

    server.listen(PORT, (err?: any) => {
        if (err) throw err
        console.log(`> Ready on http:localhost:${PORT}`)
    })
})
