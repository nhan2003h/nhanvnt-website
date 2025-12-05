# Personal Portfolio Website

A clean, modern, and fully responsive personal portfolio website built with pure HTML, CSS, and JavaScript. Perfect for showcasing your skills, projects, and achievements.

## 🌟 Features

- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Modern UI**: Clean typography, smooth animations, and professional styling
- **Six Main Sections**:
  - Hero: Eye-catching introduction with call-to-action buttons
  - About: Your background and story
  - Skills: Technical skills displayed as interactive badges
  - Projects: Showcase your work with descriptions and GitHub links
  - Achievements: Highlight awards, certifications, and accomplishments
  - Contact: Easy ways for people to reach you
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Back to Top Button**: Quick navigation back to the top
- **No Dependencies**: Pure HTML/CSS/JS - no frameworks needed

## 📁 Project Structure

```
nhanvnt-website/
├── index.html      # Main HTML file with all content
├── styles.css      # All styling and responsive design
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## 🎨 Customization Guide

### 1. Personal Information

**Open `index.html` and update these sections:**

#### Hero Section (Lines ~30-48)
```html
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<h2 class="hero-subtitle">Full Stack Developer & Designer</h2>
<p class="hero-description">
    Your personal introduction here...
</p>
```

#### About Section (Lines ~52-78)
Replace the paragraphs with your own background, experience, and interests.

#### Contact Section (Lines ~278-296)
```html
<a href="mailto:your.email@example.com" class="contact-item">
<a href="https://github.com/yourusername" target="_blank">
<a href="https://linkedin.com/in/yourprofile" target="_blank">
```

### 2. Skills

**In `index.html`, Skills Section (Lines ~82-106):**

Add, remove, or modify skill badges:
```html
<div class="skill-badge">Your Skill</div>
```

### 3. Projects

**In `index.html`, Projects Section (Lines ~110-209):**

Each project follows this structure:
```html
<div class="project-card">
    <div class="project-icon">📱</div>  <!-- Change emoji -->
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">
        Description of your project...
    </p>
    <div class="project-tags">
        <span class="tag">Tech1</span>
        <span class="tag">Tech2</span>
    </div>
    <a href="https://github.com/yourusername/project" target="_blank" class="project-link">
        View on GitHub →
    </a>
</div>
```

**To add more projects:** Copy a project card block and paste it within the `projects-grid` div.  
**To remove projects:** Delete an entire `project-card` div.

### 4. Achievements

**In `index.html`, Achievements Section (Lines ~213-274):**

Each achievement follows this structure:
```html
<div class="achievement-card">
    <div class="achievement-icon">🏆</div>  <!-- Change emoji -->
    <h3 class="achievement-title">Award Name</h3>
    <p class="achievement-org">Organization</p>
    <p class="achievement-description">
        Description of the achievement...
    </p>
</div>
```

### 5. Color Scheme

**Open `styles.css` and modify the CSS variables (Lines 1-15):**

```css
:root {
    --primary-color: #4A90E2;      /* Main brand color */
    --primary-dark: #357ABD;       /* Darker shade for hovers */
    --secondary-color: #6C757D;    /* Secondary accent */
    --text-dark: #2C3E50;          /* Main text color */
    --background-light: #F8F9FA;   /* Light background */
    /* ... more variables ... */
}
```

### 6. Navigation Brand

**In `index.html` (Line 16):**
```html
<div class="nav-brand">YourName</div>
```

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository on GitHub**
   - Go to [github.com](https://github.com) and click "New repository"
   - Name it: `yourusername.github.io` (replace with your GitHub username)
   - Make it public
   - Don't initialize with README

2. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop `index.html`, `styles.css`, and `script.js`
   - Commit the files

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `master`), folder: `/ (root)`
   - Click Save

4. **Access your site**
   - Your site will be live at: `https://yourusername.github.io`
   - It may take a few minutes to deploy

### Method 2: Using Git Command Line

1. **Initialize and push to GitHub**

Open PowerShell in your project folder and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Personal portfolio website"

# Connect to GitHub (replace with your repository URL)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

2. **Enable GitHub Pages** (same as Method 1, step 3)

### Method 3: Deploy to a Project Repository

If you don't want to use `yourusername.github.io`:

1. Create a repository with any name (e.g., `portfolio`)
2. Push your code to the `main` branch
3. In Settings → Pages, select the `main` branch
4. Your site will be at: `https://yourusername.github.io/portfolio`

## 🔄 Updating Your Website

After making changes locally:

```powershell
# Stage your changes
git add .

# Commit with a message
git commit -m "Update projects section"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild your site within a few minutes.

## 📱 Testing Locally

To view your website locally before deploying:

### Option 1: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 2: Using Python
```powershell
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 3: Using Node.js
```powershell
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Then open: http://localhost:8080
```

## 🎯 Tips for Customization

1. **Images**: If you want to add a profile picture, use a simple `<img>` tag in the hero or about section
2. **Icons**: The website uses emoji icons. You can replace them with:
   - Other emojis
   - Font Awesome icons (requires adding the library)
   - SVG icons
3. **Sections**: You can hide sections by adding `display: none;` to their styles
4. **Fonts**: Change the font by updating `--font-primary` in `styles.css`
5. **Animations**: Adjust animation speeds in the `:root` section of `styles.css`

## 🐛 Troubleshooting

**Website not loading on GitHub Pages?**
- Ensure your repository is public
- Check that GitHub Pages is enabled in Settings
- Verify the file is named `index.html` (lowercase)
- Wait 5-10 minutes for deployment

**Mobile menu not working?**
- Ensure `script.js` is properly linked
- Check browser console for errors (F12)

**Styles not applying?**
- Verify `styles.css` is in the same folder as `index.html`
- Check the `<link>` tag in the HTML header
- Clear browser cache (Ctrl + F5)

## 📄 License

This project is open source and free to use for personal portfolios.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

---

**Built with ❤️ using HTML, CSS, and JavaScript**

For questions or issues, feel free to reach out or open an issue on GitHub.