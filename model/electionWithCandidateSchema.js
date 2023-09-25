const mongoose = require("mongoose");

const electionWithCandidateSchema = new mongoose.Schema({
	electionid: {
		type:String,
		required:true
	},
	banglaelectionname : {
		type:String,
		required:true
	 },
	englishelectionname : {
		type:String,
		required:true
	 },
	constitutionid: {
		type:String,
		required:true
	},
	banglaconstitutionname : {
		type:String,
		required:true
	 },
	 englishconstitutionname : {
		type:String,
		required:true
	 },
	 totalcenter : {
		type:String,
		required:true
	 },
	 obtainedcenter : {
		type:String,
		required:true 
	 },
	candidateid: {
		type:String,
		required:true
	},
	candidatenamebangla: {
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

const CandidateBangla = new mongoose.model("candidatebangla", candidateBanglaSchema);

module.exports = CandidateBangla;	