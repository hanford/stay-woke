const { send } = require('micro')
const cors = require('micro-cors')()
const request = require('xhr-request')
const parallel = require('run-parallel')

function fetchSiteList (req, res) {
  return parallel([
    cb => request('https://jackhanford.com', cb),
    cb => request('https://jackhanford.com/writing', cb),
    cb => request('https://jackhanford.com/projects', cb)
  ], (err, data) => send(res, 200, `I'm awake!`))
}

module.exports = cors(fetchSiteList)
