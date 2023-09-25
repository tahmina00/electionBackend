router.post('/signin', async(req,res) => {
	console.log(req.body);	
	try{
		let token;
		const { email, password } = req.body;
		console.log(email)
		if(!email || !password){
			return res.status(400).json({ error: "please filled the data"})
		}
		const userLogin = await User.findOne({ email: email });
		
		if(userLogin){
			const isMatch = await bcrypt.compare(password, userLogin.password);
			
			 if(!isMatch){
			    res.status(400).json({ error: "invalid credentials password "});
		       } else {
			   token = await userLogin.generateAuthToken();
			   console.log(token)
			   res.cookie("jwtoken", token, {
			       expires: new Date(Date.now() + 25892000000),
			       httpOnly:true
		        });
				res.json({message:"user signin successfully"})
		       } 
		     } else {
				 res.status(400).json({ error: "invalid credientials "});
			 }
		
	}catch(err){
		console.log(err)
	}
		
});