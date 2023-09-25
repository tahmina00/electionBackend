
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const cookieParser = require("cookie-parser");

const authenticate = require("../middleware/authenticate");

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.use(cookieParser());


mongoose.set('strictQuery', false);
// database connection with mongoose
mongoose
.connect('mongodb://localhost/registrationlogin',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('auth router connection successful'))
.catch(err => console.log(`no connection`))


const Electionname = require("../model/electionNameSchema");

const ConstitutionBangla = require("../model/constitutionbanglaschema");
const ConstitutionEnglish = require("../model/constitutionenglishschema");


const CandidateBangla = require("../model/candidateBanglaSchema");
const CandidateEnglish = require("../model/candidateEnglishSchema");

router.get('/',(req,res) => {
	res.send('Hello world from the server router js');
});


//  add candidate bangla name

router.post('/candidatebangla', async(req,res) => {
	
		console.log(`candidatebangla`);
		console.log(req.body)
	try{
		const { electionid, constitutionid, candidateid, candidatenamebangla, partysymbol, date} = req.body;
		
		console.log(electionid + ' ' + constitutionid + ' ' + candidateid + ' ' + candidatenamebangla + ' ')
		
		if(!constitutionid || !candidatenamebangla){
			console.log("error");
			return res.json({ error: "please filled the candidate form"})
		}
		
		
		const candidatebangla = await CandidateBangla.findOne({candidatenamebangla: req.candidatenamebangla });
		
		console.log('candidatebangla')
		console.log(candidatebangla)
		
	const candidateNameExist = await CandidateBangla.findOne({ candidatenamebangla: candidatenamebangla });
	
	if(candidateNameExist){
			return res.status(422).json({ error: " candidateName Already Exist "});
		}
	
	console.log('candidateNameExist');

	const candidatebanglainsert = new CandidateBangla({ electionid, constitutionid, candidateid, candidatenamebangla, partysymbol, date });
	console.log('constitutionbanglainsert');
	console.log(constitutionbanglainsert);
	// save method
    await constitutionbanglainsert.save();
	}catch(error){
		console.log(error)
	}
});



//  add candidate english name

router.post('/candidateenglish', async(req,res) => {
	
		console.log(`candidateenglish`);
		console.log(req.body)
	try{
		const { electionid, constitutionid, candidateid, candidatenameenglish, partysymbol, date} = req.body;
		
		console.log(electionid + ' ' + constitutionid + ' ' + candidateid + ' ' + candidatenameenglish + ' ')
		
		if(!constitutionid || !candidatenameenglish){
			console.log("error");
			return res.json({ error: "please filled the candidate form"})
		}
		
		
		const candidateenglish = await CandidateEnglish.findOne({candidatenameenglish: req.candidatenameenglish });
		
		console.log('candidateenglish')
		console.log(candidateenglish)
		
	const candidateNameExist = await CandidateEnglish.findOne({ candidatenameenglish: candidatenameenglish });
	
	if(candidateNameExist){
			return res.status(422).json({ error: " candidateName Already Exist "});
		}
	
	console.log('candidateNameExist');

	const candidateenglishinsert = new CandidateEnglish({ electionid, constitutionid, candidateid, candidatenameenglish, partysymbol, date });
	console.log('candidateenglishinsert');
	console.log(candidateenglishinsert);
	// save method
    await candidateenglishinsert.save();
	}catch(error){
		console.log(error)
	}
});