import { motion } from "framer-motion";

const SkillBar = ({ skill, showPercentage = true }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-900">{skill.name}</span>
        {showPercentage && (
          <span className="text-xs text-gray-600">{skill.level}%</span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
      {skill.category && (
        <span className="text-xs text-gray-500 mt-1">{skill.category}</span>
      )}
    </div>
  );
};

export default SkillBar;