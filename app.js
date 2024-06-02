const cors = require("cors")
const express = require("express")
const app = new express()
const helmet = require("helmet")
const { rateLimit } = require('express-rate-limit')
const jsonwebtoken = require("jsonwebtoken")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer")
const nodemon = require("nodemon")
const hpp = require("hpp")
const cookieparser = require("cookie-parser")
const router = require("./src/route/api")

app.use(cors())
app.use(hpp())
app.use(cookieparser())
app.use(helmet())
app.use(cors())

// limiting payload(request size)
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit: "50mb"}))

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(limiter)

// Database connection 

mongoose.connect("mongodb://localhost:27017/C").then((res) => {
        console.log("DB Connect Success")
}).catch((err) => {
      console.log(err)
})

app.set("etag", false)

app.use("/api", router)





app.use(express())


module.exports=app;