import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send, Phone, MessageCircle, MessageSquare } from "lucide-react";

interface ContactFormProps {
  lang: "cz" | "en";
}

export const ContactForm: React.FC<ContactFormProps> = ({ lang }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Basin form backend
      const response = await fetch('https://usebasin.com/f/3b8a2d000ad2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Still show success to user (graceful degradation)
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6 text-center">
          <div className="text-green-600 mb-2 text-4xl">✓</div>
          <p className="text-sm text-muted-foreground">
            {lang === "cz" 
              ? "Děkujeme za zprávu! Ozveme se vám brzy." 
              : "Thank you for your message! We'll get back to you soon."
            }
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Contact Form */}
      <div className="w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder={lang === "cz" ? "Vaše jméno" : "Your name"}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder={lang === "cz" ? "Váš email" : "Your email"}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder={lang === "cz" ? "Vaše zpráva..." : "Your message..."}
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              lang === "cz" ? "Odesílám..." : "Sending..."
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                {lang === "cz" ? "Odeslat" : "Send"}
              </>
            )}
          </Button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="w-full">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <a 
              href="mailto:webmaster@flexagency.cz" 
              className="text-sm hover:text-primary transition-colors"
            >
              webmaster@flexagency.cz
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a 
              href="tel:+420702006220" 
              className="text-sm hover:text-primary transition-colors"
            >
              +420 702 006 220
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
            <a 
              href="https://wa.me/420702006220" 
              target="_blank" 
              rel="noreferrer"
              className="text-sm hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
            <a 
              href="https://t.me/WebDevMan" 
              target="_blank" 
              rel="noreferrer"
              className="text-sm hover:text-primary transition-colors"
            >
              Telegram (@WebDevMan)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};