
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pharmacy-800/90 to-pharmacy-600/80 z-10" />
      <div 
        className="h-[600px] bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' 
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto absolute inset-0 z-20 flex flex-col justify-center items-start">
        <div className="max-w-xl text-white p-6 md:p-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shape the Future of Healthcare
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Join Alvas College of Pharmacy and become part of the next generation of pharmaceutical leaders. Excellence in education for over 25 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-pharmacy-700 hover:bg-gray-100">
              <Link to="/program">
                Explore Programs
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/careers">
                Career Opportunities
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
