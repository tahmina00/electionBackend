const mongoose = require("mongoose");

const candidateBanglaSchema = new mongoose.Schema({
	electionid: {
		type:Number,
		required:true
	},
	constitutionid: {
		type:Number,
		required:true
	},
	candidateid: {
		type:Number,
		required:true
	},
	candidatenamebangla: {
		type:String,
		required:true
	 },
	 partysymbol: {
		type:String,
		required:true 
	 },  
	 totalvote: {
		type:Number,
		required:true
	},
	  date: {
        type:Date,
        default: Date.now	
	}		
	 });	

const CandidateBangla = new mongoose.model("candidatebangla", candidateBanglaSchema);

module.exports = CandidateBangla;	