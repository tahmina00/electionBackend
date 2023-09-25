const mongoose = require("mongoose");

const candidateEnglishSchema = new mongoose.Schema({
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
	candidatenameenglish: {
		type:String,
		required:true
	 },
	 partysymbol: {
		type:String,
		required:true 
	 },
	 totalvote: {
		type:String,
		required:true
	},
	 date: {
        type:Date,
        default: Date.now	
	}		
	 });	

const CandidateEnglish = new mongoose.model("candidateenglish", candidateEnglishSchema);

module.exports = CandidateEnglish;	