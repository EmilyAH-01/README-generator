// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  Table of Contents:
  #Description
  #Installation
  #Usage
  #License
  #Contributing
  #Tests
  #Questions

  Description: # ${data.description}

  Installation: # ${data.installation}

  Usage: # ${data.usage}

  License: # ${data.license}

  Contributing: # ${data.contributing}

  Tests: # ${data.tests}

  Questions: 
    - Github: # https://github.com/${data.questionsUserName}
    - Email:  # ${data.questionsEmail}
  `;
}

module.exports = generateMarkdown;
