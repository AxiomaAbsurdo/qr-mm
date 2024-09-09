const reportWebVitals = (onPerfEntry: any) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((webVitals) => {
      // Access the functions directly from the imported module
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals as any;

      if (getCLS) getCLS(onPerfEntry);
      if (getFID) getFID(onPerfEntry);
      if (getFCP) getFCP(onPerfEntry);
      if (getLCP) getLCP(onPerfEntry);
      if (getTTFB) getTTFB(onPerfEntry); // Ensure the function exists before calling
    });
  }
};

export default reportWebVitals;