# Feature Flags Workshop - React Template

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg) ![Node version](https://img.shields.io/badge/node-12.x-blue.svg) ![React version](https://img.shields.io/badge/react-17.x-blue.svg)

This repository is a template for the Feature Flags Workshop. It's a boilerplate project that leverages React to demonstrate the powerful concept of feature flags in a practical, hands-on workshop.

## 🎯 Overview

Feature flags, or feature toggles, are a software development technique that allows developers to enable or disable features in a live environment without deploying new code. This workshop guides you through implementing your first feature flag using React.

## 💾 Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v12.x or newer)
- npm (usually bundled with Node.js)

## ⚙️ Installation & Set Up

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/<your-username>/feature-flags-react-workshop.git
   ```

2. Navigate into the project directory:

   ```
   cd feature-flags-react-workshop
   ```

3. Install the project dependencies:
   ```
   npm install
   ```

## 🚀 Running the Application

To start the server, use the following command:

```
npm start
```

By default, the application runs on port 3000.

## 🏗️ Usage

Upon setting up the project, you can start implementing feature flags. The workshop exercises are located in the `/docs` directory. Each exercise will guide you through the process of implementing a feature flag.

## 📋 Environment Variables

This project uses environment variables for configuration. To set up, create a `.env` file in your project root and set the variables with `REACT_APP_` prefix. For example:

```
REACT_APP_FEATURE_FLAG_CLIENT_ID=ClientID
```

For sharing, you can create a `.env.example` file with only the keys. Remember not to commit `.env` file to the version control.

## ✅ Testing

To run tests, use the following command in the project root directory:

```
npm test
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/<your-username>/feature-flags-react-workshop/issues) for any outstanding items. If you want to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 📄 License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## 💬 Contact

If you have any questions, concerns, or feedback - feel free to reach out!

## 🙏 Acknowledgements

We would like to extend our sincerest gratitude to all the contributors whose efforts have made this project possible. Your contribution to open-source is greatly appreciated! Happy coding!
