
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Program = () => {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen">
        {/* Header section */}
        <div className="bg-pharmacy-700 text-white py-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Bachelor of Pharmacy (B.Pharm)</h1>
            <p className="text-xl max-w-3xl">
              A comprehensive four-year undergraduate program designed to prepare students for successful careers in the pharmaceutical industry.
            </p>
          </div>
        </div>

        {/* Program overview */}
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
                <p className="text-gray-600 mb-6">
                  The Bachelor of Pharmacy (B.Pharm) is an undergraduate academic degree in the field of pharmacy 
                  education in India. This program provides a strong foundation in pharmaceutical sciences 
                  and prepares students for various roles in the healthcare and pharmaceutical sectors.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Duration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        Typically, the B.Pharm course is four years long, divided into eight semesters.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Mode of Program</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        Choice based credit system allowing flexibility in course selection.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Regulatory Body</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        Pharmacy Council of India is the controlling authority of the Indian Pharmacy education, along with AICTE as apex body.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Industrial Training</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        Includes compulsory industrial training of not less than 150 hours over a period of one month at any Pharmaceutical Industry.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    <span className="font-medium">Educational Qualification:</span> Candidates must have passed the 10+2 examination (or equivalent examination of any other Board or University) with Physics, Chemistry, Maths (PCM) or Physics, Chemistry, Biology (PCB) or Physics, Chemistry, Maths & Biology as subjects.
                  </li>
                  <li>
                    <span className="font-medium">Minimum Marks:</span> A minimum of 40% marks in aggregate in PCM or PCB is required. For candidates belonging to the reserved categories (SC/ST/Category-I/OBC), a minimum of 35% marks in aggregate is required.
                  </li>
                  <li>
                    <span className="font-medium">Lateral Entry:</span> Candidates who have passed the D.Pharm course from an institution approved by the Pharmacy Council of India (PCI) are eligible for lateral entry into the second year (3rd semester) of the B.Pharm course.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-4">Academic Requirements</h2>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h3 className="font-medium text-gray-900">Internal Assessment</h3>
                    <p>Three sessional examinations shall be conducted during the academic year by the college. The average marks of best two examinations, separately for theory and practical shall be computed for the declaration of Results.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900">Attendance</h3>
                    <p>The candidates are expected to attend all allotted work periods (both theory and practicals) in each of the prescribed subjects. They should attend 80% of the total number of classes conducted in each subject to be eligible to appear for the university examination in that subject.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900">Credit Assignment</h3>
                    <p>Credits for a course depend on the number of hours of instruction per week. The minimum credit points required for a B.Pharm degree is 208, divided into Theory courses, Tutorials, Practical, Practice School, and Projects over eight semesters.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
                <h3 className="text-xl font-bold mb-4 text-pharmacy-700">Program Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-pharmacy-100 text-pharmacy-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </div>
                    <p className="text-gray-600 text-sm">Four-year program divided into eight semesters</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-pharmacy-100 text-pharmacy-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <p className="text-gray-600 text-sm">Approved by Pharmacy Council of India (PCI)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-pharmacy-100 text-pharmacy-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </div>
                    <p className="text-gray-600 text-sm">Comprehensive curriculum covering all aspects of pharmacy</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-pharmacy-100 text-pharmacy-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      4
                    </div>
                    <p className="text-gray-600 text-sm">Mandatory industrial training for practical experience</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-pharmacy-100 text-pharmacy-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      5
                    </div>
                    <p className="text-gray-600 text-sm">State-of-the-art laboratories and research facilities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-pharmacy-100 text-pharmacy-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      6
                    </div>
                    <p className="text-gray-600 text-sm">Experienced faculty with industry and academic expertise</p>
                  </li>
                </ul>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-pharmacy-700">Apply Now</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Applications for the upcoming academic year are now open. Don't miss your chance to be part of our prestigious pharmacy program.
                  </p>
                  <button className="w-full bg-pharmacy-600 hover:bg-pharmacy-700 text-white py-2 px-4 rounded">
                    Start Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Program;
