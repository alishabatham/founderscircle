import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white text-foreground overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full flex flex-col justify-end"
        style={{ minHeight: "100svh" }}
      >
        {/* Background gradient that mimics MU's full-bleed section */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40" />

        {/* Decorative large background word */}
        <div
          className="absolute inset-0 flex items-center justify-end pr-8 md:pr-24 pointer-events-none select-none"
          aria-hidden
        >
          <span
            className="text-[18vw] font-black text-foreground/[0.04] leading-none tracking-tighter"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            FCC
          </span>
        </div>

        {/* Hero content — bottom-left like MU */}
        <div className="relative z-10 container max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28 pt-32">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-6 opacity-80">
            Founders' Circle Connect
          </p>

          {/* MU-style large mixed-font headline */}
          <h1
            className="font-black leading-[0.9] tracking-tight mb-10"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 9rem)",
              fontFamily: "'Outfit', sans-serif"
            }}
          >
            Execute<br />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "clamp(4rem, 13vw, 10rem)",
                letterSpacing: "-0.02em",
              }}
              className="text-primary"
            >
              by Building
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12 font-light">
            A rigorous execution system designed to help founders move from ideas to revenue — through clarity, strict accountability, and the right network.
          </p>

          {/* MU-style pill buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-foreground text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              data-testid="hero-cta-apply"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 border border-foreground/30 text-foreground text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-foreground/5 transition-colors"
              data-testid="hero-cta-learn"
            >
              How It Works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { num: "3x", label: "Faster Execution", sub: "than solo founders" },
              { num: "100%", label: "Structured Path", sub: "from idea to revenue" },
              { num: "4", label: "Execution Phases", sub: "Idea → MVP → Revenue → Growth" },
              { num: "0", label: "Noise. Zero.", sub: "Only action counts here" },
            ].map((stat, i) => (
              <div key={i} className="py-12 px-8 md:px-10">
                <div
                  className="font-black leading-none mb-3"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontFamily: "'Outfit', sans-serif"
                  }}
                >
                  {stat.num}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT FCC IS ──────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 border-b border-border bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            {/* Left: Large editorial heading */}
            <div className="md:col-span-5">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">01 / What We Are</span>
              <h2
                className="font-black leading-[0.95] tracking-tight"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  fontFamily: "'Outfit', sans-serif"
                }}
              >
                A system,{" "}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                  }}
                  className="text-primary"
                >
                  not a community.
                </span>
              </h2>
            </div>

            {/* Right: Content */}
            <div className="md:col-span-7 md:pt-16">
              <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-light max-w-xl">
                We remove the noise. No inspirational quotes, no endless networking events. Just a rigorous framework to help you execute consistently.
              </p>
              <div className="border-l-4 border-primary pl-6 py-2 mb-12">
                <p className="text-foreground font-semibold text-lg leading-snug">
                  NOT a community. NOT networking.
                </p>
                <p className="text-muted-foreground mt-1 text-sm">
                  If you want to chat, join a Slack group. If you want to build, join FCC.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Validate", desc: "Ruthlessly test your idea" },
                  { label: "Build", desc: "Ship an MVP in weeks" },
                  { label: "Execute", desc: "Weekly sprints, hard deadlines" },
                  { label: "Grow", desc: "Scale what actually works" },
                ].map((item, i) => (
                  <div key={i} className="border border-border p-5 bg-card">
                    <div className="text-xs font-bold tracking-widest uppercase text-primary mb-2">0{i + 1}</div>
                    <div className="font-bold text-foreground text-lg leading-tight mb-1">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">02 / The Problem</span>
              <h2
                className="font-black leading-[0.95] tracking-tight"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontFamily: "'Outfit', sans-serif"
                }}
              >
                Most founders fail<br />
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                  }}
                  className="text-foreground/60"
                >
                  for the same reasons.
                </span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-sm font-light md:text-right">
              It's rarely a lack of ambition. It's always a lack of system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { num: "01", title: "No Execution System", desc: "Building without a framework leads to endless pivoting and zero shipping." },
              { num: "02", title: "No Clarity", desc: "Drowning in advice but starving for clear, actionable next steps." },
              { num: "03", title: "Wrong Network", desc: "Surrounded by wantrepreneurs instead of serious builders holding you to a standard." },
            ].map((p, i) => (
              <div key={i} className="bg-white p-10 md:p-12">
                <XCircle className="h-8 w-8 text-destructive mb-8" />
                <div className="text-xs font-bold tracking-widest text-muted-foreground mb-4">{p.num}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE FCC SYSTEM ───────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 border-b border-border bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">03 / The System</span>
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5">
              <h2
                className="font-black leading-[0.95] tracking-tight mb-12"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  fontFamily: "'Outfit', sans-serif"
                }}
              >
                The FCC{" "}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                  }}
                  className="text-primary"
                >
                  execution
                </span>
                {" "}system.
              </h2>

              {/* Phase timeline */}
              <div className="space-y-0">
                {[
                  { phase: "Idea", label: "Validate ruthlessly" },
                  { phase: "MVP", label: "Ship in weeks" },
                  { phase: "Revenue", label: "Get paid" },
                  { phase: "Growth", label: "Scale what works" },
                ].map((item, i) => (
                  <div key={i} className="flex items-stretch gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mt-4 shrink-0" />
                      {i < 3 && <div className="w-px flex-1 bg-border min-h-[3rem]" />}
                    </div>
                    <div className="pb-8">
                      <div className="text-xs font-bold tracking-widest uppercase text-primary mb-1">
                        Phase {i + 1}: {item.phase}
                      </div>
                      <div className="text-foreground font-semibold text-lg">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="space-y-0 divide-y divide-border border-t border-border">
                {[
                  { title: "Structured execution system", desc: "Weekly sprints, hard deadlines, zero excuses. No room for drift." },
                  { title: "Phase-based growth", desc: "Move systematically: Idea → MVP → Revenue → Growth. One stage at a time." },
                  { title: "Accountability & tracking", desc: "Metrics over talk. If you don't ship, you don't stay." },
                  { title: "Access to serious builders", desc: "A curated room of peers executing at your level or higher." },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-6 py-8">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">04 / Process</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-20"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontFamily: "'Outfit', sans-serif"
            }}
          >
            Four steps.{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 600,
              }}
              className="text-foreground/50"
            >
              No shortcuts.
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
            {[
              { step: "01", title: "Apply", desc: "Submit your profile and current startup stage." },
              { step: "02", title: "Evaluated", desc: "We review your bias toward action, not ideas." },
              { step: "03", title: "Selected", desc: "Only serious builders are admitted to FCC." },
              { step: "04", title: "Execute", desc: "Enter the system. Start shipping immediately." },
            ].map((step, i) => (
              <div key={i} className="bg-white p-10">
                <div
                  className="font-black text-foreground/10 leading-none mb-8 select-none"
                  style={{ fontSize: "5rem", fontFamily: "'Outfit', sans-serif" }}
                >
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 border-b border-border bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">05 / Who It's For</span>
              <h2
                className="font-black leading-[0.95] tracking-tight"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  fontFamily: "'Outfit', sans-serif"
                }}
              >
                Built for founders{" "}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                  }}
                  className="text-primary"
                >
                  who ship.
                </span>
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-xl text-muted-foreground font-light mb-12 leading-relaxed">
                FCC is not a place to explore your feelings about entrepreneurship. It is a structured environment for those ready to do the work.
              </p>

              <div className="mb-10">
                <div className="text-xs font-bold tracking-widest uppercase text-foreground mb-4">For:</div>
                <div className="space-y-0 divide-y divide-border border-t border-border">
                  {[
                    "Founders building real startups with a bias toward action",
                    "People ready to execute and be held accountable",
                    "Individuals who want structure, not cheerleading"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-5">
                      <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-destructive mb-4">Not For:</div>
                <div className="space-y-0 divide-y divide-border border-t border-border">
                  {[
                    "Passive learners wanting another course",
                    "Idea collectors who never build",
                    "Casual networkers looking for coffee chats"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-5 opacity-60">
                      <XCircle className="text-destructive w-5 h-5 shrink-0" />
                      <span className="text-foreground font-medium line-through decoration-foreground/30">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 bg-foreground text-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50 mb-6">Ready?</p>
              <h2
                className="font-black leading-[0.9] tracking-tight text-white"
                style={{
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  fontFamily: "'Outfit', sans-serif"
                }}
              >
                Stop{" "}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                  }}
                  className="text-primary"
                >
                  talking.
                </span>
                <br />Start building.
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:items-end shrink-0">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-primary text-white text-base font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
                data-testid="footer-cta-apply"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-border bg-white py-12">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
            <div className="font-bold text-foreground tracking-widest uppercase text-lg">FCC</div>
            <div className="flex gap-8">
              <Link href="/how-it-works" className="hover:text-foreground transition-colors">Process</Link>
              <Link href="/programs" className="hover:text-foreground transition-colors">Programs</Link>
              <Link href="/apply" className="hover:text-foreground transition-colors">Apply</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Founders' Circle Connect.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
