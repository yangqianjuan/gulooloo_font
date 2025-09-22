# Schema.org JSON-LD Implementation

This directory contains a comprehensive Schema.org structured data implementation for the Gulooloo Tech website.

## 📁 File Structure

```
Schema/
├── index.ts          # Main exports
├── types.ts          # TypeScript type definitions
├── schemas.ts        # Schema creation functions
├── JsonLd.tsx        # JSON-LD rendering component
├── HreflangLinks.tsx # Hreflang links component
└── README.md         # This documentation
```

## 🔧 Components

### JsonLd Component
Renders JSON-LD structured data in the document head.

```tsx
import { JsonLd, createOrganizationSchema } from '@/components/Schema';

const schema = createOrganizationSchema('en');
<JsonLd data={schema} />
```

### HreflangLinks Component
Generates hreflang and canonical links for multilingual SEO.

```tsx
import { HreflangLinks } from '@/components/Schema';

<HreflangLinks
  baseUrl="https://guloolootech.com"
  currentLocale="en"
  pageType="app"
  pageId="easynotes"
/>
```

## 📋 Schema Types Implemented

### 1. Organization Schema
- Company information and contact details
- Social media profiles
- Address and founding information

### 2. WebSite Schema
- Site name and description
- Search functionality
- Language support

### 3. SoftwareApplication Schema
- App details, features, and download links
- Screenshots and ratings
- Version and platform information

### 4. Article Schema
- Blog post metadata
- Author and publisher information
- Publication dates and content structure

### 5. BreadcrumbList Schema
- Navigation hierarchy
- Page relationships
- User journey mapping

## 🌐 Multilingual Support

The implementation supports 9 languages:
- English (en)
- Chinese Simplified (zh-CN)
- Chinese Traditional (zh-TW)
- French (fr)
- Spanish (es)
- Japanese (ja)
- Korean (ko)
- Portuguese (pt)
- German (de)

## 🚀 Usage Examples

### Layout Schema (Global)
```tsx
// In layout.tsx
import { createOrganizationSchema, createWebSiteSchema, combineSchemas } from '@/components/Schema';

const organizationSchema = createOrganizationSchema(locale);
const websiteSchema = createWebSiteSchema(locale);
const schemas = combineSchemas(organizationSchema, websiteSchema);

<JsonLd data={schemas} />
```

### App Page Schema
```tsx
// In app/[id]/page.tsx
import { createAppSchema, createBreadcrumbSchema } from '@/components/Schema';

const appSchema = createAppSchema(id, locale);
const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: `https://guloolootech.com/${locale}` },
  { name: "Apps", url: `https://guloolootech.com/${locale}/apps` },
  { name: appSchema.name, url: `https://guloolootech.com/${locale}/app/${id}` }
], locale);
```

### Blog Article Schema
```tsx
// In blog/[id]/page.tsx
import { createArticleSchema } from '@/components/Schema';

const articleSchema = createArticleSchema(
  articleId,
  articleTitle,
  articleDescription,
  locale
);
```

## 🔍 SEO Benefits

1. **Rich Snippets**: Enhanced search result displays
2. **Knowledge Graph**: Better understanding by search engines
3. **Voice Search**: Improved compatibility with voice assistants
4. **Social Sharing**: Enhanced social media previews
5. **Local SEO**: Better local search visibility

## 📊 Schema Validation

Use Google's Rich Results Test to validate the implementation:
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

## 🛠 Maintenance

### Adding New Schema Types
1. Add type definitions in `types.ts`
2. Create schema function in `schemas.ts`
3. Export in `index.ts`
4. Document usage in this README

### Updating App Information
Edit the `appData` object in `schemas.ts` to update:
- App descriptions
- Feature lists
- Version numbers
- Download URLs

### Language Support
To add new languages:
1. Update `LANGUAGE_MAPPING` in `HreflangLinks.tsx`
2. Add language codes to `alternates.languages` in layout metadata
3. Update supported languages list in this README

## ⚡ Performance Notes

- JSON-LD is parsed asynchronously by search engines
- No impact on page rendering performance
- Schemas are generated server-side
- Hreflang links are lightweight HTML elements