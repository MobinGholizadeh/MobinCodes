import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import SectionContainer from '@/components/SectionContainer'

export default function Resume() {
  return (
    <SectionContainer>
      <PageSEO title={`Resume - ${siteMetadata.author}`} description="My professional resume" />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resume
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          {/* Professional Experience */}
          <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-3">
            <h2 className="mb-4 text-2xl font-bold">Professional Experience</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Etraab Holding</h3>
              <p className="text-gray-600 dark:text-gray-400">.NET Developer | 11/2023 - Present</p>
              <p>Working on enterprise-level .NET applications and web services.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Yedastegol</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Full-stack Developer | 10/2024 - 01/2025
              </p>
              <p>Developed and maintained full-stack web applications.</p>
            </div>
          </div>

          {/* Skills */}
          <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-3">
            <h2 className="mb-4 text-2xl font-bold">Technical Skills</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-semibold">Frontend</h3>
                <ul className="list-disc pl-5">
                  <li>React.js</li>
                  <li>ASP.NET MVC</li>
                  <li>Flutter</li>
                  <li>MAUI</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Backend</h3>
                <ul className="list-disc pl-5">
                  <li>.NET Core</li>
                  <li>Node.js (Express)</li>
                  <li>Python (Django)</li>
                  <li>SQL Server</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-3">
            <h2 className="mb-4 text-2xl font-bold">Education</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Computer Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400">Urmia University</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
