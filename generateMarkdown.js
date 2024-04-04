// generateMarkdown.js

// Function to generate Markdown for README
function generateMarkdown(data) {
  // Initialize variables for license badge and text
  let licenseBadge = '';
  let licenseText = '';

  // Switch statement to set license badge and text based on user input
  switch (data.license) {
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      licenseText = 'This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.';
      break;
    case 'Apache 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      licenseText = 'This project is licensed under the Apache License 2.0 - see the [LICENSE.md](LICENSE.md) file for details.';
      break;
    case 'GPL 3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      licenseText = 'This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details.';
      break;
    case 'BSD 3-Clause':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      licenseText = 'This project is licensed under the BSD 3-Clause License - see the [LICENSE.md](LICENSE.md) file for details.';
      break;
    case 'None':
      licenseText = 'This project is not licensed.';
      break;
    default:
      licenseText = '';
  }

  return `
# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseText}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out via email at ${data.email}.
`;
}

module.exports = generateMarkdown;