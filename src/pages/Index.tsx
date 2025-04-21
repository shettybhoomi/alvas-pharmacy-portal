
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/ui/HeroSection";
import { ProgramHighlights } from "@/components/ui/ProgramHighlight";
import { StatCard } from "@/components/ui/StatCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText, FlaskRound, Pen } from "lucide-react";

// Reusable section component with alternating layouts
interface SectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  cta?: {
    text: string;
    link: string;
  };
  icon?: React.ReactNode;
}

function Section({ title, description, image, reverse, cta, icon }: SectionProps) {
  return (
    <div className="py-16">
      <div className="container">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            {icon && <div className="text-pharmacy-600 mb-4">{icon}</div>}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            {cta && (
              <Button asChild className="bg-pharmacy-600 hover:bg-pharmacy-700">
                <Link to={cta.link}>{cta.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Index = () => {
  return (
    <div>
      <Navbar />
      
      <main>
        <HeroSection />
        
        <ProgramHighlights />
        
        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pharmacy Excellence
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our program is designed to prepare students for successful careers in the pharmaceutical industry with a focus on excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard value="25+" label="Years of Excellence" color="pharmacy" />
              <StatCard value="500+" label="Industry Partners" color="secondary" />
              <StatCard value="98%" label="Placement Rate" color="purple" />
              <StatCard value="50+" label="Faculty Experts" color="amber" />
            </div>
          </div>
        </div>
        
        {/* About the Program Section */}
        <Section
          title="Comprehensive Pharmacy Education"
          description="Our Bachelor of Pharmacy (B.Pharm) program provides students with a strong foundation in pharmaceutical sciences. The four-year program covers everything from drug formulation to patient care, preparing graduates for diverse career paths in healthcare."
          image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          cta={{ text: "Explore Program", link: "/program" }}
          icon={<FileText className="h-8 w-8" />}
        />
        
        {/* Research Section */}
        <Section
          title="State-of-the-Art Research Facilities"
          description="Our college houses modern laboratories and research centers equipped with cutting-edge technology. Students have access to sophisticated instruments and resources that facilitate hands-on learning and innovative research in pharmaceutical sciences."
          image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          reverse={true}
          cta={{ text: "View Curriculum", link: "/curriculum" }}
          icon={<FlaskRound className="h-8 w-8" />}
        />
        
        {/* Career Prospects Section */}
        <Section
          title="Diverse Career Opportunities"
          description="Pharmacy graduates have a wide range of career options across multiple sectors. From clinical practice to research and development, pharmaceutical manufacturing to regulatory affairs, our program prepares students for diverse and rewarding career paths in the global pharmaceutical industry."
          image="https://images.unsplash.com/photo-1576669801775-ff43e5838b92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          cta={{ text: "Career Prospects", link: "/careers" }}
          icon={<Pen className="h-8 w-8" />}
        />
        
        {/* CTA Section */}
        <div className="bg-pharmacy-600 py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Pharmacy Journey?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Applications are now open for the upcoming academic year. Join us and become part of the next generation of pharmaceutical professionals.
            </p>
            <Button size="lg" className="bg-white text-pharmacy-700 hover:bg-gray-100">
              Apply Now
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
