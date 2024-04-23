
interface ResultProps {
    accuracy: number;
    error: number;
    typedNumber: number;
    className?: string;
    state: string
}

import { motion } from "framer-motion"
const Result = ({ accuracy, error, typedNumber, className, state }: ResultProps) => {
    const initial = { opacity: 0 }
    const animate = { opacity: 1 }
    const duration = { duration: 0.5, ease: "linear" }
    if (state !== 'finish') return null
    return (
        <motion.ul
            className={`${className} flex flex-col items-center dark:text-primary-500 text-green-500 space-y-3`}>
            <motion.li
                initial={initial} animate={animate} transition={{ ...duration, delay: 0 }}
            >Results</motion.li>
            <motion.li
                initial={initial} animate={animate} transition={{ ...duration, delay: 0.5 }}
            >Accuracy:{accuracy.toFixed(0)}%</motion.li>
            <motion.li
                className="text-red-500"
                initial={initial} animate={animate} transition={{ ...duration, delay: 1 }}
            >Error:{error}</motion.li>
            <motion.li
                initial={initial} animate={animate} transition={{ ...duration, delay: 1.5 }}
            >Typed Number:{typedNumber}</motion.li>
        </motion.ul >)
}

export default Result;