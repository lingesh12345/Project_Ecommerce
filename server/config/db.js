const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://premkumarcb22:s.p2r0e0m5@cluster0.dvqkp70.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
