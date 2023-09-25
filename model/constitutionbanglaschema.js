const mongoose = require("mongoose");

const constitutionBanglaSchema = new mongoose.Schema({
	electionid: {
		type:Number,
		required:true
	},
	constitutionid: {
		type:Number,
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
		type:Number,
		required:true
	 },
	obtainedcenter : {
		type:Number,
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

const ConstitutionBangla = new mongoose.model("constitutionbangla", constitutionBanglaSchema);

module.exports = ConstitutionBangla;	 