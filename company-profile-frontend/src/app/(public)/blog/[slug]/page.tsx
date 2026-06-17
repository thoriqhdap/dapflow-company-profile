import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { Article } from "@/types";
import { Button } from "@/components/ui/button";

// Enable incremental static regeneration
export const revalidate = 3600;

const mockArticles: Record<string, Article> = {
  "building-scalable-nextjs-14": {
    id: 1,
    title: "Building Scalable Next.js 14 Web Applications",
    slug: "building-scalable-nextjs-14",
    excerpt: "Learn the core techniques to optimize your Next.js application for speed...",
    content: `
      <h2>The Shift to Server Components</h2>
      <p>Next.js 14's introduction of React Server Components by default has completely revolutionized how we approach data fetching. By executing fetches on the server, we eliminate client-side JavaScript execution overhead, reduce initial page load times, and drastically improve user experience.</p>
      
      <h2>Implementing Incremental Static Regeneration</h2>
      <p>Incremental Static Regeneration (ISR) is one of Next.js's most powerful capabilities. It allows you to create or update static pages after you’ve built your site. By setting the revalidate parameter, Next.js will rebuild the page in the background as new requests come in, ensuring your site remains static yet dynamic.</p>
      
      <h2>Best Practices for Styling and Components</h2>
      <p>Pairing Next.js 14 with Tailwind CSS and Radix-based UI libraries (like shadcn/ui) lets you write composable components that match your precise design systems without bloating your production stylesheet. Remember to utilize variables for theme switching and CSS HSL scales for harmonious colors.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Technology",
    published_at: "2026-06-10",
  },
  "philosophy-of-premium-aesthetics": {
    id: 2,
    title: "The Philosophy of Premium Visual Aesthetics",
    slug: "philosophy-of-premium-aesthetics",
    excerpt: "How clean typography, precise grids, and harmonious HSL color spaces shape user engagement...",
    content: `
      <h2>Visual Excellence in Digital Design</h2>
      <p>In a world saturated with digital interfaces, visual excellence has ceased to be an afterthought; it is a primary product requirement. A premium aesthetic immediately builds authority, signals trust, and encourages longer user session durations.</p>
      
      <h2>Color Harmony with HSL</h2>
      <p>Avoid raw hex values where possible. Utilizing HSL or OKLCH variables in your theme settings allows you to shift luminosity and saturation programmatically. This ensures that hover effects, card focus borders, and system dark modes maintain perfect design continuity.</p>
      
      <h2>Typography & Grids</h2>
      <p>Premium designs rely on robust typography hierarchies (e.g., using Outfit or Inter from Google Fonts) and spacious layouts. Giving components room to breathe (generous margins, high line heights) creates an immediate feeling of premium quality.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    category: "Design",
    published_at: "2026-06-15",
  },
  "deploying-laravel-apis-containers": {
    id: 3,
    title: "Deploying Laravel APIs to Containerized Cloud Stacks",
    slug: "deploying-laravel-apis-containers",
    excerpt: "Step-by-step guidance on setting up Docker, continuous integrations, and production caching...",
    content: `
      <h2>Containerization Benefits for API Stacks</h2>
      <p>Deploying Laravel APIs via Docker ensures that your production environment exactly mimics your local development setup, eliminating differences in PHP extensions, memory constraints, and host server quirks.</p>
      
      <h2>Database Migrations in Production CI</h2>
      <p>A major design goal in modern Laravel deployment is automated migrations during the build/release phase. By utilizing orchestrators (like Railway or Docker Compose commands), we run the php artisan migrate step in an ephemeral build container before swapping routing traffic to the new release.</p>
      
      <h2>CORS & Cookie Sanctum Auth</h2>
      <p>Always restrict CORS config in production. Setting SANCTUM_STATEFUL_DOMAINS and CORS_ALLOWED_ORIGINS specifically to your frontend's Next.js domain maintains absolute security while letting Axios or fetch request cookies securely.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    category: "Engineering",
    published_at: "2026-06-17",
  },
};

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  let article: Article | null = null;
  try {
    article = await fetchAPI<Article>(`articles/${params.slug}`);
  } catch (e) {
    article = mockArticles[params.slug] || null;
  }

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: { params: Params }) {
  let article: Article | null = null;

  try {
    article = await fetchAPI<Article>(`articles/${params.slug}`);
  } catch (e) {
    article = mockArticles[params.slug] || null;
  }

  if (!article) {
    notFound();
  }

  return (
    <article className="py-12 container mx-auto px-4 md:px-6 max-w-3xl space-y-8">
      {/* Back Button */}
      <div>
        <Link href="/blog">
          <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Journal
          </Button>
        </Link>
      </div>

      {/* Meta Headers */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {article.published_at ? new Date(article.published_at).toLocaleDateString() : "Draft"}
          </span>
          <span className="flex items-center gap-1">
            <Tag className="h-4 w-4" />
            {article.category}
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
          {article.title}
        </h1>
        <p className="text-lg text-muted-foreground italic leading-relaxed">
          {article.excerpt}
        </p>
      </div>

      {/* Hero Thumbnail */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-100 border border-border/20 shadow-lg">
        <img
          src={article.thumbnail}
          alt={article.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Body */}
      <div
        className="prose prose-zinc lg:prose-lg dark:prose-invert max-w-none pt-4 space-y-6 text-zinc-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}
