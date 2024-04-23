import { motion } from "framer-motion";



const Caret = () => {
    return <motion.div
        className="inline-block w-0.5 h-7 dark:bg-primary-500 bg-green-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
    />
};

export default Caret;