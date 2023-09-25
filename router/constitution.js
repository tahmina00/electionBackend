//  add constitution bangla name

router.post('/constitutionbangla', async(req,res) => {
	
		console.log(`addconstitutionbangla`);
		console.log(req.body)
	try{
		const { constitutionid, banglaconstitutionname, totalcenter, obtainedcenter, sortorder, date } = req.body;
		
		console.log(constitutionid + ' ' + banglaconstitutionname + ' ')
		
		if(!constitutionid || !banglaconstitutionname){
			console.log("error");
			return res.json({ error: "please filled the constitution name"})
		}
		
		
		const constitutionname = await ConstitutionBangla.findOne({banglaconstitutionname: req.banglaconstitutionname });
		
		console.log('constitutionname')
		console.log(constitutionname)
		
	const constitutionNameExist = await ConstitutionBangla.findOne({ banglaconstitutionname: banglaconstitutionname });
	
	if(constitutionNameExist){
			return res.status(422).json({ error: " constitutionNameExist Already Exist "});
		}
	
	console.log('constitutionNameExist');

	const constitutionbanglainsert = new ConstitutionBangla({ constitutionid, banglaconstitutionname, totalcenter, obtainedcenter, sortorder, date });
	console.log('constitutionbanglainsert');
	console.log(constitutionbanglainsert);
	// save method
    await constitutionbanglainsert.save();
	}catch(error){
		console.log(error)
	}
});

//  add constitution english name

router.post('/constitutionenglish', async(req,res) => {
	
		console.log(`addconstitutionenglish`);
		console.log(req.body)
	try{
		const { constitutionid, englishconstitutionname, totalcenter, obtainedcenter, sortorder, date } = req.body;
		
		console.log(constitutionid + ' ' + englishconstitutionname + ' ')
		
		if(!constitutionid || !englishconstitutionname){
			console.log("error");
			return res.json({ error: "please filled the constitution name"})
		}
		
		
		const constitutionname = await ConstitutionEnglish.findOne({englishconstitutionname: req.englishconstitutionname });
		
		console.log('constitutionname')
		console.log(constitutionname)
		
	const constitutionNameExist = await ConstitutionEnglish.findOne({ englishconstitutionname: englishconstitutionname });
	
	if(constitutionNameExist){
			return res.status(422).json({ error: " constitutionNameExist Already Exist "});
		}
	
	console.log('constitutionNameExist');

	const constitutionenglishinsert = new ConstitutionEnglish({ constitutionid, englishconstitutionname, totalcenter, obtainedcenter, sortorder, date });
	console.log('constitutionenglishinsert');
	console.log(constitutionenglishinsert);
	// save method
    await constitutionenglishinsert.save();
	}catch(error){
		console.log(error)
	}
});
