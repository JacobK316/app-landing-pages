# App Landing Pages

The official website for Jacob Kappler's iPhone apps. The site introduces each app, provides support and privacy information, and links visitors to the App Store and developer profile.

## Apps

- **JournalWrite** — A simple, privacy-focused journal for iPhone. JournalWrite is designed for distraction-free writing, private on-device entries, and useful progress insights.
- **Flock Stats** — An in-development chicken and egg tracker. It is being built to make logging flock production, expenses, and trends straightforward.

## Live Site

[jacobk316.github.io/app-landing-pages](https://jacobk316.github.io/app-landing-pages/)

## Features

- Responsive, static HTML/CSS site with no build step
- Dedicated landing page for each app
- pp Store download links
- Shared website support and privacy pages
- App-specific support and privacy pages
- Accessible mobile navigation and skip links
- Social links and developer-profile links

## Project Structure

```text
app-landing-pages/
├── index.html                  # Main apps landing page
├── support.html                # Website support page
├── privacy.html                # Website privacy policy
├── site.js                     # Mobile navigation and footer year
├── css/
│   ├── variables.css           # Shared design tokens
│   ├── global.css              # Global styles and utilities
│   ├── components.css          # Header, footer, cards, and shared UI
│   ├── home.css                # Main landing page styles
│   ├── app-page.css            # App landing page styles
│   ├── app-support.css         # Support page styles
│   └── app-privacy-policy.css  # Privacy page styles
├── images/
│   ├── JournalWrite/           # JournalWrite icon and screenshots
│   └── FlockStats/             # Flock Stats app icon
├── apps/
│   ├── journalwrite/
│   │   ├── index.html          # JournalWrite landing page
│   │   ├── support.html        # JournalWrite support
│   │   └── privacy.html        # JournalWrite privacy policy
│   └── flockstats/
│       ├── index.html          # Flock Stats landing page
│       └── support.html        # Flock Stats support
├── LICENSE
└── README.md
```

## Running Locally

1. Clone the repository:

   ```sh
   git clone https://github.com/jacobk316/app-landing-pages.git
   ```

2. Open the project folder in VS Code or another editor.
3. Open `index.html` in a browser, or use a local static-server extension for live reload.

No packages, framework setup, or build command are required.

## License

This project is available under the [MIT License](LICENSE).
