
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Curriculum = () => {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen">
        {/* Header section */}
        <div className="bg-secondary-700 text-white py-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">B.Pharm Curriculum</h1>
            <p className="text-xl max-w-3xl">
              Our comprehensive curriculum is designed to provide students with both theoretical knowledge and practical skills in pharmaceutical sciences.
            </p>
          </div>
        </div>

        {/* Curriculum content */}
        <div className="container py-12">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Core Subjects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pharmaceutics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Study of formulation of drugs into dosage forms, including the principles and processes of preparing pharmaceutical products.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pharmaceutical Chemistry</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Involves the chemistry of drug molecules, including their structure, properties, and interactions with biological systems.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pharmacology</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Focuses on the effects of drugs on biological systems, including mechanisms of action, therapeutic uses, and side effects.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pharmacognosy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Study of medicinal drugs derived from plants and other natural sources, including their identification and properties.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pharmaceutical Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Techniques and methods for analyzing drugs, including quality control and assurance procedures.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pharmacy Practice</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Focuses on the practical aspects of pharmacy, including patient care, dispensing, and clinical pharmacy.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Course Structure</h2>
            <p className="text-gray-600 mb-8">
              The B.Pharm program is divided into eight semesters over four years. Each semester focuses on specific aspects of pharmaceutical sciences, gradually building knowledge and skills.
            </p>
            
            <Tabs defaultValue="year1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="year1">First Year</TabsTrigger>
                <TabsTrigger value="year2">Second Year</TabsTrigger>
                <TabsTrigger value="year3">Third Year</TabsTrigger>
                <TabsTrigger value="year4">Fourth Year</TabsTrigger>
              </TabsList>
              
              <TabsContent value="year1" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Semester 1</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Human Anatomy and Physiology I</AccordionTrigger>
                        <AccordionContent>
                          Study of the structure and function of the human body, focusing on cellular organization, skeletal system, muscular system, and nervous system.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Pharmaceutical Analysis I</AccordionTrigger>
                        <AccordionContent>
                          Introduction to analytical chemistry and pharmaceutical analysis, including basic principles, techniques, and equipment.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Pharmaceutics I</AccordionTrigger>
                        <AccordionContent>
                          Fundamentals of pharmaceutics, including introduction to dosage forms, pharmaceutical calculations, and compounding.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Pharmaceutical Inorganic Chemistry</AccordionTrigger>
                        <AccordionContent>
                          Study of inorganic pharmaceutical compounds, their properties, and pharmaceutical applications.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>Communication Skills</AccordionTrigger>
                        <AccordionContent>
                          Development of verbal and written communication skills essential for professional pharmacy practice.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Semester 2</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Human Anatomy and Physiology II</AccordionTrigger>
                        <AccordionContent>
                          Continuation of Human Anatomy and Physiology I, focusing on cardiovascular, respiratory, digestive, and urinary systems.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Pharmaceutical Organic Chemistry I</AccordionTrigger>
                        <AccordionContent>
                          Introduction to organic chemistry principles relevant to pharmaceutical compounds.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Biochemistry</AccordionTrigger>
                        <AccordionContent>
                          Study of chemical processes within living organisms, including metabolism and molecular biology.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Pathophysiology</AccordionTrigger>
                        <AccordionContent>
                          Study of the functional changes associated with disease states and how they affect the body.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>Computer Applications in Pharmacy</AccordionTrigger>
                        <AccordionContent>
                          Introduction to computer applications relevant to pharmacy practice and pharmaceutical sciences.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="year2" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Semester 3</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Pharmaceutical Organic Chemistry II</AccordionTrigger>
                        <AccordionContent>
                          Advanced organic chemistry concepts related to pharmaceutical compounds and drug synthesis.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Physical Pharmaceutics I</AccordionTrigger>
                        <AccordionContent>
                          Study of physical and physicochemical properties of drugs and their dosage forms.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Pharmaceutical Microbiology</AccordionTrigger>
                        <AccordionContent>
                          Study of microorganisms and their applications in pharmacy, including sterilization and aseptic techniques.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Pharmaceutical Engineering</AccordionTrigger>
                        <AccordionContent>
                          Principles of engineering applied to pharmaceutical manufacturing processes and equipment.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Semester 4</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Pharmaceutical Organic Chemistry III</AccordionTrigger>
                        <AccordionContent>
                          Further study of organic chemistry relevant to drug synthesis and development.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Medicinal Chemistry I</AccordionTrigger>
                        <AccordionContent>
                          Introduction to medicinal chemistry, including drug design and structure-activity relationships.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Physical Pharmaceutics II</AccordionTrigger>
                        <AccordionContent>
                          Advanced study of physical pharmacy, including disperse systems and rheology.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Pharmacology I</AccordionTrigger>
                        <AccordionContent>
                          Introduction to pharmacology, including drug actions, pharmacokinetics, and pharmacodynamics.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>Pharmacognosy I</AccordionTrigger>
                        <AccordionContent>
                          Introduction to natural products as sources of pharmaceutical agents.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="year3" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Semester 5</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Medicinal Chemistry II</AccordionTrigger>
                        <AccordionContent>
                          Advanced medicinal chemistry, focusing on specific drug classes and their mechanisms.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Industrial Pharmacy I</AccordionTrigger>
                        <AccordionContent>
                          Principles of pharmaceutical manufacturing and industrial processes.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Pharmacology II</AccordionTrigger>
                        <AccordionContent>
                          Continued study of pharmacology, focusing on specific drug classes and their therapeutic applications.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Pharmacognosy II</AccordionTrigger>
                        <AccordionContent>
                          Advanced study of natural products and their pharmaceutical applications.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>Pharmaceutical Jurisprudence</AccordionTrigger>
                        <AccordionContent>
                          Study of laws and regulations governing the practice of pharmacy and pharmaceutical industry.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Semester 6</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Medicinal Chemistry III</AccordionTrigger>
                        <AccordionContent>
                          Further study of medicinal chemistry, focusing on complex drug structures and their properties.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Pharmacology III</AccordionTrigger>
                        <AccordionContent>
                          Advanced pharmacology, including toxicology and drug interactions.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Herbal Drug Technology</AccordionTrigger>
                        <AccordionContent>
                          Study of herbal drug formulation, standardization, and quality control.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Biopharmaceutics and Pharmacokinetics</AccordionTrigger>
                        <AccordionContent>
                          Study of drug absorption, distribution, metabolism, and excretion in the body.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>Pharmaceutical Biotechnology</AccordionTrigger>
                        <AccordionContent>
                          Introduction to biotechnology applications in pharmaceutical research and development.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="year4" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Semester 7</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Instrumental Methods of Analysis</AccordionTrigger>
                        <AccordionContent>
                          Advanced analytical techniques and instrumentation used in pharmaceutical analysis.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Industrial Pharmacy II</AccordionTrigger>
                        <AccordionContent>
                          Advanced industrial pharmacy, including GMP, validation, and quality assurance.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Pharmacy Practice</AccordionTrigger>
                        <AccordionContent>
                          Introduction to clinical pharmacy practice, including patient care and medication therapy management.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Novel Drug Delivery Systems</AccordionTrigger>
                        <AccordionContent>
                          Study of advanced drug delivery systems and technologies for improving therapeutic outcomes.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Semester 8</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Biostatistics and Research Methodology</AccordionTrigger>
                        <AccordionContent>
                          Statistical methods and research design principles applied to pharmaceutical research.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Social and Preventive Pharmacy</AccordionTrigger>
                        <AccordionContent>
                          Study of public health and preventive aspects of pharmacy practice.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Pharmaceutical Quality Assurance</AccordionTrigger>
                        <AccordionContent>
                          Principles and practices of quality assurance in pharmaceutical industry.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Industrial Training</AccordionTrigger>
                        <AccordionContent>
                          Mandatory industrial training of not less than 150 hours over a period of one month at any Pharmaceutical Industry.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>Project Work</AccordionTrigger>
                        <AccordionContent>
                          Research project under faculty supervision, culminating in a dissertation.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Credit System</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Credit Assignment</h3>
              <p className="text-gray-600 mb-4">
                Courses are broadly classified as Theory and Practical. Theory courses consist of lecture (L) and/or tutorial (T) hours, while Practical (P) courses consist of hours spent in the laboratory.
              </p>
              <p className="text-gray-600 mb-4">
                Credits (C) for a course depend on the number of hours of instruction per week:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>A theory course with three lectures and one tutorial per week throughout the semester carries a credit of 4.</li>
                <li>A practical course with four laboratory hours per week throughout the semester carries a credit of 2.</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">Minimum Credit Requirements</h3>
              <p className="text-gray-600 mb-4">
                The minimum credit points required for a B.Pharm degree is 208. These credits are divided into Theory courses, Tutorials, Practical, Practice School, and Projects over the duration of eight semesters.
              </p>
              <p className="text-gray-600">
                Lateral entry students shall have 52 credit points transferred from their D.Pharm program. Such students shall take additional remedial courses in 'Communication Skills' and 'Computer Applications in Pharmacy', totaling 7 credit points, to attain 59 credit points.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Curriculum;
