import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CVPreview from "@/components/organisms/CVPreview";
import CVHeader from "@/components/organisms/CVHeader";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import templateService from "@/services/api/templateService";
import cvService from "@/services/api/cvService";

const CVBuilder = () => {
  const [cvData, setCvData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobilePreview, setIsMobilePreview] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Load CV data and default template
const cvResponse = await cvService.getCVData();
      setCvData(cvResponse);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);


  const handleMobilePreviewToggle = () => {
    setIsMobilePreview(!isMobilePreview);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-surface">
        <CVHeader />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Loading />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-surface">
        <CVHeader />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Error 
            message="Failed to load your CV data. Please check your connection and try again."
            onRetry={loadData}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
<CVHeader 
        onMobilePreviewToggle={handleMobilePreviewToggle}
        isMobilePreview={isMobilePreview}
      />

<div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile View Toggle */}
        <div className="md:hidden mb-6">
          {isMobilePreview ? (
            <motion.div
              key="mobile-preview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <CVPreview cvData={cvData} />
            </motion.div>
          ) : null}
        </div>
        {/* Desktop Two-Column Layout */}
<div className="hidden md:grid md:grid-cols-12 gap-8">
          {/* Left Column - Controls */}
          {/* Right Column - Preview */}
          <div className="col-span-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="sticky top-24"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto max-h-[80vh]">
                <div className="transform scale-75 origin-top">
                  <CVPreview cvData={cvData} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Professional Achievements</h2>
            <p className="text-blue-100">Showcasing excellence in web development and continuous learning</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cvData?.achievements?.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-2">
                  {achievement.split(" ")[0]}
                </div>
                <div className="text-blue-100 text-sm">
                  {achievement.split(" ").slice(1).join(" ")}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Expertise Section */}
        {cvData?.technicalExpertise && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Object.entries(cvData.technicalExpertise).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <ul className="space-y-2">
                  {skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-gray-700 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CVBuilder;