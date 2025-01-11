import server from "./app.js";
import { PORT } from "./solution.js";

server.listen(PORT , () => {
  console.log('Server is running and accessible externally on port 3000');
})