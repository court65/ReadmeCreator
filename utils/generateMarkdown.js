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
    return `##License
    Licensed by: ${license}`
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

  * [Authors Name](#authorsName)

  * [Authors Email](#authorsEmail)

  * [Authors github](#authorsGithub)

  * [Installation](#installationProcess)

  * [Usage](#projectUsage)
  ${renderLicenseLink(data.license)}

  * [Additional Contributers](#projectCredits)

  * [Contact Me](#contactMe)


  ## Authors Name
  ${data.authorsName}

  ## Authors Email
  ${data.authorsEmail}

  ## Authors github
  ${data.authorsGithub}

  ## Installation
  ${data.installationProcess}


  ## Usage
   ${data.projectUsage}
   ${renderLicenseSection(data.license)}


  ## Additional Contributers
   ${data.projectCredits}

## Contact Me

For questions please contact me at ${data.authorsEmail}
or view my github at [${data.authorsGithub}](https://github.com/${data.authorsGithub}/)
`;
}

module.exports = generateMarkdown;
