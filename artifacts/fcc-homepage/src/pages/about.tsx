import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Zap, LayoutDashboard, ArrowRight, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutPage() {
  const sectionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Hero */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-b border-border text-center px-6">
        <motion.div {...sectionProps} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Built for Founders Who <span className="text-primary">Execute</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Founders' Circle Connect is a structured ecosystem designed to help founders move from ideas to execution through clarity, accountability, and the right network.
          </p>
        </motion.div>
      </section>

      {/* 2. The Problem */}
      <section className="py-24 px-6 bg-gray-50 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...sectionProps} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Most Startups Fail</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lack of Execution", desc: "Too much planning, not enough shipping. Action is the only metric." },
              { title: "Lack of Clarity", desc: "No clear roadmap. Jumping between tasks without structure." },
              { title: "Weak Networks", desc: "Surrounded by talkers instead of builders who hold you accountable." }
            ].map((item, i) => (
              <motion.div key={i} {...sectionProps} transition={{ ...sectionProps.transition, delay: i * 0.1 }} className="p-8 bg-white border border-border shadow-sm">
                <XCircle className="h-8 w-8 text-destructive mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What FCC Is */}
      <section className="py-24 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...sectionProps}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
              Not a community. Not networking. A system for execution.
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">A Structured System</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Build", "Execute", "Track", "Grow"].map((step, i) => (
                <div key={i} className="px-6 py-3 bg-gray-50 border border-border rounded shadow-sm text-lg font-medium text-gray-900 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {step}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. How FCC Works */}
      <section className="py-24 px-6 bg-gray-50 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...sectionProps} className="text-3xl font-bold text-gray-900 mb-12 text-center">How FCC Works</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {["Apply", "Evaluate", "Observe", "Select"].map((step, i) => (
              <motion.div key={i} {...sectionProps} transition={{ ...sectionProps.transition, delay: i * 0.1 }} className="p-6 bg-white border border-border shadow-sm text-center relative">
                <div className="text-primary font-black text-2xl mb-2">0{i+1}</div>
                <div className="text-gray-900 font-semibold">{step}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core System */}
      <section className="py-24 px-6 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...sectionProps} className="text-3xl font-bold text-gray-900 mb-12 text-center">The Core System</motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...sectionProps} className="p-8 border border-border bg-slate-50 shadow-sm">
              <LayoutDashboard className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phase-Based Execution</h3>
              <p className="text-muted-foreground mb-4">Structured progression from Idea → MVP → Revenue → Growth.</p>
            </motion.div>
            <motion.div {...sectionProps} className="p-8 border border-border bg-slate-50 shadow-sm">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Task & Performance Tracking</h3>
              <p className="text-muted-foreground mb-4">Clear weekly targets, measurable progress, and mandatory reviews.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6 & 7. Vision & Mission */}
      <section className="py-24 px-6 bg-gray-900 text-white border-b border-border text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div {...sectionProps}>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Vision</h2>
            <p className="text-2xl font-light leading-relaxed">"To build a high-quality ecosystem of founders focused on execution, not noise."</p>
          </motion.div>
          <motion.div {...sectionProps}>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Mission</h2>
            <p className="text-2xl font-light leading-relaxed">"To help founders move from idea to execution and from execution to scalable growth through structured systems and accountability."</p>
          </motion.div>
        </div>
      </section>

      {/* 8. Why FCC Is Different */}
      <section className="py-24 px-6 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...sectionProps} className="text-3xl font-bold text-gray-900 mb-12 text-center">Why FCC Is Different</motion.h2>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded overflow-hidden shadow-sm">
            {[
              { f: "Structured System", v: "Random Communities" },
              { f: "Filtered Entry", v: "Open Access" },
              { f: "Execution Tracking", v: "Passive Learning" },
              { f: "Real Collaboration", v: "Surface Networking" }
            ].map((item, i) => (
              <motion.div key={i} {...sectionProps} className="flex bg-white">
                <div className="w-1/2 p-6 flex items-center gap-3 bg-primary/5 text-primary font-medium border-r border-border">
                  <CheckCircle2 className="h-5 w-5 shrink-0" /> {item.f}
                </div>
                <div className="w-1/2 p-6 flex items-center gap-3 text-muted-foreground line-through decoration-muted-foreground/30">
                  <XCircle className="h-5 w-5 shrink-0" /> {item.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Who It's For */}
      <section className="py-24 px-6 bg-gray-50 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 {...sectionProps} className="text-3xl font-bold text-gray-900 mb-8">Who It's For</motion.h2>
          <motion.p {...sectionProps} className="text-xl text-muted-foreground mb-8">
            Serious founders, ready-to-execute builders, and those who thrive on structure.
          </motion.p>
          <motion.p {...sectionProps} className="text-sm font-medium text-destructive uppercase tracking-wider">
            Not for casual networkers or idea collectors.
          </motion.p>
        </div>
      </section>

      {/* 10. Closing */}
      <section className="py-24 px-6 bg-white text-center">
        <motion.div {...sectionProps} className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            FCC is where founders move from ideas to execution, and from execution to growth.
          </h2>
          <Button asChild size="lg" className="rounded-none h-14 px-8 text-lg shadow-md hover:scale-[1.02] transition-transform">
            <Link href="/apply">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
