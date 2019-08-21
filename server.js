 // Import needed packages

const express = require('express')
const app = express()

 // Import routers from controllers

const { categoryRouter } = require('./controllers/category.js')
const { postRouter } = require('./controllers/post.js')
const { commentRouter } = require('./controllers/comment.js')


 // Register middleware to parse the body of the HTTP requests from a URL encoded string 
 
app.use(express.urlencoded({extended: true}))

// ...to parse the body of the HTTP requests from a JSON string  
 
app.use(express.json())

/* 
 * Use the `./client/build` directory to host static resources such as css and
 * image files 
 */
app.use(express.static(`${__dirname}/client/build`))

/*
 * Add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */
app.use('/api/category', categoryRouter)
app.use('/api/post', postRouter)
app.use('/api/comment', commentRouter)

/* 
 * Add catch all route to serve up the built react app for any request not made to our
 * /api/... routes.
 */
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
