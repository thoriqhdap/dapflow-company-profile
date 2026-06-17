import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fetchAPI } from "@/lib/api";
import { Article } from "@/types";

export const metadata = {
  title: "Insights & Articles",
  description: "Stay updated with DapFlow's research, engineering insights, design philosophies, and technological innovations.",
};

const mockArticles: Article[] = [
  { id: 1, title: "Building Scalable Next.js 14 Web Applications", slug: "building-scalable-nextjs-14", excerpt: "Learn the core techniques to optimize your Next.js application for speed, performance, and advanced server-side caching.", content: "", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400", category: "Technology", published_at: "2026-06-10" },
  { id: 2, title: "The Philosophy of Premium Visual Aesthetics", slug: "philosophy-of-premium-aesthetics", excerpt: "How clean typography, precise grids, and harmonious HSL color spaces shape user engagement and premium brand perception.", content: "", thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400", category: "Design", published_at: "2026-06-15" },
  { id: 3, title: "Deploying Laravel APIs to Containerized Cloud Stacks", slug: "deploying-laravel-apis-containers", excerpt: "Step-by-step guidance on setting up Docker, continuous integrations, and production caching models for Laravel APIs.", content: "", thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400", category: "Engineering", published_at: "2026-06-17" },
];

export default async function BlogPage() {
  let articles: Article[] = [];

  try {
    articles = await fetchAPI<Article[]>("articles");
  } catch (e) {
    articles = mockArticles;
  }

  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
          The DapFlow Journal
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Insights, methodologies, and engineering breakthroughs documented by our designers and developers.
        </p>
      </section>

      {/* Main Grid */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Articles list */}
          <div className="md:col-span-2 space-y-8">
            {articles.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-border/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="relative aspect-video sm:aspect-square overflow-hidden bg-zinc-100">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 sm:col-span-2 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.published_at ? new Date(post.published_at).toLocaleDateString() : "Draft"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="h-3.5 w-3.5" />
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div>
                      <Link href={`/blog/${post.slug}`} className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                        Read full article <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-border/30 p-6 space-y-4 bg-zinc-50/50">
              <h4 className="font-bold text-zinc-900 border-b border-border/60 pb-2">
                Popular Categories
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-between">
                    <span>Technology</span>
                    <span className="bg-secondary text-primary text-xs font-bold px-2 py-0.5 rounded-full">12</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-between">
                    <span>Design Systems</span>
                    <span className="bg-secondary text-primary text-xs font-bold px-2 py-0.5 rounded-full">8</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-between">
                    <span>Cloud Architecture</span>
                    <span className="bg-secondary text-primary text-xs font-bold px-2 py-0.5 rounded-full">6</span>
                  </Link>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
