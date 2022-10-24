import { useContext } from 'react'
import { ThemeContext, UpdateThemeContext,  } from '../../../App'
import './switch.css'
export default function Switch() {
    const toggleTheme = useContext(UpdateThemeContext)
    const checked = useContext(ThemeContext)
    return (
        <>
        <div className="switch">
            <input type="checkbox" className="switch__input" id="Switch" onChange={toggleTheme} checked={checked}/>
            <label className="switch__label" htmlFor="Switch">
                <span className="switch__indicator"></span>
                <span className="switch__decoration"></span>
            </label>
        </div>

        </>
    )
}