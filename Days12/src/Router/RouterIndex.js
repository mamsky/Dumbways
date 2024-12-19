const express = require('express')
const router = express.Router()

const controllerPage = require('../controller/controllerPages')

router.get('/', controllerPage.renderHome)

router.get('/blog', controllerPage.renderBlog)
router.post('/blog', controllerPage.addBlog)

router.get('/MyProject', controllerPage.renderMyproject)
router.get('/project-detail', controllerPage.renderDetailProject)
router.get('/contact', controllerPage.contact)
router.get('/testimonial', controllerPage.testimonial)
router.get('*', controllerPage.notfound)

module.exports = router