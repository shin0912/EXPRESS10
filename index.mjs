import express from "express";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(resolve(__dirname, "public")));

app.use(
  "/bootstrap",
  express.static(resolve(__dirname, "node_modules/bootstrap/dist"))
);
app.use(
  "/fontawesome",
  express.static(
    resolve(__dirname, "node_modules/@fortawesome/fontawesome-free")
  )
);
app.use(
  "/jquery",
  express.static(resolve(__dirname, "node_modules/jquery/dist"))
);

app.listen(3000, () => {
  console.log("服務以啟動於 http://localhost:3000");
});
