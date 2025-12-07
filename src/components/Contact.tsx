import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Stephan Lane", "Batticaloa, Sri Lanka"],
    action: null,
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+94 754 007 573"],
    action: "tel:+94754007573",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@eias.lk"],
    action: "mailto:info@eias.lk",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
    action: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Contact <span className="text-gold">EIAS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to start your educational journey? Reach out to us for
            enrollment information or any inquiries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info) => {
            const CardWrapper = info.action ? "a" : "div";
            const wrapperProps = info.action
              ? { href: info.action, className: "block" }
              : {};

            return (
              <CardWrapper key={info.title} {...wrapperProps}>
                <Card
                  className={`h-full text-center border-border/50 bg-card hover:shadow-elevated transition-all duration-300 ${
                    info.action ? "hover:-translate-y-1 cursor-pointer group" : ""
                  }`}
                >
                  <CardContent className="pt-8 pb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                        info.action ? "group-hover:bg-gold/20" : ""
                      }`}
                    >
                      <info.icon
                        className={`h-7 w-7 text-primary transition-colors duration-300 ${
                          info.action ? "group-hover:text-gold" : ""
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-card-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, index) => (
                      <p
                        key={index}
                        className={`text-muted-foreground ${
                          info.action
                            ? "group-hover:text-primary transition-colors"
                            : ""
                        }`}
                      >
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </CardWrapper>
            );
          })}
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-elevated border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31441.668127440373!2d81.67!3d7.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae515a5f5c5aae3%3A0x5f2b5b5b5b5b5b5b!2sBatticaloa%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EIAS Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
