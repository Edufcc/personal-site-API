const express = require('express');

const informacoesController = require('../controllers/informacoesController');

const router = express.Router();


router.get('/1', informacoesController.getInformacoes);
router.post('/1', informacoesController.createInformacoes);
router.put('/', informacoesController.updateInformacoes);
router.delete('/1', informacoesController.deleteInformacoes);

module.exports = router