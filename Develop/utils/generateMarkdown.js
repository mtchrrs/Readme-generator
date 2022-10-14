// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  let code;

  switch(license){
    case "Apache-2.0":
      code = "Apache-2.0";
      break;
    case "BSD-3-Clause":
      code = "BSD-3-Clause";
      break;
    case "BSD-2-Clause":
      code = "BSD-2-Clause";
      break;
    case "gpl-license":
      code = "gpl-license";
      break;
    case "lgpl-license":
      code = "lgpl-license";
      break;
    case "MIT":
      code = "MIT";
      break;
    case "MPL-2.0":
      code = "MPL-2.0";
      break;
    case "CDDL-1.0":
      code = "CDDL-1.0";
      break;
    case "EPL-2.0":
      code = "EPL-2.0";
      break;
  }

  if(license){
    badge = `[![License: ${license}](https://img.shields.io/badge/License-${code}-informational.svg)](https://opensource.org/licenses/${code})`;
  } else {
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  if (license) {
    link = `https://opensource.org/licenses/${license}`;
  } else {
    link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (license) {
    return `
  ${badge}

  ${link}`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.license);
  return `# ${data.title}


  ## License 

  The License for this project/repository is seen below. Please follow the link for more information about the license.
  ${license}


  ## Contents

  * [Description](#description)
  * [Installation Instructions](#installation)
  * [Usage Instructions](#usage)
  * [Contribution Guide](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Description

  ${data.description}


  ## Installation

  To install or use this application, please follow the following process carefully.

  ${data.installInstructions}


  ## Usage
  
  To use this application, please follow the following process carefully.

  ${data.usageInstructions}


  ## Contributions
  
  To contribute to this application, please follow the following process carefully.

  ${data.contributionsGuide}
  

  ## Tests 

  To conduct a test on this application, please follow the following process carefully.

  ${data.tests}


  ## Questions

  To ask any questions about this application, please follow the link to my GitHub, send me an email, or follow the links on my portfolio.
  
  * https://github.com/${data.githubUsername}
  * ${data.email}
  * ${data.userportfolio}
  `;
}

module.exports = generateMarkdown;
