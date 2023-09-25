const mongoose = require("mongoose");

const electionNameSchema = new mongoose.Schema({
  electionid: {
    type: Number,
    unique: true
  },
  banglaelectionname: {
    type: String,
    required: true
  },
  englishelectionname: {
    type: String,
    required: true
  },
  templatetype: {
    type: String,
    required: true
  },
  statusfordisplay: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.set('strictQuery', false);

electionNameSchema.index({ electionid: 1 }, { unique: true });

electionNameSchema.pre('save', async function (next) {
  if (this.isNew) {
    try {
      const lastObject = await this.constructor.findOne({})
        .sort({ _id: -1 })
        .exec();

      if (lastObject) {
        const nextValue = lastObject.electionid + 1;
        this.electionid = nextValue;
      } else {
        this.electionid = 1;
      }
    } catch (err) {
      console.error(err);
      // Handle the error
    }
  }

  next();
});

const Electionname = mongoose.model('electionnames', electionNameSchema);

// Database connection with mongoose
mongoose
  .connect('mongodb://localhost/registrationlogin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection successful'))
  .catch(err => console.log('No connection'));

module.exports = Electionname;
