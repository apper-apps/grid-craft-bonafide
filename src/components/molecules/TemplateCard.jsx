import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const TemplateCard = ({ template, isSelected, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        hover
        className={`p-4 cursor-pointer transition-all duration-200 ${
          isSelected 
            ? "ring-2 ring-primary border-primary shadow-lg bg-gradient-to-br from-primary/5 to-accent/5" 
            : "hover:border-gray-300"
        }`}
        onClick={onSelect}
      >
        <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-white m-2 rounded shadow-sm flex flex-col p-2 space-y-1">
            <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded"></div>
            <div className="h-1 bg-gray-200 rounded w-3/4"></div>
            <div className="flex-1 space-y-1 pt-2">
              <div className="h-1 bg-gray-100 rounded"></div>
              <div className="h-1 bg-gray-100 rounded w-5/6"></div>
              <div className="h-1 bg-gray-100 rounded w-4/6"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
          <p className="text-xs text-gray-600 capitalize">{template.style} style</p>
          
          {isSelected && (
            <div className="mt-2 flex items-center justify-center text-primary">
              <ApperIcon name="Check" size={16} />
              <span className="ml-1 text-xs font-medium">Selected</span>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default TemplateCard;