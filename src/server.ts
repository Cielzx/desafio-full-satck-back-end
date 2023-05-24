import app from "./app";
import "dotenv/config";
import AppDataSource from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database is connected");
    app.listen(3000, () => {
      console.log("Server is running on port: 3000");
    });
  })
  .catch((error) => console.log(error));
