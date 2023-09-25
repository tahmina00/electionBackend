const dotenv = require("dotenv");
const session = require('express-session');
const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");

dotenv.config({ path: '../config.env' });



const Authenticate = async(req, res, next) => {
	console.log('.....................req start middleware......................');
	//console.log(req)
	console.log('.....................req end middleware......................');
	console.log('middleware authenticate')
   
	
		  
		  
	console.log(req.cookies)
	console.log(req.cookies.newjwtoken)
	console.log('..............................................');
	
		
	
	if(req.cookies.newjwtoken){
	try{
		const token = req.cookies.newjwtoken;
		
		//const user = new User(); // Replace this with the user instance you want to generate the token for
        //const token = await user.generateAuthToken();
		
	
		
		const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
		console.log('*********************verifyToken jwt start********************************77');
		
		console.log(verifyToken);
		console.log(jwt)
		console.log('**************************************************************');
		//console.log(token);
		console.log('***********************jwt end******************************88');
				//const verifyToken = jwt.verify(token, 'ASDEFCVXZBNVGHNB');
		const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token });
		console.log('rootUser');
		console.log(rootUser);
		console.log('**************************************************************');
		if(!rootUser) { throw new Error('User Not Found')}
		
		//const tokenGenerated = await rootUser.generateAuthToken();
        //console.log(tokenGenerated);
		
		req.token = token;
		req.rootUser = rootUser;
		req.userID = rootUser._id;
		
		next();
		
	} catch(err)
	{
		res.status(401).send('Unauthorized: no token provided');
		console.log(err);
	}
	}
	 
	 }

module.exports = Authenticate;