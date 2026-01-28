---
description: How to deploy the Cuvatex landing page to Netlify
---

Follow these steps to deploy your Next.js application to Netlify:

### 1. Push your code to a Git provider
If you haven't already, push your code to a repository on GitHub, GitLab, or Bitbucket.

### 2. Connect to Netlify
1. Log in to your [Netlify account](https://app.netlify.com/).
2. Click the **"Add new site"** button and select **"Import an existing project"**.
3. Choose your Git provider (GitHub, GitLab, or Bitbucket) and authorize Netlify.
4. Select the `Cuvatex landing page` repository from the list.

### 3. Configure Build Settings
Netlify should automatically detect that this is a Next.js project. Verify the following settings:
- **Build command**: `npm run build`
- **Publish directory**: `.next` (Netlify will actually use its Next.js Runtime to handle this).
- **Base directory**: Leave it as the root (./).

### 4. Set Environment Variables (If Any)
If you have any sensitive information in `.env.local` (like API keys), you must add them:
1. Go to **Site settings** > **Environment variables** in the Netlify dashboard.
2. Add each variable name and its value.

### 5. Deploy
Click **"Deploy site"**. Netlify will start building your project. Once finished, you'll get a production URL.

### 6. (Optional) Custom Domain
1. In the Netlify dashboard, go to **Domain management**.
2. Click **"Add custom domain"** and follow the instructions to point your domain to Netlify.

---
**Note:** Netlify automatically installs the `@netlify/plugin-nextjs` to support Next.js features like Middleware, ISR, and localized routing (which this project uses via `next-intl`).
