import express from 'express'
import cors from 'cors'
import "dotenv/config";
import { globalErrHandler, notFoundErrHandler } from './middleware/errHandler';
import { visaRouter } from './module/visa/visa.route';


const app = express()

// Parser
app.use(cors())
app.use(express.json())


// Router
app.use('/api/v1/visa', visaRouter)


// Err handler
app.use(notFoundErrHandler)
app.use(globalErrHandler)

export default app

