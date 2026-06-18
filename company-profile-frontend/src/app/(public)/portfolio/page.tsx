import { fetchAPI } from "@/lib/api";
import { Portfolio } from "@/types";
import PortfolioGrid from "@/components/sections/PortfolioGrid";

export const metadata = {
  title: "Portfolio",
  description: "Browse the curated portfolio of digital transformation, cloud migrations, and high-performance software projects executed by DapFlow.",
};

const mockPortfolio: Portfolio[] = [
  { id: 1, title: "Fintech Mobile Wallet", category: "Mobile Apps", description: "Bespoke digital banking dashboard and transactions wallet architecture.", image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600", client: "FinTech Corp", year: 2024, is_featured: true },
  { id: 2, title: "Enterprise CRM Platform", category: "Web Apps", description: "Scalable client management CRM dashboard built with React and Laravel APIs.", image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", client: "DapFlow Retail", year: 2023, is_featured: true },
  { id: 3, title: "Logistics Routing Engine", category: "Automation", description: "Real-time geographical route planning engine powered by AI optimization models.", image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600", client: "TransCargo Ltd", year: 2024, is_featured: false },
  { id: 4, title: "Medical Portal Redesign", category: "UI/UX", description: "Clean, responsive, HIPAA-compliant patient intake portal interface design.", image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600", client: "Medicare Inc", year: 2023, is_featured: false },
];

export default async function PortfolioPage() {
  let portfolio: Portfolio[] = [];

  try {
    portfolio = await fetchAPI<Portfolio[]>("portfolio");
  } catch {
    portfolio = mockPortfolio;
  }

  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
          Our Success Stories
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Browse the select projects that highlight our design capabilities, technical standards, and reliable executions.
        </p>
      </section>

      {/* Grid Filter Section */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <PortfolioGrid initialItems={portfolio} />
      </section>
    </div>
  );
}
