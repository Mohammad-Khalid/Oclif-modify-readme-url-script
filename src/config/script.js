const fs = require('fs-extra');
console.log("script working....");
const runScript = async() => {

    let readme = await fs.readFile('README.md', 'utf8');
    readme = readme.replace(/\\/g, '/');
    await fs.outputFile('README.md', readme)
} 

runScript();