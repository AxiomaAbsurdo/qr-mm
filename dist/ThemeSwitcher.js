import { jsx as _jsx } from "react/jsx-runtime";
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeContext';
import './App.css';
var ThemeSwitcher = function () {
    var _a = useTheme(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (_jsx("button", { onClick: toggleTheme, className: "theme-switcher", children: theme === 'light' ? _jsx(FaMoon, {}) : _jsx(FaSun, {}) }));
};
export default ThemeSwitcher;
