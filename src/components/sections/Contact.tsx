"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/elitewebdesigns2@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Όνομα": formState.name,
          "Email": formState.email,
          "Επιχείρηση": formState.company,
          "Μήνυμα": formState.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Επικοινωνία"
          title="Επικοινωνήστε μαζί μας"
          subtitle="Στείλτε μας μήνυμα και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <RevealOnScroll>
            <form onSubmit={handleSubmit} className="glass space-y-6 rounded-2xl p-8">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                  Όνομα
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-secondary/50 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                  placeholder="Το όνομά σας"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-secondary/50 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-white">
                  Επιχείρηση
                </label>
                <input
                  id="company"
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-secondary/50 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                  placeholder="Όνομα επιχείρησης"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                  Μήνυμα
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-secondary/50 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                  placeholder="Περιγράψτε το project σας..."
                />
              </div>
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Αποστολή..." : submitted ? "Απεστάλη!" : error ? "Σφάλμα! Δοκιμάστε ξανά" : "Αποστολή Μηνύματος"}
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="flex h-full flex-col justify-center space-y-8">
              <div>
                <h3 className="mb-6 font-display text-2xl font-semibold text-white">
                  Στοιχεία Επικοινωνίας
                </h3>
                <div className="space-y-6">
                  <motion.a
                    href="mailto:elitewebdesigns2@gmail.com"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 text-secondary transition-colors hover:text-accent"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary/70">Email</p>
                      <p className="font-medium text-white">elitewebdesigns2@gmail.com</p>
                    </div>
                  </motion.a>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <p className="text-sm leading-relaxed text-secondary">
                  Απαντάμε σε όλα τα αιτήματα εντός 24 ωρών. Για επείγοντα projects,
                  επικοινωνήστε μαζί μας απευθείας μέσω email.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
