# ✅ Pre-Production Checklist

Here is a comprehensive checklist to ensure your website is ready for launch.

## 1. Code & Configuration

- [x] **Run Linter and Formatter**: Ensure the code is clean and consistent.
  - `bun run lint`
  - `bun run format`
- [x] **Check for Unused Code**: Remove any dead code, unused dependencies, or commented-out blocks that are not necessary for production.
- [x] **Environment Variables**: You are using `resend` which requires an API key.
  - [x] Create a `.env.production.local` or `.env` file in the root for production.
  - [x] Ensure `RESEND_API_KEY` is set in your production environment. **Do not commit this file to Git.**
  - [x] Verify that your code correctly loads this variable for production builds (`$env/static/private` in SvelteKit).
- [x] **Finalize Dependencies**:
  - [x] You have both `@sveltejs/adapter-node` and `@sveltejs/adapter-vercel` as dev dependencies. Your `svelte.config.js` is configured to use `adapter-node`. Ensure this is the intended deployment target. If deploying to Vercel, switch the adapter.
  - [x] Review `package.json` for any unnecessary dependencies that can be removed.
- [x] **Command Checks**:
  - [x] Run `bun run check` one last time to catch any type errors.

## 2. Content & SEO

- [ ] **Internationalization (i18n)**:
  - [x] The `git status` shows `messages/en.json` is modified. Ensure both `en.json` and `fr.json` have identical key structures. Use a JSON diff tool to compare them and prevent missing translations on any page.
  - [x] Run `bun run build:paraglide` to compile the latest messages. Consider adding this to your main `build` script in `package.json` if it's not already, e.g., `"build": "bun run build:paraglide && vite build"`.
  - [ ] Check all pages in both French and English to ensure all text is translated correctly.
- [ ] **Metadata and SEO**:
  - [ ] Your `+layout.svelte` uses `svelte-meta-tags`. Verify that every page has unique and descriptive `title` and `description` meta tags. This is handled via `data.pageMetaTags` in your layout, so check the `+page.ts` or `+layout.ts` for each route.
  - [ ] Define Open Graph and Twitter card metadata for rich sharing on social media. `svelte-meta-tags` supports this out of the box. Ensure you have default tags and that they can be overridden per page.
  - [ ] Check that `manifest.json` at `(assets)/manifest.json/+server.ts` is fully configured with your app icons, theme color, etc.
- [ ] **Content Validation**:
  - [ ] Your `velite.config.ts` provides strong schemas for posts and projects. This is great. Do a final check on all markdown files in `src/content/` to ensure the frontmatter is accurate (e.g., dates, tags, titles).
  - [ ] Check for broken links or missing images in your markdown content.
- [x] **Robots.txt & Sitemap**:
  - [x] You have a `sitemap.xml` endpoint, which is excellent. Make sure it's linked in a `robots.txt` file.
  - [x] Create a `static/robots.txt` file. A good starting point would be:

    ```
    User-agent: *
    Allow: /

    Sitemap: https://www.kesval.com/sitemap.xml
    ```

    (Replace with your final domain).

## 3. Functionality & UX

- [ ] **Contact Form**: This is a critical piece of functionality.
  - [ ] You are using `sveltekit-superforms` and `resend`. Test the form submission thoroughly in a production-like environment.
  - [ ] Ensure the Resend DNS records (e.g., SPF, DKIM) are correctly configured for your sending domain to avoid emails landing in spam.
  - [ ] Check form validation (`zod` schema in `src/lib/schemas/contact.ts`). Test all validation rules: required fields, email format, etc.
  - [ ] Confirm the success and error messages (`Toaster`) are user-friendly.
- [ ] **Links and Navigation**:
  - [ ] Click through every link in the navigation, footer, and within page content to ensure there are no broken links (404s).
  - [ ] Check that all external links (e.g., to GitHub, LinkedIn) open in a new tab (`target="_blank" rel="noopener noreferrer"`).
- [ ] **Responsive Design**:
  - [ ] Test the website on various screen sizes: mobile, tablet, and desktop. Use browser developer tools and test on real devices if possible.
  - [ ] Pay close attention to navigation menus, images, and complex layouts on small screens.
- [ ] **Error Handling**:
  - [ ] Your `src/routes/+error.svelte` page is very basic. I strongly recommend creating a more user-friendly error page that includes a link to the homepage, a friendly message, and maintains the site's branding.
- [ ] **Favicon**: Ensure the favicon is present and displays correctly in browser tabs. You have one at `static/favicon.ico` and `static/favicon.png`.

## 4. Performance & Optimization

- [ ] **Image Optimization**:
  - [ ] You are using `@sveltejs/enhanced-img`, which is great. Double-check that all key images (e.g., logos, hero images) are being processed and served in modern formats like AVIF or WebP.
  - [ ] Ensure all images have appropriate `alt` tags for accessibility. Your `velite` schemas should enforce this where possible, but it's good to double check the output.
- [ ] **Asset Minification**:
  - [ ] The SvelteKit build process (`vite build`) handles minification of JS and CSS automatically. Verify this by inspecting the build output in `.svelte-kit/output`.
- [ ] **Page Speed**:
  - [ ] Use tools like Google PageSpeed Insights or WebPageTest to analyze your production URL once deployed.
  - [ ] Pay attention to metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).
- [ ] **Caching**:
  - [ ] Configure appropriate caching headers for your assets on your Node.js server. For static assets like images, fonts, and CSS/JS bundles, you can set long cache-control max-age values.

## 5. Security & Legal

- [ ] **Dependency Audit**:
  - [ ] Run `bun audit` to check for known vulnerabilities in your dependencies. Update any packages that have critical vulnerabilities.
- [ ] **Legal Pages**:
  - [ ] You have pages for `mentions-legales` and `conditions-generales-de-vente`. Ensure the content is complete and legally compliant for your business.
  - [ ] Consider adding a Privacy Policy page, especially since you have a contact form that collects personal data.
- [ ] **Cookie Consent**:
  - [ ] You have a `CookieConsent` component. Verify that it correctly blocks non-essential cookies (e.g., analytics, tracking) before the user gives consent.
  - [ ] Ensure it's compliant with GDPR/ePrivacy regulations.
- [ ] **HTTPS**:
  - [ ] Ensure your production site will be served over HTTPS. Most modern hosting providers (including Vercel, or services behind Cloudflare) handle this automatically.

## 6. Deployment & Final Checks

- [ ] **Production Build**:
  - [ ] Run the `bun run build` command locally one last time to ensure everything builds without errors.
- [ ] **Clean Git Status**:
  - [ ] Commit all your final changes. Your `git status` should be clean before deploying. You currently have a modified `messages/en.json`.
- [ ] **Final Domain**:
  - [ ] Replace all placeholder domains (e.g., `localhost:5173`) with your final production domain (e.g., `https://www.kesval.com`). This is especially important for the sitemap in `robots.txt` and any canonical URLs.
- [ ] **Backups**:
  - [ ] Ensure you have a backup of your code (Git repository) and any other critical assets.
- [ ] **Launch**:
  - [ ] Deploy the application to your Node.js hosting environment.
  - [ ] After deploying, run through a smaller, critical-path checklist:
    - [ ] Can you access the homepage?
    - [ ] Does the contact form work?
    - [ ] Is the main navigation working?
    - [ ] Does it look correct on mobile?

---

Once you've gone through this list, you should be in a great position to launch. Good luck!

Let me know if you'd like me to help with any of the items on the list or if there is anything else I can do!
