let express = require('express');
let router = express.Router();
let db = require('../models');
bodyParser = require('body-parser');
let helpers = require('../helpers/todos')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.route('/')
	.get(helpers.getTodos)
	.post(helpers.createTodo)

router.route('/:todoId')
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo)

module.exports = router;