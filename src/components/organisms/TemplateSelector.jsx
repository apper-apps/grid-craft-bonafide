import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TemplateCard from "@/components/molecules/TemplateCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import templateService from "@/services/api/templateService";

const TemplateSelector = ({ selectedTemplate, onTemplateSelect }) => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTemplates = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await templateService.getAllTemplates();
      setTemplates(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTemplates();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm">
              <div className="aspect-[3/4] bg-gray-200 rounded animate-pulse mb-3"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-3 bg-gray-100 rounded animate-pulse w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Error 
        message="Failed to load CV templates. Please try again."
        onRetry={loadTemplates}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Template</h2>
        <p className="text-gray-600">Select a professional template for your CV</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {templates.map((template) => (
          <TemplateCard
            key={template.Id}
            template={template}
            isSelected={selectedTemplate?.Id === template.Id}
            onSelect={() => onTemplateSelect(template)}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-sm font-bold">!</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Template Features</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• ATS-friendly formatting for automated screening systems</li>
              <li>• Professional layouts optimized for readability</li>
              <li>• Consistent typography and spacing throughout</li>
              <li>• Print-ready PDF export with proper margins</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateSelector;