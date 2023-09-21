import { useState, useEffect } from 'react'
/* css */
import './modeBtn.css'

export default function ModeBtn() {
    const [theme, setTheme] = useState('light-mode')

    const toggleTheme = () => {
        theme === 'dark-mode' ? setTheme('light-mode') : setTheme('dark-mode')
    }
    
    useEffect(() => {
        document.body.className = theme
    }, [theme])
    

    return (
        <>
            <label className="switch btnMode">
                <input type="checkbox" onClick={toggleTheme}/>
                <span className="slider"></span>
            </label>
        </>
    )
}
