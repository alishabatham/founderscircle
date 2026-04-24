import { CheckCircle2, ArrowRight, XCircle, Target, LayoutDashboard } from "lucide-react";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">

      {/* Hero */}
      <section className="py-32 md:py-44 border-b border-border bg-white px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-8">About Us</p>
          <h1
            className="font-black leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            Built for Founders{" "}
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }}
              className="text-primary"
            >
              Who Execute
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mt-10 font-light">
            Founders' Circle Connect is a structured ecosystem designed to help founders move from ideas to execution through clarity, accountability, and the right network.
          </p>
        </div>
      </section>

      {/* Why Startups Fail */}
      <section className="py-28 border-b border-border bg-card px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">01 / The Problem</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            Why Most{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }} className="text-foreground/50">
              Startups Fail
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { title: "Lack of Execution", desc: "Too much planning, not enough shipping. Action is the only metric." },
              { title: "Lack of Clarity", desc: "No clear roadmap. Jumping between tasks without structure." },
              { title: "Weak Networks", desc: "Surrounded by talkers instead of builders who hold you accountable." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 md:p-12">
                <XCircle className="h-8 w-8 text-destructive mb-8" />
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What FCC Is */}
      <section className="py-28 border-b border-border bg-white px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">02 / What We Are</span>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="font-black leading-[0.95] tracking-tight mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
              >
                A Structured{" "}
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }} className="text-primary">
                  System
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                Not a community. Not networking. A system for execution — built to move founders from idea to revenue with maximum accountability.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {["Build", "Execute", "Track", "Grow"].map((step, i) => (
                <div key={i} className="px-6 py-4 bg-card border border-border text-lg font-bold text-foreground flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How FCC Works */}
      <section className="py-28 border-b border-border bg-card px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">03 / Entry Process</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            How FCC Works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {["Apply", "Evaluate", "Observe", "Select"].map((step, i) => (
              <div key={i} className="bg-white p-8 md:p-10">
                <div className="text-5xl font-black text-primary/20 mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>0{i+1}</div>
                <div className="text-foreground font-bold text-lg">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core System */}
      <section className="py-28 border-b border-border bg-white px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">04 / Core System</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            The Core System
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-card p-10 md:p-12">
              <LayoutDashboard className="h-10 w-10 text-primary mb-8" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Phase-Based Execution</h3>
              <p className="text-muted-foreground leading-relaxed">Structured progression from Idea → MVP → Revenue → Growth.</p>
            </div>
            <div className="bg-card p-10 md:p-12">
              <Target className="h-10 w-10 text-primary mb-8" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Task & Performance Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">Clear weekly targets, measurable progress, and mandatory reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-28 border-b border-border bg-foreground text-white px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-8">Vision</p>
              <p
                className="leading-tight font-light text-white"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                "To build a high-quality ecosystem of founders focused on execution, not noise."
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-8">Mission</p>
              <p
                className="leading-tight font-light text-white"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                "To help founders move from idea to execution and from execution to scalable growth through structured systems."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why FCC Is Different */}
      <section className="py-28 border-b border-border bg-white px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">05 / Differentiation</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            Why FCC Is{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }} className="text-primary">
              Different
            </span>
          </h2>
          <div className="space-y-0 divide-y divide-border border-t border-border">
            {[
              { f: "Structured System", v: "Random Communities" },
              { f: "Filtered Entry", v: "Open Access" },
              { f: "Execution Tracking", v: "Passive Learning" },
              { f: "Real Collaboration", v: "Surface Networking" }
            ].map((item, i) => (
              <div key={i} className="flex items-center py-5 gap-8">
                <div className="flex items-center gap-3 flex-1 text-primary font-semibold">
                  <CheckCircle2 className="h-5 w-5 shrink-0" /> {item.f}
                </div>
                <div className="flex items-center gap-3 flex-1 text-muted-foreground line-through">
                  <XCircle className="h-5 w-5 shrink-0 text-destructive/50" /> {item.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-28 bg-card text-center px-6 md:px-12">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="font-black leading-[0.9] tracking-tight mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            FCC is where founders{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }} className="text-primary">
              execute.
            </span>
          </h2>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-foreground text-white text-base font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Apply Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
