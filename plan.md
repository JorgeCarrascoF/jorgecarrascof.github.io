# Plan for Adding Blog Section to Astro CV

## Overview
Add a lightweight Blog section to the existing Astro-based web CV that integrates seamlessly with the current structure (Home, About Me, Projects, Studies, Experience, Tools). The Blog will use Astro's Content Collections for Markdown-based posts, support listing in reverse chronological order, and maintain consistent design.

## Current Structure Analysis
- Uses Content Collections for tools, projects, studies, experience (src/content/config.ts)
- Layout component: src/layouts/Layout.astro with Header/Footer
- Navigation in Header.astro with active state handling
- Consistent styling with Tailwind-like utility classes and CSS variables

## Implementation Steps

### 1. Content Collection Setup
- Create `src/content/blog/` directory for blog posts
- Each post as Markdown file with frontmatter:
  ```markdown
  ---
  title: "Post Title"
  pubDate: 2026-06-01
  description: "Short description"
  tags: [tag1, tag2]
  ---
  ```
- Update `src/content/config.ts` to add blog collection:
  ```typescript
  import { defineCollection, z } from "astro:content";
  
  const blog = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      tags: z.array(z.string()).optional(),
    })
  });
  
  export const collections = { projects, studies, tools, experience, blog };
  ```

### 2. Blog Pages
- Create `src/pages/blog/` directory
- **Listing Page**: `src/pages/blog/index.astro`
  ```astro
  ---
  import { getCollection } from 'astro:content';
  import Layout from '../../layouts/Layout.astro';
  
  const blogPosts = await getCollection('blog');
  // Sort by date descending (newest first)
  const sortedPosts = blogPosts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  ---
  
  <Layout title="Blog">
    <div class="blog-container">
      <h1 class="blog-title">Blog</h1>
      <div class="posts-grid">
        {sortedPosts.map(post => (
          <article class="post-card">
            <h2 class="post-title">{post.data.title}</h2>
            <time class="post-date">{post.data.pubDate.toLocaleDateString()}</time>
            <p class="post-description">{post.data.description}</p>
            <div class="post-tags">
              {post.data.tags?.map(tag => (
                <span class="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a href={`/blog/${post.slug}`} class="read-more">Read more →</a>
          </article>
        ))}
      </div>
    </div>
  </Layout>
  ```
- **Individual Post Page**: `src/pages/blog/[slug].astro`
  ```astro
  ---
  import { getEntry } from 'astro:content';
  import Layout from '../../layouts/Layout.astro';
  
  const { slug } = Astro.params;
  const post = await getEntry('blog', slug);
  
  if (!post) {
    return Astro.redirect('/404');
  }
  ---
  
  <Layout title={post.data.title}>
    <article class="post-detail">
      <h1 class="post-title">{post.data.title}</h1>
      <div class="post-meta">
        <time class="post-date">{post.data.pubDate.toLocaleDateString()}</time>
        {post.data.tags && (
          <div class="post-tags">
            {post.data.tags.map(tag => (
              <span class="tag" key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
      <div class="post-content" set:html={await post.render().Content} />
    </article>
  </Layout>
  ```

### 3. Navigation Integration
- Update `src/components/Header.astro`:
  - Desktop nav: Add `<a href="/blog" class={`${url == "/blog" && "active"}`}>Blog</a>` after Tools link
  - Mobile nav: Add `<a href="/blog" class={`${url == "/blog" && "active"}`}>Blog</a>` in .nav-wrapper

### 4. Design Consistency
- Reuse existing Layout component (`src/layouts/Layout.astro`)
- Apply same CSS classes as other sections:
  - Use `.blog-container` with similar max-width and padding as other sections
  - Match `.post-card` styling to project cards from `/projects`
  - Use existing color variables (`--accent`, `--accent-light`, etc.)
  - Ensure responsive behavior consistent with site breakpoints

### 5. Styling Considerations
- Add blog-specific styles to Layout.astro `<style>` section or create a blog.css if needed
- Post cards should match the visual style of project cards
- Individual post pages should have readable typography matching about-me section
- Tags should use existing badge/pill styling if available, otherwise create simple tag style

## File Structure Additions
```
src/
├── content/
│   ├── blog/
│   │   ├── welcome-post.md
│   │   └── astro-tips.md
│   └── config.ts  (updated)
├── pages/
│   └── blog/
│       ├── index.astro
│       └── [slug].astro
├── components/
│   └── Header.astro  (updated for nav)
└── layouts/
    └── Layout.astro  (no changes needed)
```

## Dependencies
- No new dependencies required (uses existing Astro Content Collections)
- Ensure markdown support is working (already configured via astro.config.mjs)

## Verification Checklist
- [ ] Run `npm run dev` to test blog routes locally
- [ ] Verify `/blog` shows posts in reverse chronological order
- [ ] Check individual post pages render correctly with markdown
- [ ] Confirm navigation link shows active state when on blog pages
- [ ] Test responsive design on mobile and desktop
- [ ] Validate that design matches existing sections (spacing, typography, colors)
- [ ] Build and preview production build with `npm run build && npm run preview`

## Example Blog Post (src/content/blog/first-post.md)
```markdown
---
title: "Welcome to My Blog"
pubDate: 2026-06-01
description: "First post introducing the blog section of my CV"
tags: [introduction, astro, webdev]
---

Welcome to the new blog section of my online CV! Here I'll share insights about web development, Astro framework, and my professional journey.

This post demonstrates how blog posts are written in Markdown with frontmatter metadata.
```

## Integration Points
1. Content Collection registration in src/content/config.ts
2. Page routing via src/pages/blog/
3. Navigation updates in Header.astro
4. Shared Layout component ensures design consistency
5. Existing CSS variables and styling patterns maintain visual harmony