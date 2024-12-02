const { writeFile, readFile } = require("fs").promises;
const { join } = require("path");
const fs = require("fs");

const main = async () => {
  const filePath = join(__dirname, "out", "404", "index.html");

  // Verifica si el archivo 404 existe
  if (fs.existsSync(filePath)) {
    const file = await readFile(filePath);
    await writeFile(join(__dirname, "out", "404.html"), file);
  } else {
    console.log("El archivo 404 no se ha generado. Omitiendo...");
  }
};

main();
