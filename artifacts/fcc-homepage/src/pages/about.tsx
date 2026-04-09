import { CheckCircle2, Target, LayoutDashboard, ArrowRight, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 bg-white border-b border-border text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Built for Founders Who <span className="text-primary">Execute</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Founders' Circle Connect is a structured ecosystem designed to help founders move from ideas to execution through clarity, accountability, and the right network.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Most Startups Fail</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lack of Execution", desc: "Too much planning, not enough shipping. Action is the only metric." },
              { title: "Lack of Clarity", desc: "No clear roadmap. Jumping between tasks without structure." },
              { title: "Weak Networks", desc: "Surrounded by talkers instead of builders who hold you accountable." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-border shadow-sm">
                <XCircle className="h-8 w-8 text-destructive mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What FCC Is */}
      <section className="py-24 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
            Not a community. Not networking. A system for execution.
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-12">A Structured System</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Build", "Execute", "Track", "Grow"].map((step, i) => (
              <div key={i} className="px-6 py-3 bg-card border border-border rounded shadow-sm text-lg font-medium text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How FCC Works */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How FCC Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {["Apply", "Evaluate", "Observe", "Select"].map((step, i) => (
              <div key={i} className="p-6 bg-white border border-border shadow-sm text-center relative">
                <div className="text-primary font-black text-2xl mb-2">0{i+1}</div>
                <div className="text-foreground font-semibold">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core System */}
      <section className="py-24 px-6 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">The Core System</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-border bg-card shadow-sm">
              <LayoutDashboard className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Phase-Based Execution</h3>
              <p className="text-muted-foreground mb-4">Structured progression from Idea → MVP → Revenue → Growth.</p>
            </div>
            <div className="p-8 border border-border bg-card shadow-sm">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Task & Performance Tracking</h3>
              <p className="text-muted-foreground mb-4">Clear weekly targets, measurable progress, and mandatory reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 bg-slate-800 border-b border-border text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Vision</h2>
            <p className="text-2xl font-light leading-relaxed text-white">"To build a high-quality ecosystem of founders focused on execution, not noise."</p>
          </div>
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Mission</h2>
            <p className="text-2xl font-light leading-relaxed text-white">"To help founders move from idea to execution and from execution to scalable growth through structured systems and accountability."</p>
          </div>
        </div>
      </section>

      {/* Why FCC Is Different */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why FCC Is Different</h2>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded overflow-hidden shadow-sm">
            {[
              { f: "Structured System", v: "Random Communities" },
              { f: "Filtered Entry", v: "Open Access" },
              { f: "Execution Tracking", v: "Passive Learning" },
              { f: "Real Collaboration", v: "Surface Networking" }
            ].map((item, i) => (
              <div key={i} className="flex bg-white">
                <div className="w-1/2 p-6 flex items-center gap-3 bg-primary/5 text-primary font-medium border-r border-border">
                  <CheckCircle2 className="h-5 w-5 shrink-0" /> {item.f}
                </div>
                <div className="w-1/2 p-6 flex items-center gap-3 text-muted-foreground line-through decoration-muted-foreground/30">
                  <XCircle className="h-5 w-5 shrink-0" /> {item.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Who It's For</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Serious founders, ready-to-execute builders, and those who thrive on structure.
          </p>
          <p className="text-sm font-medium text-destructive uppercase tracking-wider">
            Not for casual networkers or idea collectors.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 px-6 bg-card text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            FCC is where founders move from ideas to execution, and from execution to growth.
          </h2>
          <Button asChild size="lg" className="rounded-none h-14 px-8 text-lg shadow-md">
            <Link href="/apply">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
