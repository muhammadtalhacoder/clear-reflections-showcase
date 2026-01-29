import { useState, forwardRef } from "react";
import { Mail, Phone, MessageSquare, Send, CheckCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-glow opacity-20" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Get in Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We're here to help. Reach out and we'll respond promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {[
              {
                icon: Phone,
                title: "Phone",
                value: "+1 (555) 123-4567",
                href: "tel:+15551234567",
              },
              {
                icon: Mail,
                title: "Email",
                value: "info@clearreflections.com",
                href: "mailto:info@clearreflections.com",
              },
              {
                icon: MessageSquare,
                title: "Live Chat",
                value: "Mon-Sat, 9AM-6PM",
                href: null,
              },
            ].map((contact) => (
              <motion.div
                key={contact.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-card rounded-2xl p-6 border border-border/50 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <contact.icon className="w-5 h-5 text-primary group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{contact.title}</h3>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground text-sm">{contact.value}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Why Contact Us */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-card rounded-2xl p-6 border border-accent/30"
            >
              <h3 className="font-serif text-lg text-foreground mb-5">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Expert mirror consultation",
                  "Custom sizing available",
                  "Free in-home measurement",
                  "Professional installation",
                  "Satisfaction guaranteed",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-gradient-card rounded-2xl p-8 md:p-10 border border-border/50">
              <h3 className="font-serif text-2xl text-foreground mb-8">Send Us a Message</h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-background/50 border-border/50 focus:border-primary h-12"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="bg-background/50 border-border/50 focus:border-primary h-12"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Product Inquiry"
                    className="bg-background/50 border-border/50 focus:border-primary h-12"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your mirror needs..."
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto btn-premium text-accent-foreground px-10 py-6 text-base font-medium"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
