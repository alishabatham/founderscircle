import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cpu, BarChart, Users, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowItWorksPage() {
  const sectionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Hero */}
      <section className="py-24 bg-background border-b border-border text-center px-6">
        <motion.div {...sectionProps} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            How FCC Works
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A structured system designed to move founders from application to execution and growth.
          </p>
        </motion.div>
      </section>

      {/* 2. Entry Process */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...sectionProps} className="text-3xl font-bold text-foreground mb-12 text-center">Entry Process</motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Application", desc: "Submit your idea and intent." },
              { step: 2, title: "Evaluation", desc: "We assess clarity, seriousness, and execution mindset." },
              { step: 3, title: "Observation", desc: "We monitor participation and commitment." },
              { step: 4, title: "Selection", desc: "Only serious founders enter the system." }
            ].map((item, i) => (
              <motion.div key={i} {...sectionProps} transition={{ ...sectionProps.transition, delay: i * 0.1 }} className="p-6 border border-border bg-secondary shadow-sm relative">
                <div className="text-4xl font-black text-foreground/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Execution System */}
      <section className="py-24 px-6 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...sectionProps} className="text-3xl font-bold text-foreground mb-12 text-center">Execution System Stages</motion.h2>
          <div className="flex flex-col md:flex-row gap-4">
            {[
              { title: "Idea Stage", desc: "Validate and refine" },
              { title: "MVP Stage", desc: "Build and test" },
              { title: "Revenue Stage", desc: "Monetize" },
              { title: "Growth Stage", desc: "Scale" }
            ].map((stage, i) => (
              <motion.div key={i} {...sectionProps} transition={{ ...sectionProps.transition, delay: i * 0.1 }} className="flex-1 p-6 border border-primary/20 bg-card shadow-sm text-center">
                <h3 className="text-lg font-bold text-primary mb-2">{stage.title}</h3>
                <p className="text-muted-foreground text-sm">{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Progress Tracking */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.h2 {...sectionProps} className="text-3xl font-bold text-foreground mb-12 text-center">Progress Tracking</motion.h2>
          <div className="space-y-4">
            {["Defined tasks", "Regular updates", "Weekly reviews", "Performance tracking"].map((item, i) => (
              <motion.div key={i} {...sectionProps} transition={{ ...sectionProps.transition, delay: i * 0.1 }} className="flex items-center gap-4 p-4 border border-border bg-secondary shadow-sm">
                <BarChart className="h-6 w-6 text-primary shrink-0" />
                <span className="text-lg font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Collaboration */}
      <section className="py-24 px-6 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...sectionProps} className="text-3xl font-bold text-foreground mb-12 text-center">Collaboration</motion.h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { title: "Work Together", desc: "Work with other founders" },
              { title: "Share", desc: "Share resources" },
              { title: "Solve", desc: "Solve real problems together" }
            ].map((item, i) => (
              <motion.div key={i} {...sectionProps} transition={{ ...sectionProps.transition, delay: i * 0.1 }} className="p-8 border border-border bg-card shadow-sm">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Support System */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 {...sectionProps} className="text-3xl font-bold text-foreground mb-12">Support System</motion.h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Cpu className="h-6 w-6" />, label: "Product Development" },
              { icon: <BarChart className="h-6 w-6" />, label: "Marketing" },
              { icon: <Settings className="h-6 w-6" />, label: "Strategy" },
              { icon: <Zap className="h-6 w-6" />, label: "Scaling" }
            ].map((item, i) => (
              <motion.div key={i} {...sectionProps} transition={{ ...sectionProps.transition, delay: i * 0.1 }} className="p-6 border border-border bg-secondary flex flex-col items-center justify-center gap-3 shadow-sm">
                <div className="text-primary">{item.icon}</div>
                <span className="font-semibold text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Flow Summary */}
      <section className="py-32 px-6 bg-black border-b border-border">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...sectionProps} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-black text-2xl md:text-4xl text-primary">
            <span>APPLY</span> <ArrowRight className="hidden md:block text-white/30" />
            <span>GET SELECTED</span> <ArrowRight className="hidden md:block text-white/30" />
            <span>EXECUTE</span> <ArrowRight className="hidden md:block text-white/30" />
            <span>GROW</span>
          </motion.div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-24 px-6 bg-card text-center">
        <motion.div {...sectionProps} className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Ready to enter the system?</h2>
          <Button asChild size="lg" className="rounded-none h-14 px-8 text-lg shadow-md hover:scale-[1.02] transition-transform">
            <Link href="/apply">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
