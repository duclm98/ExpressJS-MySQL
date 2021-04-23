const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');

router.post('/', controller.dangKy);
router.get('/', controller.danhSach);
router.put('/:id', controller.sua);
router.delete('/:id', controller.xoa);

module.exports = router;