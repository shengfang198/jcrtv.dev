# Jay Creative - Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations, interactive UI elements, and a contact form powered by Formspree.

## 🚀 Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Interactive Animations** - Smooth scroll animations and particle effects
- **Contact Form** - Email collection with Formspree integration (no backend required)
- **Modern UI/UX** - Dark theme with professional styling using Tailwind CSS
- **Project Showcase** - Dynamic project gallery with modal views
- **Performance Optimized** - Built with Vite for fast loading
- **SEO Friendly** - Optimized meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Formspree** - Serverless form handling
- **Particles.js** - Interactive background effects
- **React Modal** - Accessible modal components

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🚀 Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Push your code to GitHub
   - Enable GitHub Pages in repository settings
   - Select the `dist` folder as the source

3. **Other platforms:**
   - **Netlify:** Drag the `dist` folder to netlify.com
   - **Vercel:** Import from GitHub repository
   - **AWS S3:** Upload `dist` folder contents to S3 bucket

## 📧 Contact Form Setup

The contact form uses Formspree for serverless email handling:

1. **Create Formspree account** at [formspree.io](https://formspree.io)
2. **Create a new form** and get your endpoint URL
3. **Configure email delivery** in Formspree dashboard
4. **Test the form** - emails will be sent to your configured address

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Projects
Edit `src/data/projectsData.jsx` to add your own projects

### Styling
- Modify `src/index.css` for global styles
- Update `tailwind.config.js` for theme customization

### Contact Form
- Form configuration in `src/components/body.jsx`
- Email handling through Formspree endpoint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio needs.
