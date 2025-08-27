import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import SkillBar from "@/components/molecules/SkillBar";

const CVPreview = ({ cvData, template, isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-full h-full bg-white rounded-lg shadow-lg p-8 animate-pulse">
        <div className="space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-100 rounded"></div>
            <div className="h-4 bg-gray-100 rounded w-5/6"></div>
            <div className="h-4 bg-gray-100 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

const { personalInfo, experience, education, skills, myWorkProjects } = cvData;

  const ModernTemplate = () => (
    <div className="cv-preview w-full max-w-[210mm] mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header with gradient background */}
<div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-8">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <ApperIcon name="User" size={40} className="text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
<p className="text-xl text-green-100 mb-4">{personalInfo.title}</p>
            <div className="flex flex-wrap gap-6 text-sm">
              {personalInfo.email && (
                <div className="flex items-center">
                  <ApperIcon name="Mail" size={16} className="mr-2" />
                  {personalInfo.email}
                </div>
              )}
              )}
              {personalInfo.location && (
                <div className="flex items-center">
                  <ApperIcon name="MapPin" size={16} className="mr-2" />
                  {personalInfo.location}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Left Column */}
        <div className="lg:col-span-2 p-8">
          {/* Professional Summary */}
          {personalInfo.summary && (
            <section className="mb-8">
<h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <ApperIcon name="User" size={24} className="mr-3 text-green-600" />
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
            </section>
          )}

          {/* Work Experience */}
          {experience && experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ApperIcon name="Briefcase" size={24} className="mr-3 text-primary" />
                Work Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.Id} className="border-l-4 border-primary pl-6 pb-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-gray-600 text-sm">{exp.location}</p>
                      </div>
                      <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{exp.description}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ApperIcon name="GraduationCap" size={24} className="mr-3 text-primary" />
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
<div key={edu.Id} className="bg-gradient-to-r from-green-50 to-green-50 p-4 rounded-lg border border-green-100">
                    <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-600">{edu.field}</span>
                      <span className="text-gray-500 text-sm">{edu.startYear} - {edu.endYear}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
)}

          {/* My Work Projects */}
          {myWorkProjects && myWorkProjects.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ApperIcon name="FolderOpen" size={24} className="mr-3 text-primary" />
                My Work Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {myWorkProjects.map((project) => (
                  <div key={project.Id} className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-lg border border-blue-100 hover:shadow-md transition-shadow duration-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <ApperIcon name="ExternalLink" size={16} className="mr-2 text-primary" />
                      <a 
                        href={project.link} 
                        target="_blank" 
rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 underline decoration-2 underline-offset-2"
                      >
                        {project.name}
                      </a>
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="bg-gray-50 p-8">
          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <ApperIcon name="Contact" size={20} className="mr-2 text-primary" />
              Contact
            </h2>
            <div className="space-y-3 text-sm">
{personalInfo.linkedin && (
                <div className="flex items-center">
                  <ApperIcon name="Linkedin" size={16} className="mr-3 text-green-600" />
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 underline decoration-2 underline-offset-2"
                  >
                    {personalInfo.linkedin}
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* Skills */}
          {skills && skills.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <ApperIcon name="Code" size={20} className="mr-2 text-primary" />
                Technical Skills
              </h2>
              <div className="space-y-3">
                {skills.slice(0, 8).map((skill) => (
                  <SkillBar key={skill.Id} skill={skill} showPercentage={true} />
                ))}
              </div>
            </section>
          )}

          {/* Skill Categories */}
          {skills && skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <ApperIcon name="Layers" size={20} className="mr-2 text-primary" />
                Expertise Areas
              </h2>
              <div className="space-y-2">
                {[...new Set(skills.map(skill => skill.category))].map((category, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-gray-200">
                    <span className="text-sm font-medium text-gray-800">{category}</span>
                    <div className="text-xs text-gray-600 mt-1">
                      {skills.filter(s => s.category === category).length} skills
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );

  const ClassicTemplate = () => (
    <div className="cv-preview w-full max-w-[210mm] mx-auto bg-white shadow-xl">
      <div className="p-8 border-b-4 border-gray-800">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
        <p className="text-xl text-gray-700 mb-4">{personalInfo.title}</p>
<div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      <div className="p-8 space-y-8">
        {personalInfo.summary && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-800 pb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        {experience && experience.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-800 pb-2">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.Id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                      <p className="font-medium text-gray-800">{exp.company} - {exp.location}</p>
                    </div>
                    <span className="text-gray-600 text-sm">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
)}

        {/* My Work Projects */}
        {myWorkProjects && myWorkProjects.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-800 pb-2">
              MY WORK PROJECTS
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {myWorkProjects.map((project) => (
<div key={project.Id} className="border-l-4 border-green-600 pl-4 py-2">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 underline decoration-2 underline-offset-2"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className="text-gray-700 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education && education.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-800 pb-2">
                EDUCATION
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.Id}>
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-800">{edu.institution}</p>
                    <p className="text-gray-600 text-sm">{edu.field} • {edu.startYear} - {edu.endYear}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills && skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-800 pb-2">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.Id} className="flex justify-between">
                    <span className="text-gray-900">{skill.name}</span>
                    <span className="text-gray-600 text-sm">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );

  const renderTemplate = () => {
    switch (template?.style) {
      case "classic":
        return <ClassicTemplate />;
      case "technical":
        return <ModernTemplate />;
      case "creative":
        return <ModernTemplate />;
      default:
        return <ModernTemplate />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {renderTemplate()}
    </motion.div>
  );
};

export default CVPreview;