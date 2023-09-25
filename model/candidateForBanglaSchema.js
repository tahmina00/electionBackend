const mongoose = require("mongoose");

const candidateForBanglaSchema = new mongoose.Schema({
	electionid: {
		type:String,
		required:true
	},
	constitutionid: {
		type:String,
		required:true
	},
	candidateid: {
		type:String,
		required:true
	},
	candidatenamebangla : {
		type:String,
		required:true
	 },
	 partysymbol : {
		type:String,
		required:true 
	 },
	  date : {
        type:Date,
        default: Date.now	
	}		
	 });	

const CandidateForBangla = new mongoose.model("candidateforbangla", candidateForBanglaSchema);

module.exports = CandidateForBangla;	