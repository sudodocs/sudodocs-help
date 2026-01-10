# 📘 SudoDocs Documentation

This repository hosts the source code for the **SudoDocs Help Center**, built with [Docusaurus](https://docusaurus.io/).

It provides the User Guide, Admin Guide, and API Reference for the SudoDocs platform.

🚀 **Live Site:** [https://docs.sudodocs.com](https://docs.sudodocs.com)  
📱 **SudoDocs App:** [https://app.sudodocs.com](https://app.sudodocs.com)

---

## 🛠️ Local Development

To run this documentation site locally on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/en/download/) (version 18 or higher) installed.

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone [https://github.com/sudodocs/sudodocs-help.git](https://github.com/sudodocs/sudodocs-help.git)
cd sudodocs-help
npm install
```
### 3. Start the Local Server

This command starts a local development server and opens a browser window. Most changes are reflected live without restarting the server.

```bash
npm start
```
The site will be available at `http://localhost:3000`.

## 📂 Project Structure

- `/docs`: Contains all the documentation content (Markdown files).

    - `/user-guide`: Content for the User Guide.

    - `/admin-guide`: Content for the Admin Guide.

- `/src`: React components and custom styling.

    - `/css/custom.css`: Main stylesheet (Glassmorphism theme).

    - `/pages`: Landing page (`index.js`) and other standalone pages.

- `/static`: Static assets like images, the `CNAME` file, and `robots.txt`.

- `docusaurus.config.js`: Main configuration file for the site (navbar, footer, plugins).

- `sidebars.js`: Controls the order and hierarchy of the documentation sidebar.

## 🚀 Deployment

This project is configured to deploy automatically using GitHub Actions.

1. Push Changes: When you push code to the `main` branch, the deployment workflow triggers automatically.

2. Workflow File: Located at `.github/workflows/deploy.yml`.

3. Hosting: The site is hosted on GitHub Pages and served via the custom domain `docs.sudodocs.com`.

### Update Content

1. Edit the `.md` files in the `/docs` folder.

2. Commit your changes: `git commit -m "Update user guide"`

3. Push to GitHub: `git push origin main`

## 🎨 Theme & Customization

This site uses a custom "Glassmorphism" theme inspired by modern SaaS documentation.

- Font: Plus Jakarta Sans

- Primary Color: Mint Green (`#10b981`)

- Dark Mode: Fully supported with Slate Grey palette.

Copyright © 2026 SudoDocs.