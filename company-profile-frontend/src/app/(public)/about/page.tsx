import { Award, Compass, Eye, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About Us",
  description: "Learn more about DapFlow's history, mission, vision, and our team of digital innovation experts.",
};

const coreValues = [
  { icon: <Compass className="h-6 w-6 text-primary" />, title: "Innovation", desc: "Continuously searching for new solutions and creative methods." },
  { icon: <Eye className="h-6 w-6 text-primary" />, title: "Integrity", desc: "Transparent operations, reliable delivery, and absolute trust." },
  { icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: "Quality", desc: "Uncompromised software engineering standards and premium aesthetics." },
];

const team = [
  { name: "Adrian Nugraha", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" },
  { name: "Devi Shinta", role: "Chief Design Officer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" },
  { name: "Rangga Pratama", role: "Head of Engineering", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
];

const history = [
  { year: "2018", event: "DapFlow was founded in Jakarta with a core team of three developers." },
  { year: "2020", event: "Expanded operations, hiring dedicated design teams and launching cloud services." },
  { year: "2022", event: "Accomplished over 100 successful international software deployments." },
  { year: "2025", event: "Recognized as a leading national digital transformation partner." },
];

export default function AboutPage() {
  return (
    <div className="py-12 space-y-20">
      {/* Page Header */}
      <section className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
          Our Journey to Excellence
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          DapFlow is a team of visionary builders, engineers, and creators. We design tomorrow&apos;s digital products today.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-zinc-50/50 py-16 border-y border-border/40">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
          <Card className="border-border/30 shadow-sm">
            <CardContent className="p-8 space-y-4">
              <div className="p-3 bg-secondary rounded-xl w-fit text-primary">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global benchmark for digital engineering, empowering businesses worldwide with premium software products, intuitive design standards, and sustainable innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/30 shadow-sm">
            <CardContent className="p-8 space-y-4">
              <div className="p-3 bg-secondary rounded-xl w-fit text-primary">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To engineer stable, highly-performant technological infrastructures and craft breathtaking user experiences that bridge user behavior with clients&apos; core goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-zinc-900">Values that Drive Us</h2>
          <p className="text-muted-foreground">The foundational pillars of everything we design and code.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((val, idx) => (
            <Card key={idx} className="border-border/30">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="mx-auto p-3 bg-secondary rounded-full w-fit">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{val.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Corporate Timeline */}
      <section className="bg-zinc-50/50 py-16 border-y border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl space-y-12">
          <h2 className="text-3xl font-bold text-zinc-900 text-center">Our Timeline</h2>
          <div className="relative border-l border-border pl-6 space-y-8 ml-4">
            {history.map((hist, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-1.5 bg-primary border-4 border-white h-4.5 w-4.5 rounded-full" />
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-primary bg-secondary px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {hist.year}
                  </span>
                  <p className="text-zinc-700 text-sm leading-relaxed mt-2">{hist.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Organization Structure */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-zinc-900">Our Executive Team</h2>
          <p className="text-muted-foreground">The brilliant minds navigating DapFlow toward technological horizons.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="text-center space-y-4 group">
              <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-2 border-border/40 group-hover:border-primary transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900">{member.name}</h3>
                <p className="text-sm text-muted-foreground font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
