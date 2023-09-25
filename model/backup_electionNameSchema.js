const mongoose = require("mongoose");
//const { MongoClient } = require('mongodb');

const electionNameSchema = new mongoose.Schema({
	electionid: {
		type: Number,
        unique: true
	},
	banglaelectionname : {
		type:String,
		required:true
	 },
	englishelectionname : {
		type:String,
		required:true
	 },
	templatetype : {
		type:String,
		required:true
	 },
	 statusfordisplay : {
		type: Number,
        default: 1
	 },
  createdAt: {
    type: Date,
    default: Date.now
  }
	 });
	 

// Define a pre-save hook
// electionNameSchema.pre('save', async function (next) {
  // if (this.isNew) {
    // const lastRecord = await this.constructor.findOne({}, { electionid: 1 }).sort({ electionid: -1 });
	// console.log('lastRecord');console.log(lastRecord);
    // const nextValue = lastRecord ? lastRecord.electionid + 1 : 1;
    // this.electionid = nextValue;
  // }
  // next();
// });

// Define the unique index
//   db.electionnames.findOne({}, { electionid: 1 }).sort({ electionid: -1 })

electionNameSchema.index({ electionid: 1 }, { unique: true });

  mongoose.set('strictQuery', false);
  // database connection with mongoose
 mongoose
 .connect('mongodb://localhost/registrationlogin',{
     useNewUrlParser: true,
     useUnifiedTopology: true,
 })
 .then(() => console.log('connection successful'))
 .catch(err => console.log(`no connection`))

async function getCount() {
  //const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection URI
  //const client = new MongoClient(uri);
  

 
 // Create a Mongoose model based on the schema
const ElectionNamescollection = mongoose.model('electionnames', electionNameSchema);
const count = await ElectionNamescollection.countDocuments();
    console.log(count);

 
}

getCount();

console.log('count');
console.log(getCount());

let electionid;

electionNameSchema.pre('save', async function (next) {
  if (this.isNew) {
      /*	  
	  const lastRecord = await this.constructor.findOne({}, { electionid: 1 })
	  .sort({ electionid: -1 })
	  .lean()
	  .exec();

    console.log('lastRecord');
    console.log(lastRecord);
	
	console.log('electionid');
    console.log(electionid);
	
	console.log('lastRecord.electionid');
    console.log(lastRecord.electionid);*/
	
	 // Create a Mongoose model based on the schema
const Electioncollection = mongoose.model('electionnames', electionNameSchema);
const lastRecord = await Electioncollection.countDocuments();
console.log('count');
    console.log(lastRecord);
	
	if (lastRecord) {
	  const lastElectionId = lastRecord.electionid;
	  console.log(lastElectionId);
	} else {
	  console.log('No records found in the collection');
	}
	
	Electioncollection.methods.getLastRecord = async function () {
  const electionLastRecord = await this.constructor
    .findOne({}, { electionid: 1 })
    .sort({ electionid: -1 })
    .lean()
    .exec();

  return electionLastRecord;
};

// Usage:
const electionCollectionInstance = new Electioncollection();
const electionLastRecord = await electionCollectionInstance.getLastRecord();

console.log('electionLastRecord');
	console.log(electionLastRecord);

    //const nextValue = lastRecord ? parseInt(lastRecord.electionid) + 1 : 1;
	const nextValue = lastRecord ? parseInt(lastRecord) + 1 : 1;
	console.log('nextValue');
	console.log(nextValue);
    this.electionid = nextValue.toString(); // Convert the nextValue back to a string before assigning it to `electionid`
  }
  next();
});

// Compile the schema into a model
//const ElectionName = mongoose.model('ElectionName', electionNameSchema);

	 
// const Electionname = new mongoose.model("ELECTIONNAME", electionNameSchema);
// module.exports = Electionname;

const Electionname = new mongoose.model("Electionname", electionNameSchema);

module.exports = Electionname;


