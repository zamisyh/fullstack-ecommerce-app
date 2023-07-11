const colors = require('colors')
const cors = require('cors')
const http = require('http')
const path = require('path')
const env = require('dotenv')
const joi = require('joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const multer = require('multer')
const express = require('express')
const morgan = require('morgan')

module.exports = {
    morgan, colors, cors, http, path, env, joi, bcrypt, jwt, bodyParser, multer, express
}