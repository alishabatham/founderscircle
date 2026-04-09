import { useState } from "react";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Link } from "wouter";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact submission:", data);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 bg-white border-b border-border text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a question or want to connect? Reach out to us directly.
          </p>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">

          {/* Details */}
          <div className="md:col-span-2 p-8 bg-white border border-border shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-6">Contact Info</h2>
            <p className="text-muted-foreground mb-8">
              We aim to respond to all serious inquiries within 24-48 hours.
            </p>
            <div className="flex items-center gap-4 text-foreground font-medium">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <a href="mailto:nxresearch@nxresearch.com" className="hover:text-primary transition-colors">
                nxresearch@nxresearch.com
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="p-12 text-center border border-border bg-white shadow-sm">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent</h3>
                <p className="text-muted-foreground">We've received your inquiry and will get back to you shortly.</p>
                <Button variant="outline" className="mt-8 rounded-none border-border" onClick={() => { setSubmitted(false); form.reset(); }}>
                  Send another message
                </Button>
              </div>
            ) : (
              <div className="p-8 border border-border bg-white shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Name</FormLabel>
                          <FormControl><Input placeholder="Your Name" className="rounded-none border-border" {...field} data-testid="input-contact-name" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email</FormLabel>
                          <FormControl><Input placeholder="you@example.com" type="email" className="rounded-none border-border" {...field} data-testid="input-contact-email" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none border-border" data-testid="select-contact-subject">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="membership">Membership</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="press">Press</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Message</FormLabel>
                        <FormControl><Textarea placeholder="How can we help?" className="rounded-none border-border min-h-[150px]" {...field} data-testid="input-contact-message" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full rounded-none h-12 text-lg" data-testid="button-contact-submit">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Community Invite */}
      <section className="py-32 px-6 bg-white text-center border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">Want to be part of FCC?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Apply to join the ecosystem and start building with serious founders.
          </p>
          <Button asChild size="lg" className="rounded-none h-14 px-8 text-lg shadow-md">
            <Link href="/apply">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
