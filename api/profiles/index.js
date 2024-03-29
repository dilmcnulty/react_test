const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async(req,res) => {
    let page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 9
    if (page < 1) page = 1
    const profiles = await db.query(escape `
    SELECT *
    FROM User
    ORDER BY userID
    `)
    const count = await db.query(escape `
        SELECT COUNT(*)
        AS profilesCount
        FROM profiles
    `)
    const { profilesCount } = count
    const pageCount = Math.ceil(profilesCount / limit)
    res.status(200).json({profiles})
}
