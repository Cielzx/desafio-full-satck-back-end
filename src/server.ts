import app from "./app";
import "dotenv/config";

import AppDataSource from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database is connected");
    app.listen(3001, () => {
      console.log("Server is running on port: 3001");
    });
  })
  .catch((error) => console.log(error));
