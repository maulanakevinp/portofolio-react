# Migration Guide - HTML/Bootstrap ke React/Vite/TailwindCSS

## 📋 Overview

Dokumentasi lengkap konversi portfolio website dari:
- **Sebelum**: HTML + Bootstrap + jQuery
- **Sesudah**: React + Vite + TailwindCSS

## 🔄 Perubahan Utama

### Technology Stack

| Sebelum | Sesudah |
|---------|---------|
| HTML statis | React Components |
| Bootstrap CSS | TailwindCSS v4 |
| jQuery | Pure React (no jQuery) |
| Manual bundling | Vite build tool |

### Struktur Folder

**Sebelum:**
```
maulanakevinp.github.io/
├── index.html
├── projects/
│   └── index.html
├── cv/
│   └── index.html
├── assets/
│   ├── bootstrap/
│   ├── js/jquery.min.js
│   └── img/
```

**Sesudah:**
```
portfolio-react/
├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── public/
│   └── img/
└── index.html
```

## ✅ Fitur yang Dipertahankan

- ✅ Semua halaman (Home, Projects, CV)
- ✅ Semua gambar dan assets
- ✅ SEO metadata
- ✅ PWA manifest
- ✅ Responsive design
- ✅ Social media links
- ✅ Project listings
- ✅ Work experience data
- ✅ Skills showcase

## 🆕 Peningkatan

### Performance
- ⚡ Build time lebih cepat dengan Vite
- ⚡ Bundle size lebih kecil (251KB vs ~500KB)
- ⚡ Hot Module Replacement (HMR)
- ⚡ Code splitting otomatis

### Developer Experience
- 🔧 Component-based architecture
- 🔧 TypeScript ready (optional)
- 🔧 ESLint configured
- 🔧 Modern React Hooks
- 🔧 No jQuery dependencies

### Styling
- 🎨 Utility-first dengan TailwindCSS
- 🎨 Smaller CSS bundle
- 🎨 JIT compilation
- 🎨 Easy customization

## 📝 Component Mapping

### Navbar
- **Sebelum**: Bootstrap navbar dengan jQuery toggle
- **Sesudah**: React component dengan useState hook

### Footer
- **Sebelum**: Static HTML dengan Ionicons
- **Sesudah**: React component dengan dynamic social links

### Pages
1. **Home** (`/`)
   - Hero section dengan avatar
   - Project gallery
   - Skills showcase
   - Call to action

2. **Projects** (`/projects`)
   - Grid layout semua project
   - Hover effects
   - Project descriptions

3. **CV** (`/cv`)
   - Work experience timeline
   - Education history
   - Skills icons
   - Contact information

## 🚀 Cara Menjalankan

### Development
```bash
cd portfolio-react
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 📦 Dependencies

### Production
- react@19.2.0
- react-dom@19.2.0
- react-router-dom@7.13.0
- @tailwindcss/postcss@4.1.18

### Development
- vite@7.2.4
- @vitejs/plugin-react@5.1.1
- eslint + plugins
- postcss + autoprefixer

## 🎯 Migration Checklist

- [x] Setup Vite + React project
- [x] Install TailwindCSS v4
- [x] Setup React Router
- [x] Copy all assets (images, certificates, manifest)
- [x] Create Navbar component
- [x] Create Footer component
- [x] Convert Home page
- [x] Convert Projects page
- [x] Convert CV page
- [x] Update metadata dan SEO
- [x] Test responsive design
- [x] Build production bundle
- [x] Create documentation

## 💡 Tips untuk Development

### Menambah Project Baru
Edit file `src/pages/Projects.jsx`, tambahkan object baru di array `projectList`:
```javascript
{
  title: 'Project Baru',
  description: 'Deskripsi project',
  image: '/img/projects/nama-project.png',
  link: '/projects/nama-project'
}
```

### Mengubah Styling
Gunakan TailwindCSS utilities langsung di className:
```jsx
<div className="bg-blue-500 hover:bg-blue-700 p-4 rounded-lg">
  Content
</div>
```

### Custom CSS
Tambahkan di `src/index.css` menggunakan @layer:
```css
@layer components {
  .my-custom-class {
    @apply bg-gradient-to-r from-blue-500 to-purple-600;
  }
}
```

## 🔧 Troubleshooting

### Issue: Gambar tidak muncul
- Pastikan file ada di folder `public/`
- Path harus dimulai dengan `/` (contoh: `/img/avatar.jpg`)

### Issue: Routing tidak bekerja di production
- Gunakan HashRouter atau configure server untuk SPA

### Issue: TailwindCSS classes tidak bekerja
- Restart dev server
- Check import `@import "tailwindcss"` di index.css

## 📞 Support

Jika ada pertanyaan atau issue, hubungi:
- Email: maulanakevinpradana@gmail.com
- WhatsApp: +62 823-3157-1857

---

Dokumentasi dibuat: February 6, 2026
