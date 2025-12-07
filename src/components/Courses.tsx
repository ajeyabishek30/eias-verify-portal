import { Monitor, Languages, Briefcase, Calculator, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  {
    icon: Monitor,
    title: "Information Technology",
    description:
      "Master modern software development, networking, and system administration with hands-on training in the latest technologies.",
    duration: "12 Months",
  },
  {
    icon: Languages,
    title: "English Language",
    description:
      "Enhance your communication skills with our comprehensive English program covering speaking, writing, and professional communication.",
    duration: "6 Months",
  },
  {
    icon: Briefcase,
    title: "Global Business Management",
    description:
      "Develop leadership and management skills covering marketing, entrepreneurship, and international business concepts.",
    duration: "12 Months",
  },
  {
    icon: Calculator,
    title: "Accounting & Finance",
    description:
      "Learn financial accounting, budgeting, taxation, and financial analysis with industry-standard software training.",
    duration: "12 Months",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Protect digital assets with training in ethical hacking, network security, risk assessment, and compliance frameworks.",
    duration: "12 Months",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Courses We <span className="text-gold">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our diverse range of professional diploma programs designed
            to prepare you for success in today's competitive job market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card
              key={course.title}
              className="group relative overflow-hidden border-border/50 bg-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <course.icon className="h-7 w-7 text-primary group-hover:text-gold transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-display text-card-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Duration: <span className="font-medium text-foreground">{course.duration}</span>
                  </span>
                  <span className="text-primary font-medium text-sm group-hover:text-gold transition-colors">
                    Learn more →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
