const mongoose = require("mongoose");

const electionNameSchema = new mongoose.Schema({
	banglaelectionname : {
		type:String,
		required:true
	 },
	englishelectionname : {
		type:String,
		required:true
	 },
	 statusfordisplay : {
		type:String,
		required:true
	 }
	 });
	

	 
const eckhulnaNameSchema = new mongoose.Schema({
	pollstitle : {
		type:String,
		required:true
	 },
	politicalparty : {
		type:String,
		required:true
	 },
	 candidatename : {
		type:String,
		required:true
	 },
	numberofseats : {
		type:String,
		required:true
	 },
	 numberofvotes : {
		type:String,
		required:true
	 },
	receivedcenterresults : {
		type:String,
		required:true
	 }
	 });
	 
const Electionname = new mongoose.model("ELECTION", electionNameSchema);

const ElectionKhulnaName = new mongoose.model("CITYELECTION", eckhulnaNameSchema);

// module.exports = Electionname;

module.exports = {
  Electionname,
  ElectionKhulnaName
};