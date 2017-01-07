var passport = require('passport')

//FUNCTION//
const = createSession = () => {

}

const = authenticate = () => {

}

const = destroySession = () => {
	
}

//ROUTES//
router.route('/')
	.post(createSession)
	.get(authenticate)
	.delete(destroySession)

module.exports = router;