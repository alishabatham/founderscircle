import { ArrowRight, CheckCircle2, Cpu, BarChart, Users, Settings, Zap } from "lucide-react";
import { Link } from "wouter";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">

      {/* Hero */}
      <section className="py-32 md:py-44 border-b border-border bg-white px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-8">The Process</p>
          <h1
            className="font-black leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            How{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }} className="text-primary">
              FCC
            </span>{" "}
            Works
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mt-10 font-light">
            A structured system designed to move founders from application to execution and sustainable growth.
          </p>
        </div>
      </section>

      {/* Entry Process */}
      <section className="py-28 border-b border-border bg-card px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">01 / Entry</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            Entry{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }} className="text-foreground/50">
              Process
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { step: 1, title: "Application", desc: "Submit your idea and intent." },
              { step: 2, title: "Evaluation", desc: "We assess clarity, seriousness, and execution mindset." },
              { step: 3, title: "Observation", desc: "We monitor participation and commitment." },
              { step: 4, title: "Selection", desc: "Only serious founders enter the system." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10">
                <div
                  className="font-black text-foreground/10 leading-none mb-8 select-none"
                  style={{ fontSize: "5rem", fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Stages */}
      <section className="py-28 border-b border-border bg-white px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">02 / Execution Stages</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            The Four{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }} className="text-primary">
              Phases
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { title: "Idea Stage", desc: "Validate and refine your concept with real market feedback." },
              { title: "MVP Stage", desc: "Build and test a minimum viable product quickly." },
              { title: "Revenue Stage", desc: "Monetize your solution and prove the model." },
              { title: "Growth Stage", desc: "Scale what works with full execution support." }
            ].map((stage, i) => (
              <div key={i} className="bg-card p-8 md:p-10 border-t-4 border-primary">
                <div className="text-xs font-bold tracking-widest text-primary mb-4">0{i+1}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{stage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="py-28 border-b border-border bg-card px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">03 / Tracking</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            Progress Tracking
          </h2>
          <div className="space-y-0 divide-y divide-border border-t border-border">
            {["Defined tasks per phase", "Regular progress updates", "Weekly accountability reviews", "Performance tracking with metrics"].map((item, i) => (
              <div key={i} className="flex items-center gap-6 py-6 bg-white px-6">
                <BarChart className="h-6 w-6 text-primary shrink-0" />
                <span className="text-lg font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-28 border-b border-border bg-white px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">04 / Collaboration</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            Work Together,{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }} className="text-foreground/50">
              Build Faster
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { icon: <Users className="h-8 w-8" />, title: "Work Together", desc: "Collaborate with other founders on real problems, not hypotheticals." },
              { icon: <CheckCircle2 className="h-8 w-8" />, title: "Share Resources", desc: "Access shared knowledge, tools, and networks within the circle." },
              { icon: <Zap className="h-8 w-8" />, title: "Solve Problems", desc: "Tackle real startup challenges with peers who've faced the same." }
            ].map((item, i) => (
              <div key={i} className="bg-card p-10 md:p-12">
                <div className="text-primary mb-8">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support System */}
      <section className="py-28 border-b border-border bg-card px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">05 / Support</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            Support System
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { icon: <Cpu className="h-6 w-6" />, label: "Product Development" },
              { icon: <BarChart className="h-6 w-6" />, label: "Marketing" },
              { icon: <Settings className="h-6 w-6" />, label: "Strategy" },
              { icon: <Zap className="h-6 w-6" />, label: "Scaling" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 flex flex-col items-center justify-center gap-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">{item.icon}</div>
                <span className="font-bold text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Summary */}
      <section className="py-28 border-b border-border bg-foreground px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 font-black text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {["APPLY", "GET SELECTED", "EXECUTE", "GROW"].map((step, i) => (
              <div key={i} className="flex items-center gap-6 md:gap-10">
                <span
                  className="text-primary"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                >
                  {step}
                </span>
                {i < 3 && <ArrowRight className="hidden md:block h-8 w-8 text-white/20 shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white text-center px-6 md:px-12">
        <div className="container max-w-3xl mx-auto">
          <h2
            className="font-black leading-[0.9] tracking-tight mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to enter{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }} className="text-primary">
              the system?
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
