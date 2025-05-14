import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent } from
"@/components/ui/chart";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend } from
"recharts";
import { useState } from "react";

const mockSkillsData = [
{ name: "Data Analysis", value: 90 },
{ name: "SQL", value: 85 },
{ name: "Python", value: 80 },
{ name: "Excel/Sheets", value: 95 },
{ name: "Tableau", value: 75 },
{ name: "Power BI", value: 80 },
{ name: "R", value: 65 },
{ name: "Statistical Analysis", value: 85 }];


const mockProjectData = [
{
  id: 1,
  title: "E-Commerce Customer Behavior Analysis",
  description: "Analyzed customer purchase patterns to identify key trends and opportunities for growth.",
  tools: ["Python", "SQL", "Tableau"],
  metrics: [
  { name: "Conversion Rate", value: 24 },
  { name: "Customer Retention", value: 65 },
  { name: "Revenue Growth", value: 18 }],

  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
},
{
  id: 2,
  title: "Financial Market Analysis Dashboard",
  description: "Created an interactive dashboard for real-time financial market analysis and reporting.",
  tools: ["Power BI", "Excel", "SQL"],
  metrics: [
  { name: "Data Sources", value: 12 },
  { name: "Report Accuracy", value: 99 },
  { name: "Time Saved", value: 40 }],

  image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop"
},
{
  id: 3,
  title: "Healthcare Patient Outcomes Study",
  description: "Analyzed patient data to identify factors affecting treatment outcomes and recovery rates.",
  tools: ["R", "SPSS", "Statistical Analysis"],
  metrics: [
  { name: "Data Points", value: 50000 },
  { name: "Key Factors", value: 8 },
  { name: "Prediction Accuracy", value: 85 }],

  image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop"
}];


const pieChartData = [
{ name: "Data Collection", value: 25 },
{ name: "Data Cleaning", value: 20 },
{ name: "Analysis", value: 30 },
{ name: "Visualization", value: 15 },
{ name: "Reporting", value: 10 }];


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const timeSeriesData = [
{ month: "Jan", productivity: 65, accuracy: 72 },
{ month: "Feb", productivity: 68, accuracy: 75 },
{ month: "Mar", productivity: 72, accuracy: 78 },
{ month: "Apr", productivity: 75, accuracy: 80 },
{ month: "May", productivity: 80, accuracy: 82 },
{ month: "Jun", productivity: 82, accuracy: 85 },
{ month: "Jul", productivity: 85, accuracy: 87 },
{ month: "Aug", productivity: 88, accuracy: 89 },
{ month: "Sep", productivity: 90, accuracy: 90 },
{ month: "Oct", productivity: 92, accuracy: 91 },
{ month: "Nov", productivity: 93, accuracy: 92 },
{ month: "Dec", productivity: 95, accuracy: 94 }];


const certifications = [
{ name: "Google Data Analytics Professional Certificate", issuer: "Google", year: 2023 },
{ name: "Microsoft Certified: Data Analyst Associate", issuer: "Microsoft", year: 2022 },
{ name: "Tableau Desktop Specialist", issuer: "Tableau", year: 2022 },
{ name: "SQL Advanced Certification", issuer: "DataCamp", year: 2021 },
{ name: "Python for Data Science", issuer: "IBM", year: 2021 }];


const HomePage = () => {
  const [activeProject, setActiveProject] = useState(1);

  return (
    <div className="min-h-screen bg-white" data-id="c31hz60xw" data-path="src/pages/HomePage.tsx">
      <header className="py-6 px-8 border-b" data-id="mhecqxd2u" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto flex justify-between items-center" data-id="sxzux650n" data-path="src/pages/HomePage.tsx">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent" data-id="kb5x1a3vt" data-path="src/pages/HomePage.tsx">
            John Doe | Data Analyst
          </h1>
          <nav className="space-x-4" data-id="5c5px6o44" data-path="src/pages/HomePage.tsx">
            <Button variant="link">Home</Button>
            <Button variant="link">Portfolio</Button>
            <Button variant="link">Skills</Button>
            <Button variant="link">About</Button>
            <Button variant="link">Contact</Button>
            <Button variant="outline" className="ml-2">
              Resume
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4" data-id="jwkkod1o0" data-path="src/pages/HomePage.tsx">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" data-id="5mbyv7xvw" data-path="src/pages/HomePage.tsx">
          <div className="lg:col-span-2" data-id="bpw6ot61n" data-path="src/pages/HomePage.tsx">
            <h2 className="text-4xl font-bold mb-4 text-gray-900" data-id="xkm36nzfr" data-path="src/pages/HomePage.tsx">
              Transforming Data into
              <span className="block bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent" data-id="gyxrz9z3b" data-path="src/pages/HomePage.tsx">
                Actionable Insights
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-id="k59y6d75m" data-path="src/pages/HomePage.tsx">
              I'm a data analyst with a passion for turning complex datasets into clear, actionable
              business insights. Specializing in statistical analysis, data visualization, and
              predictive modeling to help organizations make data-driven decisions.
            </p>
            <div className="flex flex-wrap gap-4" data-id="2cb4m8kku" data-path="src/pages/HomePage.tsx">
              <Button className="bg-blue-700 hover:bg-blue-800">View Portfolio</Button>
              <Button variant="outline">Contact Me</Button>
            </div>
          </div>
          <div className="flex justify-center items-center" data-id="kq5028ojz" data-path="src/pages/HomePage.tsx">
            <div className="relative" data-id="i78ol4f51" data-path="src/pages/HomePage.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-900 rounded-full blur-md" data-id="0kquxxd8h" data-path="src/pages/HomePage.tsx"></div>
              <Avatar className="h-64 w-64 border-4 border-white relative">
                <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="mb-16" data-id="ccbsg861i" data-path="src/pages/HomePage.tsx">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800" data-id="fpvae6jg2" data-path="src/pages/HomePage.tsx">Data Analysis Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="ozp2tib3r" data-path="src/pages/HomePage.tsx">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h4 className="text-lg font-medium mb-4 text-gray-800" data-id="6jd0f6yfa" data-path="src/pages/HomePage.tsx">Project Workflow Distribution</h4>
                <div className="h-72" data-id="pbyfv80dj" data-path="src/pages/HomePage.tsx">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>

                        {pieChartData.map((entry, index) =>
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        )}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h4 className="text-lg font-medium mb-4 text-gray-800" data-id="tsuua6cl0" data-path="src/pages/HomePage.tsx">Performance Metrics (2023)</h4>
                <div className="h-72" data-id="e19z6ioi1" data-path="src/pages/HomePage.tsx">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={timeSeriesData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="productivity"
                        stroke="#0088FE"
                        strokeWidth={2}
                        activeDot={{ r: 8 }} />

                      <Line
                        type="monotone"
                        dataKey="accuracy"
                        stroke="#00C49F"
                        strokeWidth={2} />

                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16" data-id="vemlyhuiq" data-path="src/pages/HomePage.tsx">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800" data-id="38joakaol" data-path="src/pages/HomePage.tsx">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4" data-id="hvgii6l67" data-path="src/pages/HomePage.tsx">
            {mockSkillsData.map((skill) =>
            <div key={skill.name} className="mb-3" data-id="dq6drdh4g" data-path="src/pages/HomePage.tsx">
                <div className="flex justify-between items-center mb-1" data-id="l9j33rrrt" data-path="src/pages/HomePage.tsx">
                  <span className="font-medium text-gray-700" data-id="9xbwghjht" data-path="src/pages/HomePage.tsx">{skill.name}</span>
                  <span className="text-sm text-gray-500" data-id="qqk2onnzc" data-path="src/pages/HomePage.tsx">{skill.value}%</span>
                </div>
                <Progress value={skill.value} className="h-2" />
              </div>
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16" data-id="j8vup3kvm" data-path="src/pages/HomePage.tsx">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800" data-id="rmifw9mb7" data-path="src/pages/HomePage.tsx">Featured Projects</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8" data-id="2dvk77x4i" data-path="src/pages/HomePage.tsx">
            {mockProjectData.map((project) =>
            <Card
              key={project.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
              activeProject === project.id ? 'border-blue-500 shadow-md' : ''}`
              }
              onClick={() => setActiveProject(project.id)}>

                <div className="h-48 overflow-hidden" data-id="5jse0zbm9" data-path="src/pages/HomePage.tsx">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover" data-id="0v8iaq0lp" data-path="src/pages/HomePage.tsx" />

                </div>
                <CardContent className="pt-4">
                  <h4 className="text-lg font-medium mb-2" data-id="5fpja2zx4" data-path="src/pages/HomePage.tsx">{project.title}</h4>
                  <div className="flex flex-wrap gap-1 mb-3" data-id="j4vl2zz60" data-path="src/pages/HomePage.tsx">
                    {project.tools.map((tool) =>
                  <Badge key={tool} variant="secondary" className="bg-blue-50 text-blue-700">
                        {tool}
                      </Badge>
                  )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Active Project Details */}
          {activeProject &&
          <Card className="p-6 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-id="wllyyg3ad" data-path="src/pages/HomePage.tsx">
                <div className="lg:col-span-2" data-id="wytwxfxnp" data-path="src/pages/HomePage.tsx">
                  <h4 className="text-xl font-semibold mb-3" data-id="3hixp9e9o" data-path="src/pages/HomePage.tsx">
                    {mockProjectData.find((p) => p.id === activeProject)?.title}
                  </h4>
                  <p className="text-gray-600 mb-4" data-id="8zyxim2f6" data-path="src/pages/HomePage.tsx">
                    {mockProjectData.find((p) => p.id === activeProject)?.description}
                  </p>
                  <h5 className="font-medium text-gray-800 mb-2" data-id="8d7ii9nig" data-path="src/pages/HomePage.tsx">Key Achievements:</h5>
                  <ul className="list-disc list-inside text-gray-600 mb-4" data-id="ekxssn1vm" data-path="src/pages/HomePage.tsx">
                    <li data-id="fetiu1xgr" data-path="src/pages/HomePage.tsx">Increased data processing efficiency by 45%</li>
                    <li data-id="82b7lh8g9" data-path="src/pages/HomePage.tsx">Developed automated reporting system saving 10+ hours weekly</li>
                    <li data-id="pum4vt53r" data-path="src/pages/HomePage.tsx">Identified key trends leading to strategic business decisions</li>
                    <li data-id="2dpz8481a" data-path="src/pages/HomePage.tsx">Implemented data validation techniques improving data quality by 30%</li>
                  </ul>
                </div>
                <div data-id="18jgudsda" data-path="src/pages/HomePage.tsx">
                  <h5 className="font-medium text-gray-800 mb-3" data-id="lsdvuzx0r" data-path="src/pages/HomePage.tsx">Performance Metrics</h5>
                  <div className="h-64" data-id="0h2vh9nvv" data-path="src/pages/HomePage.tsx">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                      data={mockProjectData.find((p) => p.id === activeProject)?.metrics}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 50, bottom: 5 }}>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#0088FE" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </Card>
          }
        </section>

        {/* Education & Certifications */}
        <section className="mb-16" data-id="f6m6skzj0" data-path="src/pages/HomePage.tsx">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800" data-id="mui5mwufw" data-path="src/pages/HomePage.tsx">Education & Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="q7cr0ng1e" data-path="src/pages/HomePage.tsx">
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <h4 className="text-lg font-medium mb-4 flex items-center" data-id="e28426oiu" data-path="src/pages/HomePage.tsx">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="unt0gtlnr" data-path="src/pages/HomePage.tsx">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" data-id="rfai8y6ku" data-path="src/pages/HomePage.tsx" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" data-id="ubfnqqtx0" data-path="src/pages/HomePage.tsx" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" data-id="n7aawdkzo" data-path="src/pages/HomePage.tsx" />
                  </svg>
                  Education
                </h4>
                <div className="space-y-4" data-id="nvc8w58jf" data-path="src/pages/HomePage.tsx">
                  <div data-id="xtlklii9v" data-path="src/pages/HomePage.tsx">
                    <h5 className="font-medium text-gray-800" data-id="xcqrauesz" data-path="src/pages/HomePage.tsx">Master of Science in Data Analytics</h5>
                    <p className="text-gray-600" data-id="zsda81pao" data-path="src/pages/HomePage.tsx">Stanford University</p>
                    <p className="text-sm text-gray-500" data-id="d8xjlscmf" data-path="src/pages/HomePage.tsx">2019 - 2021</p>
                  </div>
                  <Separator />
                  <div data-id="zgr6ca3n7" data-path="src/pages/HomePage.tsx">
                    <h5 className="font-medium text-gray-800" data-id="rttj9qloa" data-path="src/pages/HomePage.tsx">Bachelor of Science in Statistics</h5>
                    <p className="text-gray-600" data-id="za87oio79" data-path="src/pages/HomePage.tsx">University of California, Berkeley</p>
                    <p className="text-sm text-gray-500" data-id="6rqu3njsm" data-path="src/pages/HomePage.tsx">2015 - 2019</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <h4 className="text-lg font-medium mb-4 flex items-center" data-id="5aaqcn3ak" data-path="src/pages/HomePage.tsx">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="4xno8knx7" data-path="src/pages/HomePage.tsx">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-id="c1oa5vax1" data-path="src/pages/HomePage.tsx" />
                  </svg>
                  Certifications
                </h4>
                <div className="space-y-3" data-id="t7ty8jvqu" data-path="src/pages/HomePage.tsx">
                  {certifications.map((cert, index) =>
                  <div key={index} className="mb-3" data-id="7ld94kshn" data-path="src/pages/HomePage.tsx">
                      <h5 className="font-medium text-gray-800" data-id="ztm4gwsww" data-path="src/pages/HomePage.tsx">{cert.name}</h5>
                      <div className="flex justify-between" data-id="4x3a8phha" data-path="src/pages/HomePage.tsx">
                        <p className="text-gray-600" data-id="2owzml5z7" data-path="src/pages/HomePage.tsx">{cert.issuer}</p>
                        <p className="text-sm text-gray-500" data-id="ow0ktzlly" data-path="src/pages/HomePage.tsx">{cert.year}</p>
                      </div>
                      {index < certifications.length - 1 && <Separator className="mt-3" />}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16" data-id="435d8ofkn" data-path="src/pages/HomePage.tsx">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800" data-id="mvbwhx1ov" data-path="src/pages/HomePage.tsx">Get In Touch</h3>
          <div className="max-w-2xl mx-auto" data-id="b4er2tjka" data-path="src/pages/HomePage.tsx">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <form className="space-y-4" data-id="9ij10plre" data-path="src/pages/HomePage.tsx">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="k3760t6pd" data-path="src/pages/HomePage.tsx">
                    <div className="space-y-2" data-id="q17zus58w" data-path="src/pages/HomePage.tsx">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700" data-id="kmpf5wang" data-path="src/pages/HomePage.tsx">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Name" data-id="99vk4bmr2" data-path="src/pages/HomePage.tsx" />

                    </div>
                    <div className="space-y-2" data-id="lsz29wouc" data-path="src/pages/HomePage.tsx">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700" data-id="1i449h848" data-path="src/pages/HomePage.tsx">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your.email@example.com" data-id="xdjlfg0qi" data-path="src/pages/HomePage.tsx" />

                    </div>
                  </div>
                  <div className="space-y-2" data-id="fi8gamjzq" data-path="src/pages/HomePage.tsx">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700" data-id="tvuhnx58e" data-path="src/pages/HomePage.tsx">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="How can I help you?" data-id="3xbwwvqu1" data-path="src/pages/HomePage.tsx" />

                  </div>
                  <div className="space-y-2" data-id="9p74jhwzg" data-path="src/pages/HomePage.tsx">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700" data-id="43agjt9w7" data-path="src/pages/HomePage.tsx">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message here..." data-id="k1cxllas0" data-path="src/pages/HomePage.tsx" />

                  </div>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 mt-auto bg-gray-50" data-id="qg63g77k4" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="9tunxfhmt" data-path="src/pages/HomePage.tsx">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-id="3bkacszth" data-path="src/pages/HomePage.tsx">
            <div className="md:col-span-2" data-id="u185d5mnk" data-path="src/pages/HomePage.tsx">
              <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent" data-id="zlr2f7grc" data-path="src/pages/HomePage.tsx">
                John Doe | Data Analyst
              </h4>
              <p className="text-gray-600 mb-4" data-id="zn1v1g2ku" data-path="src/pages/HomePage.tsx">
                Helping businesses make data-driven decisions through comprehensive analysis and visualization.
              </p>
              <div className="flex space-x-4" data-id="fwubtu1ug" data-path="src/pages/HomePage.tsx">
                <a href="#" className="text-gray-500 hover:text-blue-700" data-id="7t9do8kxq" data-path="src/pages/HomePage.tsx">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-id="6ezv4y2es" data-path="src/pages/HomePage.tsx">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" data-id="3o10e0me4" data-path="src/pages/HomePage.tsx" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-700" data-id="kynofji6g" data-path="src/pages/HomePage.tsx">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-id="jbukqx515" data-path="src/pages/HomePage.tsx">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" data-id="y9gk65f0d" data-path="src/pages/HomePage.tsx" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-700" data-id="6ox2823mz" data-path="src/pages/HomePage.tsx">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-id="3aj47vvuf" data-path="src/pages/HomePage.tsx">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" data-id="wj3wf0ik0" data-path="src/pages/HomePage.tsx" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-700" data-id="y9aly0dg6" data-path="src/pages/HomePage.tsx">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-id="lc2j0gkpn" data-path="src/pages/HomePage.tsx">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" data-id="luxxhufl9" data-path="src/pages/HomePage.tsx" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-700" data-id="oud42c0su" data-path="src/pages/HomePage.tsx">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-id="74bj39ccm" data-path="src/pages/HomePage.tsx">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" data-id="twgl5sms8" data-path="src/pages/HomePage.tsx" />
                  </svg>
                </a>
              </div>
            </div>
            <div data-id="dauchdekm" data-path="src/pages/HomePage.tsx">
              <h5 className="font-medium text-gray-800 mb-4" data-id="kwe0t9r08" data-path="src/pages/HomePage.tsx">Quick Links</h5>
              <ul className="space-y-2" data-id="e3531e9yt" data-path="src/pages/HomePage.tsx">
                <li data-id="mzhmtws06" data-path="src/pages/HomePage.tsx"><a href="#" className="text-gray-600 hover:text-blue-700" data-id="lw9wbe4fj" data-path="src/pages/HomePage.tsx">Home</a></li>
                <li data-id="837io3bv0" data-path="src/pages/HomePage.tsx"><a href="#" className="text-gray-600 hover:text-blue-700" data-id="p3inpljus" data-path="src/pages/HomePage.tsx">Portfolio</a></li>
                <li data-id="w0v3uswdu" data-path="src/pages/HomePage.tsx"><a href="#" className="text-gray-600 hover:text-blue-700" data-id="ob8cqz41j" data-path="src/pages/HomePage.tsx">Skills</a></li>
                <li data-id="puhjwwzj1" data-path="src/pages/HomePage.tsx"><a href="#" className="text-gray-600 hover:text-blue-700" data-id="fjbno5uhb" data-path="src/pages/HomePage.tsx">About</a></li>
                <li data-id="1ytuhydd9" data-path="src/pages/HomePage.tsx"><a href="#" className="text-gray-600 hover:text-blue-700" data-id="4l0pnzvld" data-path="src/pages/HomePage.tsx">Contact</a></li>
              </ul>
            </div>
            <div data-id="30v5kqn3q" data-path="src/pages/HomePage.tsx">
              <h5 className="font-medium text-gray-800 mb-4" data-id="pcf9tf8f3" data-path="src/pages/HomePage.tsx">Contact</h5>
              <ul className="space-y-2" data-id="b07u5eloo" data-path="src/pages/HomePage.tsx">
                <li className="flex items-start" data-id="itnm1qz1z" data-path="src/pages/HomePage.tsx">
                  <svg className="h-5 w-5 mr-2 text-blue-700 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="zlbbvujgr" data-path="src/pages/HomePage.tsx">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-id="g710xc2pj" data-path="src/pages/HomePage.tsx" />
                  </svg>
                  <span className="text-gray-600" data-id="foddj7yzh" data-path="src/pages/HomePage.tsx">(555) 123-4567</span>
                </li>
                <li className="flex items-start" data-id="0lftk2vf3" data-path="src/pages/HomePage.tsx">
                  <svg className="h-5 w-5 mr-2 text-blue-700 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="hbo8uqy1o" data-path="src/pages/HomePage.tsx">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-id="ukyqn3u2l" data-path="src/pages/HomePage.tsx" />
                  </svg>
                  <span className="text-gray-600" data-id="ubw95b1yr" data-path="src/pages/HomePage.tsx">john.doe@example.com</span>
                </li>
                <li className="flex items-start" data-id="bucqhfsi2" data-path="src/pages/HomePage.tsx">
                  <svg className="h-5 w-5 mr-2 text-blue-700 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="tc5c2eetd" data-path="src/pages/HomePage.tsx">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-id="c7j8fzocw" data-path="src/pages/HomePage.tsx" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-id="w2hltqrj0" data-path="src/pages/HomePage.tsx" />
                  </svg>
                  <span className="text-gray-600" data-id="lxgdlmqgd" data-path="src/pages/HomePage.tsx">San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500" data-id="0er1nrgyw" data-path="src/pages/HomePage.tsx">
            <p data-id="zxuty32dx" data-path="src/pages/HomePage.tsx">© {new Date().getFullYear()} John Doe | Data Analyst. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

};

export default HomePage;