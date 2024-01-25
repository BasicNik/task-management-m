const app = require("./app");
const mongoose = require("mongoose");
const port = 5000;
const API = "mongodb://localhost:27017/task-management-mern"

mongoose.set('strictQuery', false);


async function main() {
    await mongoose.connect(API);
    console.log('connected to database');
    app.listen(port, () => console.log(`Server is live at PORT => ${port}`));
};
main();
