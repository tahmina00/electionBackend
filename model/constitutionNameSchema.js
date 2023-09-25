const mongoose = require("mongoose");

const constitutionNameSchema = new mongoose.Schema({
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
	 }
	 });	

const Constitutionname = new mongoose.model("constitutionname", constitutionNameSchema);

module.exports = Constitutionname;	 