const {env, cors, http, express, path, morgan } = require('./libs/module')
const app = express()

env.config({ path: './databases/config/config.env' })

app.use(express.json({
    limit: '30mb',
    extended: true
}))
app.use(express.static(path.join(__dirname)))
app.use(cors({origin: '*'}))
app.use(morgan('dev'))

app.all('*', (req, res) => {
    res.send({
        status: 404,
        message: "The router or endpoint you entered was not found"
    })
})

const server = http.createServer(app)

server.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode, on port ${process.env.PORT}`.yellow.bold)
})