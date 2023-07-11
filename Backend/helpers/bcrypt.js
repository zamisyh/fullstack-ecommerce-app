const { bcrypt } = require('../libs/module')

exports.hashPassword = async (password = new String(), salt) => {
    const result = await bcrypt.hash(password, salt)
    return result
}

exports.comparePassword = async (password, hashPassword) => {
    const result = await bcrypt.compare(password, hashPassword)
    return result
}