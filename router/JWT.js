const { sign, verify } = require("jsonwebtoken");

const createTokens = (userLogin) => {
	console.log('userLogin')
	console.log(userLogin)
	console.log('userLogin')
	const accessToken = sign(
	{ email: userLogin.email, id: userLogin.id }, 
	"jwtsecretplschange")
	
	return accessToken;
}

const validateToken =async(req, res, next) => {
	const accessToken = req.cookies["access-token"];
	
	if(!accessToken)
		return res.status(400).json({ error: "User not Authenticated!"})
	
	try{
		const validToken = verify(accessToken,"jwtsecretplschange")
		console.log("------------------------")
		console.log(validToken)
		console.log("------------------------")
		if(validToken){
			req.authenticated = true;
			const rootUser = await User.findOne({_id: verifyToken._id, "tokens:token": token });
			if(!rootUser) { throw new Error('User Not Found')}
			
			req.token = token;
			req.rootUser = rootUser;
			req.userID = rootUser._id;
			
			return next();
		}
	}catch(err){
		return res.status(400).json({ error: err})
	}
}
module.exports = { createTokens }