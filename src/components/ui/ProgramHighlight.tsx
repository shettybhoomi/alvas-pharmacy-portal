
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Clock, GraduationCap, Users } from "lucide-react";

interface HighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Highlight({ icon, title, description }: HighlightProps) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2">
        <div className="mb-2 text-pharmacy-600">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-sm">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export function ProgramHighlights() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Program Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Bachelor of Pharmacy (B.Pharm) is a comprehensive program designed to prepare students for
            successful careers in the pharmaceutical industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Highlight
            icon={<Clock className="h-8 w-8" />}
            title="4-Year Program"
            description="A four-year program divided into eight semesters with a comprehensive curriculum."
          />
          <Highlight
            icon={<Book className="h-8 w-8" />}
            title="Choice Based Credit"
            description="Flexible choice based credit system to customize your learning journey."
          />
          <Highlight
            icon={<GraduationCap className="h-8 w-8" />}
            title="PCI Approved"
            description="Program approved by the Pharmacy Council of India ensuring quality education."
          />
          <Highlight
            icon={<Users className="h-8 w-8" />}
            title="Industry Training"
            description="Mandatory industrial training to gain practical experience in pharmaceutical settings."
          />
        </div>
      </div>
    </div>
  );
}
