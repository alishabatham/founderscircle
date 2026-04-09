import { ArrowRight, CheckCircle2, Cpu, BarChart, Users, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 bg-white border-b border-border text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            How FCC Works
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A structured system designed to move founders from application to execution and growth.
          </p>
        </div>
      </section>

      {/* Entry Process */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Entry Process</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Application", desc: "Submit your idea and intent." },
              { step: 2, title: "Evaluation", desc: "We assess clarity, seriousness, and execution mindset." },
              { step: 3, title: "Observation", desc: "We monitor participation and commitment." },
              { step: 4, title: "Selection", desc: "Only serious founders enter the system." }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-border bg-white shadow-sm relative">
                <div className="text-4xl font-black text-foreground/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution System Stages */}
      <section className="py-24 px-6 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Execution System Stages</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {[
              { title: "Idea Stage", desc: "Validate and refine" },
              { title: "MVP Stage", desc: "Build and test" },
              { title: "Revenue Stage", desc: "Monetize" },
              { title: "Growth Stage", desc: "Scale" }
            ].map((stage, i) => (
              <div key={i} className="flex-1 p-6 border border-primary/20 bg-card shadow-sm text-center">
                <h3 className="text-lg font-bold text-primary mb-2">{stage.title}</h3>
                <p className="text-muted-foreground text-sm">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Progress Tracking</h2>
          <div className="space-y-4">
            {["Defined tasks", "Regular updates", "Weekly reviews", "Performance tracking"].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border border-border bg-white shadow-sm">
                <BarChart className="h-6 w-6 text-primary shrink-0" />
                <span className="text-lg font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-24 px-6 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Collaboration</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { title: "Work Together", desc: "Work with other founders" },
              { title: "Share", desc: "Share resources" },
              { title: "Solve", desc: "Solve real problems together" }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-border bg-card shadow-sm">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support System */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Support System</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Cpu className="h-6 w-6" />, label: "Product Development" },
              { icon: <BarChart className="h-6 w-6" />, label: "Marketing" },
              { icon: <Settings className="h-6 w-6" />, label: "Strategy" },
              { icon: <Zap className="h-6 w-6" />, label: "Scaling" }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-border bg-white flex flex-col items-center justify-center gap-3 shadow-sm">
                <div className="text-primary">{item.icon}</div>
                <span className="font-semibold text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Summary */}
      <section className="py-32 px-6 bg-slate-800 border-b border-border">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-black text-2xl md:text-4xl text-primary">
            <span>APPLY</span> <ArrowRight className="hidden md:block text-white/30" />
            <span>GET SELECTED</span> <ArrowRight className="hidden md:block text-white/30" />
            <span>EXECUTE</span> <ArrowRight className="hidden md:block text-white/30" />
            <span>GROW</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-card text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Ready to enter the system?</h2>
          <Button asChild size="lg" className="rounded-none h-14 px-8 text-lg shadow-md">
            <Link href="/apply">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
