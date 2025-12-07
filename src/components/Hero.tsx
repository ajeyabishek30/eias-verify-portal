import { ArrowDown, GraduationCap, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const stats = [
    { icon: GraduationCap, value: "500+", label: "Graduates" },
    { icon: Users, value: "50+", label: "Expert Faculty" },
    { icon: Award, value: "5+", label: "Courses" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gold Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Shaping Future Leaders
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Eastern Institute for{" "}
            <span className="text-gold">Applied Science</span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Empowering students with industry-relevant skills in IT, Business,
            English, Accounting, and Cyber Security since our establishment in
            Batticaloa.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 shadow-gold transition-all duration-300 hover:scale-105"
            >
              <a href="#courses">Explore Courses</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 shadow-gold transition-all duration-300 hover:scale-105"
            >
              <a href="#verify">Verify Certificate</a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-gold" />
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
