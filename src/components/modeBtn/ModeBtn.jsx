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
        <div>
            <a className='btn btn-dark btnMode' onClick={toggleTheme} >
                {
                    theme === 'dark-mode' ? 'Dark mode' : 'Light mode'
                }
            </a>
        </div>
    )
}
