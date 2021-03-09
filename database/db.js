const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`DB Connected`);
  } catch (error) {
    console.error(`DB-Connection Error: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
