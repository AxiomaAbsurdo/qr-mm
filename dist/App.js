import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from './Card';
import ThemeSwitcher from './ThemeSwitcher';
import { LinkHub } from './Dock';
import { ThemeProvider, useTheme } from './ThemeContext';
import './App.css';
var AppContent = function () {
    var theme = useTheme().theme;
    return (_jsx("div", { className: "app ".concat(theme), children: _jsx(Card, { children: _jsxs("div", { className: "card-content", children: [_jsx("div", { className: "card-top-right", children: _jsx(ThemeSwitcher, {}) }), _jsx("img", { src: "https://media.licdn.com/dms/image/v2/D4D03AQHsvkDJv8uaXQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700684772171?e=1731542400&v=beta&t=8TXt4hihSniu-XAAADDfT47lO4ri1gn4kF7QIHIObTw", alt: "Profile", className: "profile-picture" }), _jsx("h1", { children: "Matias Mortara" }), _jsx("h2", { children: "Software Solution Architect Cybersecurity Specialist" }), _jsx(LinkHub, {})] }) }) }));
};
var App = function () {
    return (_jsx(ThemeProvider, { children: _jsx(AppContent, {}) }));
};
export default App;
