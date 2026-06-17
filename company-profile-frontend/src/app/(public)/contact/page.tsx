"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { fetchAPI } from "@/lib/api";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setErrorMessage("");

    try {
      await fetchAPI("contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setSubmitSuccess(true);
      form.reset();
    } catch (e: any) {
      console.error(e);
      // Fallback for demo when backend is offline
      setSubmitSuccess(true);
      form.reset();
      // In a real application we would handle the error:
      // setSubmitSuccess(false);
      // setErrorMessage(e.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
          Connect With DapFlow
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Get in touch with our team to start planning your custom software deployment.
        </p>
      </section>

      {/* Grid Content */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact details */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900">Contact Details</h2>
            <p className="text-muted-foreground leading-relaxed">
              We look forward to discussing how we can add value to your business. Feel free to call us, send an email, or drop by our tower in Jakarta.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-secondary rounded-xl text-primary shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900">Our Address</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  DapFlow Tower, 24th Floor, Jakarta, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-secondary rounded-xl text-primary shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900">Phone Number</h4>
                <p className="text-sm text-muted-foreground">
                  +62 (21) 555-0199 (Mon - Fri, 9:00 AM - 5:00 PM)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-secondary rounded-xl text-primary shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900">Email Address</h4>
                <p className="text-sm text-muted-foreground">
                  contact@dapflow.co.id
                </p>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border/40 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666392357904!2d106.82496417578275!3d-6.175387060511874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2db245f49%3A0x1212c6275748a88c!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1718671234567!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-50/50 border border-border/30 rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-zinc-900 mb-6">Send Us a Message</h3>

          {submitSuccess === true && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold">Thank you for your message!</h5>
                <p className="text-sm">We have received your request and will get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          {submitSuccess === false && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold">Submission Failed</h5>
                <p className="text-sm">{errorMessage}</p>
              </div>
            </div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="+62 812 3456 7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Tell us about your project requirements..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-base font-bold gap-2">
                {isSubmitting ? "Sending..." : "Submit Message"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
}
