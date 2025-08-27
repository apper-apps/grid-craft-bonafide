import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No content available", 
  message = "There's nothing to display right now.",
  action,
  actionLabel = "Get Started",
  icon = "FileText"
}) => {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-md mx-auto">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <ApperIcon name={icon} size={32} className="text-blue-600" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {message}
        </p>
        
        {action && (
          <Button onClick={action} variant="primary">
            <ApperIcon name="Plus" size={16} className="mr-2" />
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Empty;