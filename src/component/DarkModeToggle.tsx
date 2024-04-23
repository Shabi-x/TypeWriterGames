import { MdDarkMode } from "react-icons/md"
import useDarkMode from "./useDarkMode"
import { CiLight } from "react-icons/ci"
import { useRef } from "react"

const DarkModeToggle = () => {
    const { isDark, setIsDark } = useDarkMode()
    const toggleRef = useRef<HTMLButtonElement>(null)
    const handleToggleClick = () => {
        toggleRef.current?.blur()
        setIsDark(!isDark)
    }
    return <button
        className="w-7 h-7 absolute top-4 right-4 dark:text-slate-300"
        onClick={handleToggleClick}>
        {isDark ? <MdDarkMode /> : <CiLight />}
    </button>
}


export default DarkModeToggle