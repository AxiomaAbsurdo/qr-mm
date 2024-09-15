import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from './ThemeContext';
var Card = function (_a) {
    var children = _a.children;
    var theme = useTheme().theme;
    var cardStyle = {
        maxWidth: 345,
        padding: 16,
        margin: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme === 'light' ? '#ffffff' : '#222222',
        color: theme === 'light' ? '#222222' : '#ffffff',
        border: "".concat(theme === 'light' ? '#808080' : '#ffffff'),
        borderRadius: 8,
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
    };
    return _jsx("div", { style: cardStyle, children: children });
};
export default Card;
