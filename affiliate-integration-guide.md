# Affiliate Product Integration Guide

## How to Add Product Recommendations to Your Articles

### Quick Integration Method

Simply add these lines at the end of any blog article (before the disclaimer):

```markdown
---

import ProductGrid from '@/components/ProductGrid.astro';

<ProductGrid category="newborn" />

---
```

### Available Categories

- `newborn` - Essential newborn care products
- `feeding` - Breastfeeding and bottle feeding supplies  
- `pregnancy` - Pregnancy comfort and support items

### Custom Product Showcase

For more control, you can use the full ProductShowcase component:

```markdown
---

import ProductShowcase from '@/components/ProductShowcase.astro';

<ProductShowcase 
  title="Essential Baby Gear" 
  subtitle="Top-rated products for new parents"
  products={[
    {
      name: "Product Name",
      description: "Product description here",
      price: "$29.99",
      rating: 4.5,
      reviews: 1234,
      affiliateLink: "https://amazon.com/your-affiliate-link",
      features: ["Feature 1", "Feature 2", "Feature 3"]
    }
  ]}
/>

---
```

### Adding Real Affiliate Links

To add your actual Amazon affiliate links:

1. Replace placeholder links in `/src/components/ProductGrid.astro`
2. Update product images with real Amazon product images
3. Add your Amazon Associate tracking ID to all links

### Styling Options

The product grids automatically match your site's theme and include:
- Responsive grid layouts
- Hover effects and animations
- Trust signals and badges
- Mobile-optimized design
- SEO-friendly affiliate disclaimers