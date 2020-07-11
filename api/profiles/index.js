const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async(req,res) => {
    let page = parseInt(req.query.page) || 1
    const limi = parseInt(req.query.limit) || 9
    if (page < 1) page = 1
    const profiles = await db.query(escape `
    SELECT *
    FROM User
    ORDER BY userID
    LIMIT ${(page - 1 ) * limit}, ${limit}
    `)
    res.status(200).json({profiles})
}
