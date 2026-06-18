import Link from "next/link";
import { Code, Layers, Sparkles, Database, Shield, Smartphone, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fetchAPI } from "@/lib/api";
import { Service } from "@/types";

export const metadata = {
  title: "Our Services",
  description: "Explore the comprehensive array of digital and software engineering capabilities offered by DapFlow.",
};

const mockServices: Service[] = [
  { id: 1, title: "Web Development", description: "Modern, high-performance, and responsive websites and portals built with advanced frameworks like Next.js.", order: 1, is_active: true, icon: "Code" },
  { id: 2, title: "UI/UX Interface Design", description: "Bespoke interface designs and wireframes focused on driving high visual engagement and natural usability.", order: 2, is_active: true, icon: "Layers" },
  { id: 3, title: "Mobile Application", description: "Robust and fluid native and hybrid mobile applications targeting both iOS and Android platforms.", order: 3, is_active: true, icon: "Smartphone" },
  { id: 4, title: "Cloud Infrastructure", description: "Secure, reliable, and scalable hosting architecture set up across top-tier vendors (AWS, Google Cloud).", order: 4, is_active: true, icon: "Database" },
  { id: 5, title: "Cybersecurity Audits", description: "Detailed audits and configuration testing to secure your user databases and operational servers.", order: 5, is_active: true, icon: "Shield" },
  { id: 6, title: "AI & Automation", description: "Bespoke automation pipelines, LLM fine-tuning, and robotic process optimizations.", order: 6, is_active: true, icon: "Cpu" },
];

export default async function ServicesPage() {
  let services: Service[] = [];

  try {
    services = await fetchAPI<Service[]>("services");
  } catch {
    services = mockServices;
  }

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "code": return <Code className="h-10 w-10 text-primary" />;
      case "layers": return <Layers className="h-10 w-10 text-primary" />;
      case "database": return <Database className="h-10 w-10 text-primary" />;
      case "shield": return <Shield className="h-10 w-10 text-primary" />;
      case "smartphone": return <Smartphone className="h-10 w-10 text-primary" />;
      case "cpu": return <Cpu className="h-10 w-10 text-primary" />;
      default: return <Sparkles className="h-10 w-10 text-primary" />;
    }
  };

  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
          Our Specializations
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          DapFlow delivers end-to-end consulting and engineering services designed to bring absolute reliability to your software products.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border-border/30 hover:border-primary/25 hover:shadow-lg transition-all group duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="p-4 bg-secondary/80 rounded-2xl w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {getIcon(service.icon)}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-zinc-50 border-t border-b border-border/40 py-20 text-center">
        <div className="container mx-auto px-4 md:px-6 space-y-6 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900">
            Have a Specific Project Requirement?
          </h2>
          <p className="text-muted-foreground">
            We offer fully customized retainer models and dedicated developer groups tailored to your internal pipeline.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button size="lg" className="rounded-full shadow-lg hover:shadow-primary/20 transition-all px-8">
                Consult with an Architect
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
