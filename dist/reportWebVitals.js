var reportWebVitals = function (onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(function (webVitals) {
            // Access the functions directly from the imported module
            var _a = webVitals, getCLS = _a.getCLS, getFID = _a.getFID, getFCP = _a.getFCP, getLCP = _a.getLCP, getTTFB = _a.getTTFB;
            if (getCLS)
                getCLS(onPerfEntry);
            if (getFID)
                getFID(onPerfEntry);
            if (getFCP)
                getFCP(onPerfEntry);
            if (getLCP)
                getLCP(onPerfEntry);
            if (getTTFB)
                getTTFB(onPerfEntry); // Ensure the function exists before calling
        });
    }
};
export default reportWebVitals;
