// Tag component for getting the emotions of the user

import { motion } from "framer-motion";

const Tag = ({ label, onClick, isActive }) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileHover={{ x: 4}}
      className={`inline-flex items-center justify-center 
                 md:px-4 px-3 py-2 rounded-2xl 
                 border-2 text-gray-800 text-lg md:text-2xl
                 shadow-sm duration-500
               hover:border-gray-600 
                 ${isActive ? 'bg-blue-50 border-gray-600' : 'bg-transparent border-gray-200'}`}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

export default Tag;
