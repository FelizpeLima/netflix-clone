class IndexController {
  create (req, res) {
    return res.render('./index')
  }
}

module.exports = new IndexController()
