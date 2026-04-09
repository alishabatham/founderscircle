import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const applySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  idea: z.string().min(10, "Please describe what you are building"),
  stage: z.string().min(1, "Stage is required"),
  experience: z.string().min(10, "Please describe your background"),
  previousWork: z.string().optional(),
  intent: z.string().min(10, "Please tell us why you want to join"),
  goals: z.string().min(10, "Please describe your goals"),
});

type FormValues = z.infer<typeof applySchema>;

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      name: "", email: "", idea: "", stage: "", experience: "", previousWork: "", intent: "", goals: ""
    }
  });

  const sectionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) isValid = await form.trigger(["name", "email"]);
    if (step === 2) isValid = await form.trigger(["idea", "stage"]);
    if (step === 3) isValid = await form.trigger(["experience"]);
    if (step === 4) isValid = true;
    
    if (isValid) setStep((s) => Math.min(s + 1, 4));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const onSubmit = (data: FormValues) => {
    console.log("Application data:", data);
    toast({
      title: "Application Submitted",
      description: "We will review your application and get back to you soon.",
    });
    // In a real app, reset form or redirect to success page
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 bg-background border-b border-border text-center px-6">
        <motion.div {...sectionProps} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Join the Execution-Driven Founder Ecosystem
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
            FCC is built for founders who are serious about execution, accountability, and real growth.
          </p>
          <div className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive font-semibold text-sm tracking-widest uppercase border border-destructive/20">
            This is not open to everyone. Only committed builders are selected.
          </div>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-foreground uppercase">Step {step} of 4</span>
              <span className="text-sm text-muted-foreground">
                {step === 1 ? "Basic Info" : step === 2 ? "Startup Details" : step === 3 ? "Experience" : "Intent"}
              </span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded overflow-hidden">
              <div className="h-full bg-primary transition-all duration-300 ease-out" style={{ width: `${(step / 4) * 100}%` }} />
            </div>
          </div>

          <div className="bg-card border border-border shadow-sm p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Name</FormLabel>
                        <FormControl><Input placeholder="Jane Doe" className="rounded-none border-border h-12" {...field} data-testid="input-apply-name" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl><Input placeholder="jane@example.com" type="email" className="rounded-none border-border h-12" {...field} data-testid="input-apply-email" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <FormField control={form.control} name="idea" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">What are you building?</FormLabel>
                        <FormControl><Textarea placeholder="Describe your startup..." className="rounded-none border-border min-h-[120px]" {...field} data-testid="input-apply-idea" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="stage" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Current Stage</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none border-border h-12" data-testid="select-apply-stage">
                              <SelectValue placeholder="Select a stage" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="idea">Idea Stage</SelectItem>
                            <SelectItem value="mvp">MVP Stage</SelectItem>
                            <SelectItem value="revenue">Revenue Stage</SelectItem>
                            <SelectItem value="growth">Growth Stage</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <FormField control={form.control} name="experience" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Describe your background / experience</FormLabel>
                        <FormControl><Textarea placeholder="What have you done before?" className="rounded-none border-border min-h-[120px]" {...field} data-testid="input-apply-experience" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="previousWork" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Previous work (optional)</FormLabel>
                        <FormControl><Input placeholder="Links to past projects, GitHub, etc." className="rounded-none border-border h-12" {...field} data-testid="input-apply-previous-work" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <FormField control={form.control} name="intent" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Why do you want to join FCC?</FormLabel>
                        <FormControl><Textarea placeholder="Your motivation..." className="rounded-none border-border min-h-[100px]" {...field} data-testid="input-apply-intent" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="goals" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">What are your current goals?</FormLabel>
                        <FormControl><Textarea placeholder="What do you want to achieve in the next 3-6 months?" className="rounded-none border-border min-h-[100px]" {...field} data-testid="input-apply-goals" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </motion.div>
                )}

                <div className="flex justify-between pt-6 border-t border-border">
                  {step > 1 ? (
                    <Button type="button" variant="outline" onClick={prevStep} className="rounded-none border-border" data-testid="button-apply-back">
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}
                  
                  {step < 4 ? (
                    <Button type="button" onClick={nextStep} className="rounded-none" data-testid="button-apply-next">
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" className="rounded-none" data-testid="button-apply-submit">
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            FCC is built for founders who execute. If you're not actively building, this may not be the right place.
          </p>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-24 px-6 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...sectionProps} className="text-2xl font-bold text-foreground mb-12 text-center">Selection Process</motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: 1, title: "Application", desc: "Submit your details" },
              { step: 2, title: "Evaluation", desc: "We review your intent" },
              { step: 3, title: "Entry", desc: "Start executing" }
            ].map((item, i) => (
              <motion.div key={i} {...sectionProps} transition={{ ...sectionProps.transition, delay: i * 0.1 }} className="p-6 bg-card border border-border shadow-sm text-center">
                <div className="text-primary font-black text-xl mb-2">{item.step}. {item.title}</div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Push */}
      <section className="py-24 px-6 bg-card text-center">
        <motion.div {...sectionProps} className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">If you're serious about building, apply. If not, this isn't for you.</h2>
        </motion.div>
      </section>
    </div>
  );
}
