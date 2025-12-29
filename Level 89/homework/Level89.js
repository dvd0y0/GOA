// # 1
// import { readFile, mkdir, rmdir, writeFile } from "node:fs";

// for (let i = 1; i <= 5; i++) {
//   mkdir(`folder_${i}`, (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// }

// # 2
// import { mkdir } from "node:fs/promises";
// import { join } from "node:path";

// async function createFolders() {
//   for (let i = 1; i <= 5; i++) {
//     const baseFolder = `folder_${i}`;
//     await mkdir(baseFolder, { recursive: true });
//     await mkdir(join(baseFolder, "cw"), { recursive: true });
//     await mkdir(join(baseFolder, "hw"), { recursive: true });
//   }
// }

// createFolders().catch(console.error);

// # 3

// const fs = require('fs');

// for (let i = 1; i <= 5; i++) {
//     const folderName = `folder${i}`;
//     fs.mkdirSync(folderName);

//     for (let j = 1; j <= 5; j++) {
//         const fileName = `${folderName}/file${j}.txt`;
//         fs.writeFileSync(fileName, 'Some content');
//     }
// }

// # 4
// const fs = require("fs");

// for (let i = 1; i <= 5; i++) {
//   const folderName = `folder${i}`;
//   fs.mkdirSync(folderName);

//   for (let j = 1; j <= 5; j++) {
//     const fileName = `${folderName}/file${j}.txt`;
//     const content = `This is file ${j} in folder_${i}`;
//     fs.writeFileSync(fileName, content);
//   }
// }

// # 5
// const fs = require('fs');

// for (let i = 1; i <= 5; i++) {
//     const folderName = `folder${i}`;

//     console.log(`Folder: ${folderName}`);

//     const files = fs.readdirSync(folderName);

//     files.forEach(file => {
//         console.log(`- ${file}`);
//     });

//     console.log('');
// }
