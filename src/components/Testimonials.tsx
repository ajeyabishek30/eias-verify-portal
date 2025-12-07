import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Student {
  id: number;
  name: string;
  course: string;
  image: string;
  testimonial: string;
  year: string;
  initials: string;
}

const students: Student[] = [
  {
    id: 1,
    name: "Sajiv",
    course: "Information Technology",
    image: "/students/student1.jpg",
    testimonial:
      "The IT course at EIAS has been transformative. I learned modern software development, networking, and system administration with hands-on training. The instructors were knowledgeable and supportive throughout my journey.",
    year: "2024-2025",
    initials: "SJ",
  },
  {
    id: 2,
    name: "Sathurshna",
    course: "English Language",
    image: "/students/student2.jpg",
    testimonial:
      "My English language skills have improved significantly. The comprehensive program covered speaking, writing, and professional communication. I feel confident in my abilities now.",
    year: "2024-2025",
    initials: "SA",
  },
  {
    id: 3,
    name: "Sarjana",
    course: "Global Business Management",
    image: "/students/student3.jpg",
    testimonial:
      "EIAS provided excellent training in business management. I learned leadership, marketing, and entrepreneurship skills that are invaluable for my career. Highly recommended!",
    year: "2024-2025",
    initials: "SR",
  },
  {
    id: 4,
    name: "Kamsan",
    course: "Accounting & Finance",
    image: "/students/student4.jpg",
    testimonial:
      "The Accounting & Finance course equipped me with comprehensive knowledge of financial accounting, budgeting, and taxation. The practical training was exceptional.",
    year: "2024-2025",
    initials: "KM",
  },
  {
    id: 5,
    name: "Lakshika",
    course: "Cyber Security",
    image: "/students/student5.jpg",
    testimonial:
      "Outstanding cyber security training! I gained expertise in ethical hacking, network security, and risk assessment. The faculty was professional and inspiring.",
    year: "2024-2025",
    initials: "LK",
  },
  {
    id: 6,
    name: "Saran",
    course: "Information Technology",
    image: "/students/student6.jpg",
    testimonial:
      "The IT program at EIAS is comprehensive and well-structured. I've developed strong technical skills and feel well-prepared for the industry.",
    year: "2024-2025",
    initials: "SR",
  },
  {
    id: 7,
    name: "Thivakari",
    course: "English Language",
    image: "/students/student7.jpg",
    testimonial:
      "Excellent English language program! The interactive learning methods helped me improve my communication skills significantly.",
    year: "2024-2025",
    initials: "TV",
  },
  {
    id: 8,
    name: "Thasalini",
    course: "Global Business Management",
    image: "/students/student8.jpg",
    testimonial:
      "The business management course provided valuable insights into international business practices and leadership development.",
    year: "2024-2025",
    initials: "TL",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? students.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === students.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageError = (studentId: number) => {
    setImageErrors((prev) => new Set([...prev, studentId]));
  };

  const currentStudent = students[currentIndex];
  const hasImageError = imageErrors.has(currentStudent.id);

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
            Our Students
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Student <span className="text-gold">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our alumni who completed their courses in 2024-2025 and
            experienced their journey at EIAS.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Student Image */}
              <div className="flex justify-center">
                <div className="w-80 h-96">
                  {!hasImageError ? (
                    <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg border-4 border-gold">
                      <img
                        src={currentStudent.image}
                        alt={currentStudent.name}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(currentStudent.id)}
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full rounded-xl shadow-lg border-4 border-gold bg-gradient-to-br from-gold to-primary flex flex-col items-center justify-center">
                      <div className="text-8xl font-bold text-primary-foreground">
                        {currentStudent.initials}
                      </div>
                      <p className="text-primary-foreground text-lg font-semibold mt-4">
                        {currentStudent.name}
                      </p>
                      <p className="text-primary-foreground/80 text-sm">
                        {currentStudent.course}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Student Info */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold mb-3">
                    {currentStudent.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                    {currentStudent.name}
                  </h3>
                  <p className="text-lg text-gold font-semibold">
                    {currentStudent.course}
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-4">
                  <p className="text-muted-foreground text-base leading-relaxed italic">
                    "{currentStudent.testimonial}"
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <Button
                    onClick={goToPrevious}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gold text-gold hover:bg-gold hover:text-navy-dark transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-gold transition-all duration-300"
                      style={{
                        width: `${((currentIndex + 1) / students.length) * 100}%`,
                      }}
                    />
                  </div>
                  <Button
                    onClick={goToNext}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gold text-gold hover:bg-gold hover:text-navy-dark transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                {/* Progress Text */}
                <p className="text-sm text-muted-foreground text-center">
                  {currentIndex + 1} of {students.length} Students
                </p>
              </div>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {students.map((student, index) => (
              <button
                key={student.id}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gold"
                    : "w-3 bg-muted hover:bg-muted-foreground"
                }`}
                aria-label={`Go to student ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
