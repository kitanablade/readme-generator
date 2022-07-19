const inquirer = require("inquirer");
const fs = require("fs");

console.log(`Welcome to the README auto-generator. 
Please enter the following information to create your readme file:`);

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "Project Title:",
    },
    {
      type: "list",
      name: "license",
      message: "License:",
      choices: ["DUB", "Hex.pm", "PyPi", "Eclipse Marketplace"],
    },
    {
      type: "input",
      name: "description",
      message: "Description:",
    },
    {
      type: "input",
      name: "installInstr",
      message: "Installation Instructions:",
    },
    {
      type: "input",
      name: "usageInfo",
      message: "Usage Information:",
    },
    {
      type: "input",
      name: "contribution",
      message: "Contribution Guidelines:",
    },
    {
      type: "input",
      name: "githubUser",
      message: "Github Username:",
    },
    {
      type: "input",
      name: "email",
      message: "Email:",
    },
    {
      type: "input",
      name: "tests",
      message: "Tests:",
    },
    {
        type: "input",
        name: "fileName",
        message: "Name of File:",
      },
  ])
  .then((data) => {
    let licChoice = data.license;
    let badgeLink = "";
    let licInfo = "";

    switch (licChoice) {
      case "DUB":
        badgeLink = "![DUB](https://img.shields.io/dub/l/vibe-d)";
        licInfo = "DUB (MIT)";
        break;

      case "Hex.pm":
        badgeLink = "![Hex.pm](https://img.shields.io/hexpm/l/plug)";
        licInfo = "Hex.pm (Apache-2.0)";
        break;

      case "PyPi":
        badgeLink =
          "![PyPI - License](https://img.shields.io/pypi/l/django?color=orange)";
        licInfo = "PyPI (BSD)";
        break;

      case "Eclipse Marketplace":
        badgeLink =
          "![Eclipse Marketplace](https://img.shields.io/eclipse-marketplace/l/notepad4e?color=red)";
        licInfo = "Eclipse Marketplace (EPL 2.0)";
        break;
    }

    let markdown = `# ${data.projectTitle}
${badgeLink}
## Description 
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage Information](#usage-information)
* [License](#license)
* [Contribution Information](#contribution-information)
* [Tests](#tests)
* [Questions](#questions)
## Installation 
\`\`\`
${data.installInstr}
\`\`\`
## Usage Information
${data.usageInfo}
## License
This app is licensed under the ${licInfo} license.
## Contribution Information
${data.contribution}
## Tests
${data.tests}
## Questions 
For more information, please [email me](mailto:${data.email}) or see [${data.githubUser}'s Github page](https://github.com/${data.githubUser}).
#### [⬆️ Back to Top](#description)`;

    fs.writeFile(`${data.fileName}.md`, markdown, (err) =>
      err ? console.log(err) : console.log("Success! Readme generated.")
    );
  });
