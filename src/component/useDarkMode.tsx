import { useEffect, useState } from "react"

const matchDark = '(prefers-color-scheme: dark)'

const useDarkMode = () => {
    const [isDark, setIsDark] = useState(() => window.matchMedia && window.matchMedia(matchDark).matches)

    useEffect(() => {
        const mediaQueryList = window.matchMedia(matchDark)
        const listener = () => setIsDark(mediaQueryList.matches)
        mediaQueryList.addEventListener('change', listener)
        return () => mediaQueryList.removeEventListener('change', listener)
    }, [])

    useEffect(() => {
        const root = document.documentElement
        if (isDark) {
            root.classList.add('dark')
            //在html标签上添加dark类
        } else {
            root.classList.remove('dark')
        }
    }, [isDark])

    return { isDark, setIsDark }
}

export default useDarkMode