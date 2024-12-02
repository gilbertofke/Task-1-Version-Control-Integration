# Task 1: Version Control Integration

## Objective:
The goal of this task was to set up version control integration for a sample project, which included:
- A simple web application connected to a relational database (PostgreSQL)
- Using Git for version control
- Committing code with clear, meaningful commit messages
- Pushing the repository to a remote Git server

## Steps Taken:
1. **Created a Local Git Repository**:
   - Initialized the Git repository in the project directory using `git init`.

2. **Configured PostgreSQL Database**:
   - Installed PostgreSQL on Windows.
   - Configured a connection URL for the PostgreSQL database in the `.env.local` file.

3. **Created Test API Route**:
   - Created a simple API route to verify the database connection and return the current time from the PostgreSQL database.

4. **Committed Changes**:
   - Added changes to the staging area using `git add .`.
   - Committed the changes with the following message: "Set up PostgreSQL connection and verified database connectivity".

5. **Created a Remote GitHub Repository**:
   - Created a new repository on GitHub called `Task-1-Version-Control-Integration
`.
   - Linked the local repository with the remote repository using `git remote add origin <repository-url>`.

6. **Pushed Changes to GitHub**:
   - Pushed the local commits to the remote repository using `git push -u origin main`.

## Conclusion:
The task was completed successfully, with version control integration fully set up and linked to a remote GitHub repository. All changes were pushed, and the database connection was verified.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000/api/test-db) with your browser to see the result.




Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
