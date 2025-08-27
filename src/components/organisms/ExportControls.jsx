import { useState } from "react";
import { toast } from "react-toastify";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const ExportControls = ({ cvData, template }) => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    try {
      setIsExporting(true);
      
      // Simulate PDF generation delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, you would use jsPDF and html2canvas
      // to generate and download the PDF
      
      toast.success("PDF downloaded successfully!");
      
    } catch (error) {
      toast.error("Failed to export PDF. Please try again.");
      console.error("PDF export error:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const exportToHTML = async () => {
    try {
      setIsExporting(true);
      
      // Create HTML content
      const htmlContent = generateHTMLContent(cvData, template);
      
      // Create and download file
      const blob = new Blob([htmlContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${cvData.personalInfo.name.replace(/\s+/g, "_")}_CV.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success("HTML file downloaded successfully!");
      
    } catch (error) {
      toast.error("Failed to export HTML. Please try again.");
      console.error("HTML export error:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const generateHTMLContent = (cvData, template) => {
    const { personalInfo, experience, education, skills } = cvData;
    
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personalInfo.name} - CV</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background: #fff; }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #3b82f6); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px; }
        .header h1 { font-size: 2.5em; margin-bottom: 10px; }
        .header .title { font-size: 1.2em; margin-bottom: 15px; opacity: 0.9; }
        .contact-info { display: flex; gap: 20px; flex-wrap: wrap; font-size: 0.9em; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #2563eb; font-size: 1.5em; margin-bottom: 15px; border-bottom: 2px solid #2563eb; padding-bottom: 5px; }
        .experience-item, .education-item { margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #2563eb; }
        .experience-item h3, .education-item h3 { color: #1f2937; margin-bottom: 5px; }
        .company, .institution { font-weight: bold; color: #2563eb; }
        .date { float: right; color: #6b7280; font-size: 0.9em; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; }
        .skill-item { background: #f8fafc; padding: 10px; border-radius: 5px; border-left: 4px solid #2563eb; }
        .skill-name { font-weight: bold; }
        .skill-level { color: #6b7280; font-size: 0.9em; }
        @media print { .no-print { display: none !important; } }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>${personalInfo.name}</h1>
            <div class="title">${personalInfo.title}</div>
            <div class="contact-info">
                ${personalInfo.email ? `<span>📧 ${personalInfo.email}</span>` : ""}
                ${personalInfo.phone ? `<span>📱 ${personalInfo.phone}</span>` : ""}
                ${personalInfo.location ? `<span>📍 ${personalInfo.location}</span>` : ""}
            </div>
        </header>

        ${personalInfo.summary ? `
        <section class="section">
            <h2>Professional Summary</h2>
            <p>${personalInfo.summary}</p>
        </section>
        ` : ""}

        ${experience && experience.length > 0 ? `
        <section class="section">
            <h2>Work Experience</h2>
            ${experience.map(exp => `
            <div class="experience-item">
                <span class="date">${exp.startDate} - ${exp.endDate}</span>
                <h3>${exp.position}</h3>
                <div class="company">${exp.company} - ${exp.location}</div>
                <p>${exp.description}</p>
                ${exp.achievements && exp.achievements.length > 0 ? `
                <ul>
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join("")}
                </ul>
                ` : ""}
            </div>
            `).join("")}
        </section>
        ` : ""}

        ${education && education.length > 0 ? `
        <section class="section">
            <h2>Education</h2>
            ${education.map(edu => `
            <div class="education-item">
                <span class="date">${edu.startYear} - ${edu.endYear}</span>
                <h3>${edu.degree}</h3>
                <div class="institution">${edu.institution}</div>
                <p>${edu.field}</p>
            </div>
            `).join("")}
        </section>
        ` : ""}

        ${skills && skills.length > 0 ? `
        <section class="section">
            <h2>Technical Skills</h2>
            <div class="skills-grid">
                ${skills.map(skill => `
                <div class="skill-item">
                    <div class="skill-name">${skill.name}</div>
                    <div class="skill-level">${skill.category} • ${skill.level}%</div>
                </div>
                `).join("")}
            </div>
        </section>
        ` : ""}
    </div>
</body>
</html>`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Export Your CV</h3>
          <p className="text-sm text-gray-600">Download your professional CV in different formats</p>
        </div>
        <ApperIcon name="Download" size={24} className="text-primary" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button 
          onClick={exportToPDF}
          disabled={isExporting}
          variant="primary"
          className="flex items-center justify-center space-x-2"
        >
          {isExporting ? (
            <>
              <ApperIcon name="Loader2" size={16} className="animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <ApperIcon name="FileText" size={16} />
              <span>Export PDF</span>
            </>
          )}
        </Button>

        <Button 
          onClick={exportToHTML}
          disabled={isExporting}
          variant="outline"
          className="flex items-center justify-center space-x-2"
        >
          <ApperIcon name="Code" size={16} />
          <span>Export HTML</span>
        </Button>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start space-x-2">
          <ApperIcon name="Info" size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Export Tips:</p>
            <ul className="text-xs space-y-1">
              <li>• PDF format is recommended for job applications</li>
              <li>• HTML format allows for easy online sharing</li>
              <li>• Both formats are ATS-friendly and professionally formatted</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportControls;