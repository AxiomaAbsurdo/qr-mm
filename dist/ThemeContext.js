import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useContext } from 'react';
var ThemeContext = createContext(undefined);
export var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState('light'), theme = _b[0], setTheme = _b[1];
    var toggleTheme = function () {
        setTheme(function (prevTheme) { return (prevTheme === 'light' ? 'dark' : 'light'); });
    };
    return (_jsx(ThemeContext.Provider, { value: { theme: theme, toggleTheme: toggleTheme }, children: children }));
};
export var useTheme = function () {
    var context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
