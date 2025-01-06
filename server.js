import server from "./app.js";
import { PORT } from "./solution.js";

server.listen(PORT ,'0.0.0.0', () => {
  console.log('Server is running and accessible externally on port 3000');
})