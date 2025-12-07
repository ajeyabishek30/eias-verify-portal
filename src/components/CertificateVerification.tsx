import { useState } from "react";
import { Search, CheckCircle, XCircle, Award, Calendar, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CertificateData {
  certificateNo: string;
  studentId: string;
  studentName: string;
  course: string;
  issueDate: string;
  programDuration: string;
}

// Hardcoded certificate data based on the provided certificate
const certificateDatabase: Record<string, CertificateData> = {
  "EIAS/DIP/2024/1523": {
    certificateNo: "EIAS/DIP/2024/1523",
    studentId: "EIAS/GBM/2024/017",
    studentName: "Mr Kajendran Jathushan",
    course: "Diploma in Global Business Management",
    issueDate: "15 March 2025",
    programDuration: "19th February 2024 - 17th February 2025",
  },
};

const CertificateVerification = () => {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [searchResult, setSearchResult] = useState<CertificateData | null>(null);
  const [searched, setSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    setSearched(false);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = certificateDatabase[referenceNumber.trim().toUpperCase()];
      setSearchResult(result || null);
      setSearched(true);
      setIsLoading(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleVerify();
    }
  };

  return (
    <section id="verify" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
            Verification Portal
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Verify Your <span className="text-gold">Certificate</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Enter your certificate reference number to verify authenticity and view
            your certificate details.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Search Box */}
          <Card className="shadow-elevated border-border/50 mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter Certificate Number (e.g., EIAS/DIP/2024/1523)"
                    value={referenceNumber}
                    onChange={(e) => setReferenceNumber(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <Button
                  onClick={handleVerify}
                  disabled={!referenceNumber.trim() || isLoading}
                  className="h-12 px-8 bg-primary hover:bg-primary/90 font-semibold"
                >
                  {isLoading ? "Verifying..." : "Verify"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {searched && (
            <div className="animate-scale-in">
              {searchResult ? (
                <Card className="shadow-elevated border-gold/30 bg-card overflow-hidden">
                  <div className="h-2 bg-gradient-gold" />
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-card-foreground">
                          Certificate Verified
                        </CardTitle>
                        <p className="text-sm text-green-600 font-medium">
                          This certificate is authentic and valid
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                        <Award className="h-5 w-5 text-gold mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Certificate Number</p>
                          <p className="font-semibold text-foreground">{searchResult.certificateNo}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                        <User className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Student Name</p>
                          <p className="font-semibold text-foreground">{searchResult.studentName}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            ID: {searchResult.studentId}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                        <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Course</p>
                          <p className="font-semibold text-foreground">{searchResult.course}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Issue Date</p>
                          <p className="font-semibold text-foreground">{searchResult.issueDate}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Program Duration: {searchResult.programDuration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-elevated border-destructive/30 bg-card">
                  <CardContent className="py-8">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                        <XCircle className="h-8 w-8 text-destructive" />
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">
                        Certificate Not Found
                      </h3>
                      <p className="text-muted-foreground">
                        The certificate reference number you entered could not be found in
                        our records. Please check the number and try again.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Help Text */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            The certificate number can be found at the bottom of your certificate
            document.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificateVerification;
