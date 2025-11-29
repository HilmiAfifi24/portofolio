# Portfolio dengan Animasi GSAP & Three.js 🎨✨

Portfolio website modern dengan animasi yang menakjubkan menggunakan GSAP dan Three.js.

## 🎭 Fitur Animasi

### 1. **3D Floating Particles Background** (Three.js)
- 1000+ particle system dengan gradient purple-pink
- Mouse interaction - particles mengikuti gerakan mouse
- Wave effect animation
- Auto-rotation dengan smooth motion
- Performance optimized dengan `requestAnimationFrame`

**Lokasi**: `app/components/ThreeBackground.tsx`

### 2. **Animated Text Reveal**
- Word-by-word reveal animation
- Staggered timing untuk efek dramatis
- Smooth slide-up dengan fade-in
- Customizable delay

**Lokasi**: `app/components/AnimatedText.tsx`

**Penggunaan**:
```tsx
<AnimatedText
  text="Your text here"
  className="your-classes"
  delay={0.5}
/>
```

### 3. **Scroll Animations** (GSAP ScrollTrigger)
- Section fade-in saat scroll
- Project cards dengan staggered entrance
- Skill cards dengan alternating direction
- Parallax headings
- Automatic trigger on scroll position

**Lokasi**: `app/components/ScrollAnimations.tsx`

### 4. **Magnetic Buttons**
- Button mengikuti gerakan mouse
- Elastic bounce effect saat mouse leave
- Inner text parallax effect
- Customizable magnetic strength

**Lokasi**: `app/components/MagneticButton.tsx`

**Penggunaan**:
```tsx
<MagneticButton
  className="your-classes"
  strength={0.4}
>
  Button Text
</MagneticButton>
```

### 5. **Animated Cards dengan 3D Tilt**
- Mouse tracking dengan glow effect
- 3D perspective tilt berdasarkan mouse position
- Scale up on hover
- Smooth transitions

**Lokasi**: `app/components/AnimatedCard.tsx`

**Penggunaan**:
```tsx
<AnimatedCard className="your-classes">
  Card Content
</AnimatedCard>
```

### 6. **Custom Cursor**
- Cursor kustom dengan follower effect
- Scale animation pada hover elemen interaktif
- Mix-blend-mode untuk kontras
- Hidden pada mobile devices

**Lokasi**: `app/components/CustomCursor.tsx`

### 7. **Page Loader**
- Loading animation dengan progress bar
- Text reveal animation
- Smooth fade out transition
- Body scroll lock selama loading

**Lokasi**: `app/components/PageLoader.tsx`

### 8. **Smooth Scroll**
- GSAP-powered smooth scrolling
- Offset untuk navbar
- Parallax effect pada hero section
- Custom easing functions

**Lokasi**: `app/components/SmoothScroll.tsx`

## 🎨 Styling Enhancements

### Custom Scrollbar
- Gradient purple-pink scrollbar thumb
- Hover state animation
- Dark theme compatible

### Selection Styling
- Purple selection background
- White text untuk contrast

### Performance Optimizations
- `will-change` untuk animasi elements
- GPU acceleration
- Debounced scroll handlers

## 🚀 Cara Menggunakan

### 1. Install Dependencies
Pastikan GSAP dan Three.js sudah terinstall:

```bash
npm install gsap three @types/three
```

### 2. Import Komponen
Semua komponen sudah terintegrasi di `app/page.tsx`. Komponen utama:

```tsx
import ThreeBackground from "./components/ThreeBackground";
import AnimatedText from "./components/AnimatedText";
import ScrollAnimations from "./components/ScrollAnimations";
import MagneticButton from "./components/MagneticButton";
import AnimatedCard from "./components/AnimatedCard";
import CustomCursor from "./components/CustomCursor";
import PageLoader from "./components/PageLoader";
import SmoothScroll from "./components/SmoothScroll";
```

### 3. Struktur HTML
Pastikan sections memiliki class yang tepat:
- `.section-heading` - untuk headings yang akan di-animate
- `.project-card` - untuk project cards
- `.skill-card` - untuk skill cards

## ⚙️ Kustomisasi

### Mengubah Warna Particles
Edit `ThreeBackground.tsx`:
```typescript
gradient.addColorStop(0, "rgba(168, 85, 247, 1)"); // Purple
gradient.addColorStop(0.5, "rgba(236, 72, 153, 0.5)"); // Pink
```

### Mengubah Durasi Animasi
Edit `ScrollAnimations.tsx`:
```typescript
duration: 1, // Ubah nilai ini
ease: "power3.out", // Ubah easing function
```

### Mengubah Strength Magnetic Button
```tsx
<MagneticButton strength={0.5}> {/* 0.0 - 1.0 */}
```

## 🎯 Performance Tips

1. **Reduce Particle Count** - Kurangi `particlesCount` di ThreeBackground untuk device low-end
2. **Disable Custom Cursor on Mobile** - Sudah otomatis via CSS media query
3. **Lazy Load Three.js** - Gunakan dynamic import untuk faster initial load
4. **Reduce Animation Duration** - Untuk faster perceived performance

## 📱 Responsive Behavior

- Custom cursor hidden pada viewport < 768px
- Touch-optimized animations
- Reduced motion support ready (dapat ditambahkan)
- Mobile-first approach

## 🔧 Troubleshooting

### Animasi Tidak Muncul
- Cek console untuk errors
- Pastikan GSAP dan Three.js terinstall
- Verify class names (`.project-card`, `.skill-card`, etc.)

### Performance Issues
- Kurangi particle count
- Disable custom cursor
- Reduce animation complexity

### Scroll Animations Tidak Trigger
- Pastikan ScrollTrigger registered: `gsap.registerPlugin(ScrollTrigger)`
- Cek start/end positions di ScrollTrigger config
- Verify section visibility

## 📦 Dependencies

```json
{
  "gsap": "^3.x.x",
  "three": "^0.x.x",
  "@types/three": "^0.x.x"
}
```

## 🎬 Demo Sections

1. **Hero Section** - 3D background + animated text + magnetic buttons
2. **About Section** - Scroll animations + animated cards
3. **Projects Section** - Card entrance animations + 3D tilt
4. **Skills Section** - Staggered reveal + hover effects
5. **Contact Section** - Magnetic interactions + smooth transitions

## 🌟 Best Practices

1. Gunakan `AnimatedCard` untuk semua cards yang perlu interaksi
2. Wrap buttons penting dengan `MagneticButton`
3. Gunakan `AnimatedText` untuk headings utama
4. Tambahkan class `.section-heading` untuk auto-scroll animations
5. Test performa di berbagai devices

## 📝 Credits

Built with:
- **GSAP** - Professional-grade animation library
- **Three.js** - 3D graphics library
- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS

---

Made with ❤️ by Mohammad Hilmi Afifi
