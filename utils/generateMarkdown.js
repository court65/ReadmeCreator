// TODO: 
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
    return `[License](#license)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return `\n## License \n
    Licensed by: ${license} \n`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("type of data: ",typeof data, "Data: ",data)

  return `
  # ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

  ### Discription
  ${data.projectDescription}

  ## Table of Contents

  * [Authors Name](#authors-name)

  * [Authors Email](#authors-email)

  * [Authors Github](#authors-github)

  * [Installation](#installation)

  * [Usage](#usage)

  * ${renderLicenseLink(data.license)}

  * [Contributors](#contributors)

  * [Contact](#contact)


  ## Authors Name
  ${data.authorsName}

  ## Authors Email
  ${data.authorsEmail}

  ## Authors Github
  ${data.authorsGithub}

  ## Installation
  ${data.installationProcess}


  ## Usage
   ${data.projectUsage}

   ${renderLicenseSection(data.license)}


  ## Contributors
   ${data.projectCredits}

## Contact

For questions please contact me at ${data.authorsEmail}
or view my github at [${data.authorsGithub}](https://github.com/${data.authorsGithub}/)
`;
}

module.exports = generateMarkdown;
