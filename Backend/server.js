const { env, cors, http, express, path, morgan } = require('./libs/module')
const models = require('./databases/models')
// const { roles, users } = require('./databases/models')
 
const app = express()

env.config({ path: './databases/config/config.env' })

app.use(
    express.json({
        limit: '30mb',
        extended: true
    })
)
app.use(express.static(path.join(__dirname)))
app.use(cors({ origin: '*' }))
app.use(morgan('dev'))

app.all('*', (req, res) => {
    res.send({
        status: 404,
        message: 'The router or endpoint you entered was not found'
    })
})

const server = http.createServer(app)

models.sequelize.sync().then(() => {
    models.sequelize
        .authenticate()
        .then(() => {
            console.log(`Database Connection has been established successfully.`.green.bold)
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err)
        })
    server.listen(process.env.PORT, () => {
        console.log(
            `Server running in ${process.env.NODE_ENV} mode, on port ${process.env.PORT}`
                .yellow.bold
        )
    })
})
