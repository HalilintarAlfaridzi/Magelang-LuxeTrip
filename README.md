# Magelang LuxeTrip

Magelang LuxeTrip is a frontend-only premium travel agency website concept for tourism around Magelang, Indonesia. The site presents destinations, curated tour packages, travel tips, FAQs, and contact information with WhatsApp as the main conversion channel.

This project is built as a realistic portfolio and client-simulation website. It does not include a backend, database, authentication, payment flow, checkout, CMS, or real booking system.

## Features

- Premium travel agency landing page
- Destination listing with search, category filtering, and sorting
- Destination detail pages with gallery, highlights, facilities, tips, nearby destinations, and related packages
- Tour package listing with search and category filtering
- Tour package detail pages with itinerary timeline, inclusions, exclusions, terms, and WhatsApp CTA
- Travel tips listing and blog detail pages
- About, Contact, FAQ, and Not Found pages
- Static local data from JavaScript files
- WhatsApp direct inquiry links with pre-filled messages
- Responsive layout for desktop, tablet, and mobile
- SEO-friendly page titles and meta descriptions
- Vite `base` support for deployment in a subfolder without broken images

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React icons
- Static JavaScript data

## Project Structure

```txt
src/
  components/
    blog/
    common/
    destinations/
    faq/
    home/
    layout/
    packages/
  data/
    blogPosts.js
    categories.js
    destinations.js
    faqs.js
    packages.js
    testimonials.js
  pages/
  routes/
  utils/
public/
  images/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Vite Base URL and Images

This project supports Vite `base`, which is useful when deploying to a subfolder such as GitHub Pages.

Example `vite.config.js`:

```js
export default defineConfig({
  base: "/magelang-luxetrip/",
  plugins: [react(), tailwindcss()],
});
```

Image paths are handled through `src/utils/assets.js` using `import.meta.env.BASE_URL`, so local images under `public/images` still load correctly when `base` is set.

Example:

```js
assetPath("images/magelang-hero.png")
```

With `base: "/magelang-luxetrip/"`, the image becomes:

```txt
/magelang-luxetrip/images/magelang-hero.png
```

React Router also uses the Vite base as its basename, so page navigation works correctly when deployed in a subfolder.

## Static Data

All website content is stored locally:

- Destinations: `src/data/destinations.js`
- Tour packages: `src/data/packages.js`
- Blog posts: `src/data/blogPosts.js`
- FAQs: `src/data/faqs.js`
- Testimonials: `src/data/testimonials.js`
- Categories: `src/data/categories.js`

To edit website content, update these files directly.

## WhatsApp Flow

The website does not submit or store booking data. WhatsApp buttons open a direct link with a pre-filled message.

The WhatsApp helper is located in:

```txt
src/utils/whatsapp.js
```

Update the phone number there if needed.

## Deployment Notes

For root-domain deployment, the default Vite setup works.

For subfolder deployment, set `base` in `vite.config.js`:

```js
base: "/your-subfolder-name/"
```

Then build:

```bash
npm run build
```

Upload the `dist/` folder to your hosting provider.

## Scope

Included:

- Frontend pages
- Static content
- Local search/filter/sort
- WhatsApp CTA flow
- Responsive UI

Not included:

- Backend
- Database
- Authentication
- Admin dashboard
- Payment system
- Checkout
- CMS
- Real booking form submission

## License

This project is intended for portfolio, learning, and client-simulation use.
