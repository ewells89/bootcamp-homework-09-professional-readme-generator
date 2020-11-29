// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  Please feel free to contact me with any questions at:
  * GitHub: @${data.github}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
