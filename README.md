# Personal Portfolio Website

A clean, modern, and responsive personal portfolio website built with pure HTML, CSS, and minimal JavaScript. No frameworks required.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## Features

- ✨ Clean, modern design with a professional light theme
- 📱 Fully responsive (mobile, tablet, and desktop)
- 🎨 Soft color palette (blue/gray/white)
- 🔗 Smooth navigation with fixed navbar
- 📝 Easy to customize
- 🚀 Ready for GitHub Pages deployment

## Sections

1. **Hero** - Name, title, and introduction
2. **About Me** - Background and description
3. **Skills** - Technical skills displayed as badges
4. **Projects** - 6 project cards with descriptions and links
5. **Achievements & Awards** - Notable accomplishments
6. **Contact** - Email and social media links

## Quick Start

1. Clone this repository
2. Edit the content in `index.html`
3. Customize styles in `styles.css` (optional)
4. Deploy to GitHub Pages

---

## How to Edit Content

### Changing Your Name and Title

1. Open `index.html`
2. Find the **Hero Section** (around line 37)
3. Edit the following:

```html
<!-- Main Heading - Your Name -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>

<!-- Your Job Title/Role -->
<p class="hero-subtitle">Full Stack Developer | Open Source Enthusiast</p>

<!-- Short Introduction -->
<p class="hero-description">
    I build modern, scalable web applications...
</p>
```

### Editing the About Me Section

1. Find the **About Me Section** (around line 60)
2. Update the paragraphs with your background:

```html
<div class="about-text">
    <p>Your first paragraph about yourself...</p>
    <p>Your second paragraph...</p>
    <p>Your third paragraph...</p>
</div>
```

### Adding/Editing Skills

1. Find the **Skills Section** (around line 90)
2. Add or remove skill badges:

```html
<div class="skill-badges">
    <span class="skill-badge">HTML5</span>
    <span class="skill-badge">CSS3</span>
    <!-- Add more skills here -->
</div>
```

### Editing Projects

1. Find the **Projects Section** (around line 140)
2. Each project follows this structure:

```html
<article class="project-card">
    <div class="project-image">
        <div class="project-placeholder"></div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Title</h3>
        <p class="project-description">
            Project description goes here...
        </p>
        <div class="project-tags">
            <span class="project-tag">React</span>
            <span class="project-tag">Node.js</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/yourusername/project" class="btn btn-small">View on GitHub</a>
        </div>
    </div>
</article>
```

### Editing Achievements

1. Find the **Achievements Section** (around line 250)
2. Each achievement follows this structure:

```html
<div class="achievement-card">
    <div class="achievement-icon">🏆</div>
    <div class="achievement-content">
        <h3 class="achievement-title">Achievement Title</h3>
        <p class="achievement-year">2023</p>
        <p class="achievement-description">
            Description of your achievement...
        </p>
    </div>
</div>
```

### Updating Contact Information

1. Find the **Contact Section** (around line 300)
2. Update your email:

```html
<a href="mailto:your.email@example.com" class="contact-email">
    your.email@example.com
</a>
```

3. Update social links:

```html
<a href="https://github.com/yourusername" class="social-link">...</a>
<a href="https://linkedin.com/in/yourusername" class="social-link">...</a>
```

### Changing the Color Scheme

1. Open `styles.css`
2. Find the `:root` section at the top (around line 20)
3. Edit the CSS variables:

```css
:root {
    --color-primary: #3b82f6;           /* Main accent color */
    --color-primary-dark: #2563eb;      /* Darker shade for hover */
    --color-primary-light: #93c5fd;     /* Light shade for accents */
    /* ... more variables ... */
}
```

---

## Deploying to GitHub Pages

### Method 1: GitHub Settings (Recommended)

1. Push your code to a GitHub repository
2. Go to your repository on GitHub
3. Click **Settings** → **Pages** (in the left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**
6. Wait a few minutes for deployment
7. Your site will be available at: `https://yourusername.github.io/repository-name`

### Method 2: Using `gh-pages` branch

1. Create a new branch called `gh-pages`:
   ```bash
   git checkout -b gh-pages
   git push -u origin gh-pages
   ```
2. In GitHub Settings → Pages, select the `gh-pages` branch

### Method 3: User/Organization Site

For a site at `https://yourusername.github.io`:

1. Create a repository named `yourusername.github.io`
2. Push your code to the `main` branch
3. The site will automatically deploy

---

## File Structure

```
portfolio/
├── index.html      # Main HTML file with all content
├── styles.css      # All styles and responsive design
├── script.js       # Minimal JavaScript for interactivity
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization Tips

1. **Add your photo**: Replace the `.image-placeholder` div with an `<img>` tag
2. **Add more sections**: Copy the section structure and add new content
3. **Change fonts**: Update the `font-family` in `styles.css`
4. **Add animations**: Uncomment the Intersection Observer code in `script.js`

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ for the developer community