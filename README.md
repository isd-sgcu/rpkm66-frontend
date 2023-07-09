# RPKM66

Frontend interface for the RubPuenKaoMai 2023 website.

## Prerequisites

Please install the following.

-   [Node.js](https://nodejs.org/en/)
-   [pnpm](https://pnpm.io/)
-   [Git](https://git-scm.com/)

## Getting Started

1. Clone this repository

    ```bash
    git clone https://github.com/isd-sgcu/rpkm66-frontend.git
    ```

    or download the zip file and extract it.

    > Note: Make sure you go into the directory after cloning or extracting the zip file.
    >
    > ```bash
    > cd rpkm66-frontend
    > ```

1. Install dependencies
    ```bash
    pnpm install
    ```
1. Run the development server
    ```bash
    pnpm dev
    ```
1. Open [localhost:3000](http://localhost:3000) in your browser. Done!

## Contributing

1. Create a new branch

    ```bash
    git checkout -b <branch-name> origin/dev
    ```

    > Note: Please copy the branch name from Linear and use it as the branch name.

1. Make your changes
1. Stage and commit your changes

    ```bash
    git add .

    git commit -m "<commit-message>"
    ```

    > Note: Don't forget to use the [conventional commit format](#conventional-commit-format) for your commit message.

1. Push your changes

    ```bash
    git push origin <branch-name>
    ```

1. Create a pull request to the dev branch in GitHub
1. Wait for the code to be reviewed and merged
1. Repeat

    > Note: Don't forget to always pull the latest changes from the dev branch before creating a new branch.
    >
    > ```bash
    > git pull origin dev
    > ```

**If you have any questions, please contact us on Slack.**

**Enjoy! 😋**

### Conventional Commit Format

In short, the commit message should look like this:

```bash
git commit -m "feat: <what-you-did>"

# or

git commit -m "fix: <what-you-fixed>"

# or

git commit -m "refactor: <what-you-refactored>"
```

The commit message should start with one of the following types:

-   feat: A new feature
-   fix: A bug fix
-   refactor: A code change that neither fixes a bug nor adds a feature
-   style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

For more information, please read the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/) documentation.
