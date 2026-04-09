import { ArrowRight, CheckCircle2, ShieldAlert, BarChart, Users, Compass, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 bg-white border-b border-border text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Founder Circle
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            A structured program designed to help founders execute, grow, and scale with clarity and accountability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-none h-12 px-8 shadow-md">
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none h-12 px-8 border-border">
              <Link href="/how-it-works">View How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Program Overview</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Founder Circle is a structured execution program built for serious founders focused on building real startups.
          </p>
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase border border-primary/20">
            Not a community. Not networking. A system for execution.
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-6 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What You Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Layers />, title: "Structured Execution System", desc: "Clear frameworks to build without distraction." },
              { icon: <BarChart />, title: "Phase-Based Growth", desc: "Idea → MVP → Revenue → Growth." },
              { icon: <CheckCircle2 />, title: "Accountability & Tracking", desc: "Consistent measurement of your progress." },
              { icon: <Users />, title: "Founder Collaboration Network", desc: "Connect with high-caliber peers." },
              { icon: <Compass />, title: "Expert Guidance", desc: "Support in Product, Marketing, and Strategy." },
              { icon: <ShieldAlert />, title: "Curated Entry", desc: "A filtered environment of builders only." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-card border border-border shadow-sm">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Program Works */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How It Works</h2>
          <div className="space-y-4">
            {[
              "You enter after selection",
              "Placed into a specific stage based on progress",
              "Follow structured execution paths",
              "Tracked and reviewed regularly"
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border border-border bg-white shadow-sm">
                <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-bold shrink-0">{i+1}</div>
                <span className="text-lg font-medium text-foreground">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 px-6 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Outcomes</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Faster execution", "Clear direction", "Better decision-making", "Access to serious founders", "Real progress, not just learning"].map((benefit, i) => (
              <div key={i} className="px-6 py-3 bg-card border border-border rounded-full shadow-sm font-medium text-foreground">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For + Not For */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-primary/20 bg-primary/5">
            <h3 className="text-xl font-bold text-foreground mb-4 border-b border-primary/20 pb-2">Who It's For</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-muted-foreground">Builders ready to execute immediately</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-muted-foreground">Founders who need structure and accountability</span></li>
            </ul>
          </div>
          <div className="p-8 border border-destructive/20 bg-destructive/5">
            <h3 className="text-xl font-bold text-foreground mb-4 border-b border-destructive/20 pb-2">Who It's Not For</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-destructive shrink-0" /> <span className="text-muted-foreground">Those looking for casual networking</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-destructive shrink-0" /> <span className="text-muted-foreground">People wanting to passively consume content</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 px-6 bg-slate-800 border-b border-border text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Why This Matters</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">The Struggle</h3>
              <ul className="space-y-2 text-white/60">
                <li>• Work alone</li>
                <li>• Lack structure</li>
                <li>• Don't track progress</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">The Solution</h3>
              <ul className="space-y-2 text-white/60">
                <li>• Proven Systems</li>
                <li>• Strict Accountability</li>
                <li>• Real Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 bg-card text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Apply to Founder Circle and start executing with clarity.</h2>
          <Button asChild size="lg" className="rounded-none h-14 px-8 text-lg shadow-md">
            <Link href="/apply">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
