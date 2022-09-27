import { useContext } from 'react'
import { ThemeContext } from '../../../App'
import './switch.css'
export default function Switch() {
    const toggleTheme = useContext(ThemeContext)
    return (
        <>
        <div className="switch">
            <input type="checkbox" className="switch__input" id="Switch" onChange={toggleTheme}/>
            <label className="switch__label" htmlFor="Switch">
                <span className="switch__indicator"></span>
                <span className="switch__decoration"></span>
            </label>
        </div>

        </>
    )
}