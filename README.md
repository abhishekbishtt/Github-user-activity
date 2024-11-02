# GitHub User Activity

## Overview
This project fetches and displays the recent activity of a specified GitHub user by using the GitHub API.

## Features
- Fetches user activity events from GitHub.
- Displays actions such as pushes, starred repositories, and opened issues.

## Prerequisites
- Node.js installed on your machine.

## Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/abhishekbishtt/github-user-activity.git
   ```
2. Navigate to the project directory:
   ```bash
   cd github-user-activity
   ```
3. Install the necessary dependencies (if any):
   ```bash
   npm install
   ```

## Usage
Run the application by providing a GitHub username as a command-line argument:
```bash
node index.js <username>
```

For example:
```bash
node index.js sindresorhus
```

## Output
The output will display the recent activities of the specified user, such as:
- Pushed X commits to [repo-name]
- Starred [repo-name]
- Opened a new issue in [repo-name]

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
Abhishek Bisht
https://roadmap.sh/projects/github-user-activity
