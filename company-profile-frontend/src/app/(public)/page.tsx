import Link from "next/link";
import { ArrowRight, Star, Layers, Code, Sparkles, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fetchAPI } from "@/lib/api";
import { Service, Testimonial } from "@/types";

// Mock data fallbacks for development / offline state
const mockServices: Service[] = [
  { id: 1, title: "Web Development", description: "Modern, high-performance web applications tailored to your business needs.", icon: "Code", order: 1, is_active: true },
  { id: 2, title: "UI/UX Interface Design", description: "Visually stunning and intuitive interfaces designed to wow your users.", icon: "Layers", order: 2, is_active: true },
  { id: 3, title: "Mobile Apps Development", description: "Premium native and cross-platform mobile experiences for iOS and Android.", icon: "Sparkles", order: 3, is_active: true },
];

const mockTestimonials: Testimonial[] = [
  { id: 1, name: "Jessica R.", position: "CEO", company: "Algosys", content: "DapFlow transformed our outdated system into a modern, beautifully fast web portal. Our clients are absolutely in love with the new design!", avatar_url: null, rating: 5, is_active: true },
  { id: 2, name: "Budi Santoso", position: "CTO", company: "FinTech ID", content: "Their engineering standard is top-tier. Clean code, punctual delivery, and excellent communication throughout the project.", avatar_url: null, rating: 5, is_active: true },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Dedicated Support" },
  { value: "8+", label: "Years Experience" },
];

export default async function HomePage() {
  // Fetch from backend API, fallback to mock data if offline/error
  let services: Service[] = [];
  let testimonials: Testimonial[] = [];

  try {
    services = await fetchAPI<Service[]>("services");
  } catch {
    services = mockServices;
  }

  try {
    testimonials = await fetchAPI<Testimonial[]>("testimonials");
  } catch {
    testimonials = mockTestimonials;
  }

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "code": return <Code className="h-8 w-8 text-primary" />;
      case "layers": return <Layers className="h-8 w-8 text-primary" />;
      case "database": return <Database className="h-8 w-8 text-primary" />;
      case "shield": return <Shield className="h-8 w-8 text-primary" />;
      default: return <Sparkles className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32 flex flex-col items-center text-center space-y-8">
        <div className="inline-flex items-center space-x-2 bg-secondary text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/15 animate-pulse">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Empowering Digital Excellence</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-zinc-900 leading-tight">
          We Craft <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-600 to-blue-500">Premium Digital Experiences</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          DapFlow combines state-of-the-art software engineering with stunning UI/UX designs to accelerate your business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/portfolio">
            <Button size="lg" className="w-full sm:w-auto rounded-full py-6 px-8 text-base shadow-lg shadow-primary/20 flex items-center gap-2">
              View Our Portfolio <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full py-6 px-8 text-base">
              Talk to Our Experts
            </Button>
          </Link>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="border-t border-border/40 bg-zinc-50/50 py-20">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
              Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2018, DapFlow has grown to become a leading agency in technological innovation and high-end software development. We help global brands, startups, and established enterprises design, build, and deploy premium digital products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We focus on speed, scalability, and exceptionally premium visual aesthetics, ensuring every line of code adds tangible value to your venture.
            </p>
            <div className="pt-2">
              <Link href="/about">
                <Button variant="link" className="px-0 text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more about our history <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <Card key={idx} className="border-border/30 hover:border-primary/20 hover:shadow-md transition-all">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 space-y-12">
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
            Our Core Expertise
          </h2>
          <p className="text-muted-foreground">
            We provide a diverse range of premium services to elevate your digital products and business operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border-border/40 hover:border-primary/25 hover:shadow-lg transition-all group duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="p-3 bg-secondary/80 rounded-xl w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-t border-border/40 bg-zinc-50/50 py-20">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
              Loved by Global Clients
            </h2>
            <p className="text-muted-foreground">
              Hear what our clients have to say about working with our team of elite developers and designers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((test) => (
              <Card key={test.id} className="border-border/30 hover:shadow-md transition-all">
                <CardContent className="p-8 space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic text-zinc-700 leading-relaxed">
                    &ldquo;{test.content}&rdquo;
                  </p>
                  <div>
                    <div className="font-bold text-zinc-900">{test.name}</div>
                    <div className="text-sm text-muted-foreground">{test.position}, {test.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4 md:px-6 space-y-8 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl">
            Let&apos;s build something spectacular together. Talk to our project coordinators today.
          </p>
          <div>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="rounded-full py-6 px-10 text-base font-bold shadow-lg hover:shadow-xl transition-all">
                Let&apos;s Talk
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
