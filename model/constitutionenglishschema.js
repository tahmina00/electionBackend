const mongoose = require("mongoose");

const constitutionEnglishSchema = new mongoose.Schema({
	electionid: {
		type:String,
		required:true
	},
	constitutionid: {
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
	 sortingorder :{
	    type:String,
		required:true 
	 },
	 date : {
        type:Date,
        default: Date.now	
	   }	
	 });	

const ConstitutionEnglish = new mongoose.model("constitutionenglish", constitutionEnglishSchema);

module.exports = ConstitutionEnglish;	 