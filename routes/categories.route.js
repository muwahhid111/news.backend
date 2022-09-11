const { Router} = require('express');
const { categoriesController } = require('../controllers/categories.controllers');

const router = Router() ;
router.post('/categories', categoriesController.addCategories);
router.get('/categories/:id', categoriesController.getCategories);
router.delete('/categories/:id', categoriesController.dropCategories);

module.exports = router;