import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const CVHeader = ({ onMobilePreviewToggle, isMobilePreview }) => {
  return (
    <motion.header 
      className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <ApperIcon name="FileText" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">CV Craft</h1>
              <p className="text-xs text-gray-600">Professional Resume Builder</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <ApperIcon name="CheckCircle" size={16} className="text-green-500" />
              <span>Auto-saved</span>
            </div>

            <Button
              onClick={onMobilePreviewToggle}
              variant="ghost"
              size="small"
              className="md:hidden"
            >
              <ApperIcon 
                name={isMobilePreview ? "Edit" : "Eye"} 
                size={16} 
                className="mr-2" 
              />
              {isMobilePreview ? "Edit" : "Preview"}
            </Button>

<div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-100 to-green-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-700">Live Preview</span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default CVHeader;