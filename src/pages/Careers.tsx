
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, GraduationCap, FlaskRound } from "lucide-react";

const Careers = () => {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen">
        {/* Header section */}
        <div className="bg-gradient-to-r from-pharmacy-700 to-pharmacy-600 text-white py-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Career Prospects in Pharmacy</h1>
            <p className="text-xl max-w-3xl">
              Pharmacy offers diverse and rewarding career opportunities across healthcare, research, industry, and regulatory sectors.
            </p>
          </div>
        </div>

        {/* Introduction section */}
        <div className="container py-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 mb-6">
              Pharmacy is a vital healthcare profession that bridges the gap between the medical sciences and the general public. Pharmacists are highly trained professionals who specialize in the composition, effects, mechanism, and proper use of medications. They play a crucial role in patient care, ensuring the safe and effective use of pharmaceutical drugs.
            </p>
            <p className="text-gray-600">
              This profession encompasses various aspects, including the preparation and dispensing of medications, patient education, and collaboration with other healthcare providers to optimize patient outcomes.
            </p>
          </div>

          {/* Advantages section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Advantages of the Pharmacy Profession</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-pharmacy-50 border-pharmacy-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-pharmacy-700">Patient Interaction and Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Pharmacists have the unique opportunity to interact directly with patients, offering advice and support that can significantly impact their health and wellbeing.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-pharmacy-50 border-pharmacy-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-pharmacy-700">Diverse Career Paths</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Pharmacy offers a wide range of career options, from clinical practice to research and development, regulatory affairs, and academia.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-pharmacy-50 border-pharmacy-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-pharmacy-700">Job Stability and Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    The demand for healthcare services, including pharmaceutical care, continues to grow, ensuring job stability and numerous opportunities for career advancement.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-pharmacy-50 border-pharmacy-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-pharmacy-700">Competitive Salaries</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Pharmacists typically enjoy competitive salaries and benefits, reflecting their expertise and essential role in healthcare.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-pharmacy-50 border-pharmacy-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-pharmacy-700">Innovation and Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    The field of pharmacy is continually evolving with advancements in medical science, providing opportunities for those interested in research and innovation to contribute to the development of new drugs and therapies.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-pharmacy-50 border-pharmacy-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-pharmacy-700">Global Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Pharmaceutical knowledge and skills are transferable across borders, allowing pharmacists to explore international career opportunities.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Job Opportunities section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Job Opportunities in the Pharmacy Profession</h2>
            
            <Tabs defaultValue="industry" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="industry">Industry & Research</TabsTrigger>
                <TabsTrigger value="clinical">Clinical & Community</TabsTrigger>
                <TabsTrigger value="specialized">Specialized Roles</TabsTrigger>
              </TabsList>
              
              <TabsContent value="industry" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-pharmacy-100 p-3 rounded-full text-pharmacy-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Manufacturing</h3>
                        <p className="text-gray-600">
                          Pharmacists play a crucial role in the pharmaceutical manufacturing sector, overseeing the production of medications, ensuring quality control, and complying with regulatory standards.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-pharmacy-100 p-3 rounded-full text-pharmacy-600">
                        <FlaskRound className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Research and Development (R&D)</h3>
                        <p className="text-gray-600">
                          In R&D, pharmacists work on the development of new drugs and formulations, conducting clinical trials, and contributing to scientific advancements in medicine.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-pharmacy-100 p-3 rounded-full text-pharmacy-600">
                        <FlaskRound className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Drug Discovery</h3>
                        <p className="text-gray-600">
                          Pharmacists involved in drug discovery research new compounds and develop innovative therapies. This field requires a deep understanding of chemistry, biology, and pharmacology to identify potential new medications.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-pharmacy-100 p-3 rounded-full text-pharmacy-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Biotechnology (Vaccines and Injectables)</h3>
                        <p className="text-gray-600">
                          Pharmacists in biotechnology work on developing vaccines, injectable medications, and other biopharmaceuticals. This involves cutting-edge research and collaboration with scientists to create effective treatments and preventive measures.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-pharmacy-100 p-3 rounded-full text-pharmacy-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Sales and Marketing</h3>
                        <p className="text-gray-600">
                          Pharmaceutical sales and marketing involve promoting and selling medications to healthcare providers and institutions. This field requires strong communication skills and a thorough understanding of the products.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-pharmacy-100 p-3 rounded-full text-pharmacy-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Regulatory Affairs</h3>
                        <p className="text-gray-600">
                          Professionals in this field ensure that pharmaceutical products comply with all regulations and laws, working with government agencies to navigate the complex landscape of drug approval and monitoring.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="clinical" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-secondary-100 p-3 rounded-full text-secondary-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Hospital and Clinical Pharmacy</h3>
                        <p className="text-gray-600">
                          Hospital pharmacists work directly with healthcare teams to manage medication therapy, provide patient education, and ensure the safe use of medications in clinical settings.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-secondary-100 p-3 rounded-full text-secondary-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Community Pharmacy</h3>
                        <p className="text-gray-600">
                          Community pharmacists dispense medications, counsel patients on proper drug use, and provide healthcare advice in a retail setting, often serving as the first point of contact for health concerns.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-secondary-100 p-3 rounded-full text-secondary-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Ambulatory Care</h3>
                        <p className="text-gray-600">
                          Pharmacists in ambulatory care settings provide care to outpatients, managing chronic diseases and medication therapy in collaboration with other healthcare providers.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-secondary-100 p-3 rounded-full text-secondary-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Consultant Pharmacy</h3>
                        <p className="text-gray-600">
                          Consultant pharmacists provide expert advice to healthcare facilities, particularly long-term care facilities, on medication management and therapy optimization.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-secondary-100 p-3 rounded-full text-secondary-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Home Health Care</h3>
                        <p className="text-gray-600">
                          Pharmacists in home health care settings provide medication management and monitoring services to patients in their homes, often for those with complex medical needs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-secondary-100 p-3 rounded-full text-secondary-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Compounding Pharmacy</h3>
                        <p className="text-gray-600">
                          Compounding pharmacists prepare customized medications to meet specific patient needs, creating formulations that are not commercially available.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="specialized" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-amber-100 p-3 rounded-full text-amber-600">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Academia and Education</h3>
                        <p className="text-gray-600">
                          Pharmacists can pursue careers in academia, teaching and training the next generation of pharmacy professionals and conducting research to advance the field.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-amber-100 p-3 rounded-full text-amber-600">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Clinical Research</h3>
                        <p className="text-gray-600">
                          Pharmacists in clinical research design and conduct clinical trials to evaluate the safety and efficacy of new drugs and treatments.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-amber-100 p-3 rounded-full text-amber-600">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Pharmacovigilance</h3>
                        <p className="text-gray-600">
                          Professionals in pharmacovigilance monitor and assess the effects of drugs after they are marketed, identifying and evaluating adverse drug reactions.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-amber-100 p-3 rounded-full text-amber-600">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Public Health Services</h3>
                        <p className="text-gray-600">
                          Pharmacists in public health develop and implement programs to improve community health, including disease prevention and health promotion initiatives.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-amber-100 p-3 rounded-full text-amber-600">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Medical Writing</h3>
                        <p className="text-gray-600">
                          Medical writers with pharmacy backgrounds create content for scientific publications, regulatory documents, educational materials, and marketing materials.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-amber-100 p-3 rounded-full text-amber-600">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Pharmaceutical Consulting</h3>
                        <p className="text-gray-600">
                          Pharmaceutical consultants provide expert advice to various organizations on matters related to drug development, regulatory compliance, and market strategy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Higher Education section */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">Higher Education Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-pharmacy-600" />
                    M.Pharm
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Pursuing a master's degree in specialized fields like Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, etc. Enhances knowledge and research capabilities in specific areas of pharmacy.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-pharmacy-600" />
                    Pharm.D
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A doctoral program focusing on clinical pharmacy. Prepares pharmacists for advanced patient care roles, including medication therapy management and collaborative practice with physicians.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-pharmacy-600" />
                    Ph.D.
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Engaging in advanced research in pharmaceutical sciences. Prepares for careers in academia, research institutions, and leadership roles in the pharmaceutical industry.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-gradient-to-r from-secondary-600 to-secondary-500 py-16 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Begin Your Pharmacy Journey Today</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join Alvas College of Pharmacy and embark on a rewarding career path with diverse opportunities and meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-secondary-700 hover:bg-gray-100 h-10 px-4 py-2">
                Apply Now
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent border border-white text-white hover:bg-white/10 h-10 px-4 py-2">
                Contact Admissions
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
