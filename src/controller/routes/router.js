const expres = require('express');
const router = expres.Router();
const whatsappController = require('../whatsappController');

router
.get('/', whatsappController.verifyToken)
.post('/', whatsappController.receiveMassage)


module.exports = router;
