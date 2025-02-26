// TradingViewWidget.jsx
import React, { useRef, useEffect } from 'react';

const TradingViewWidget = React.memo(() => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement('script');
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: "FX:EURUSD",
        interval: "W", // Weekly interval
        width: "100%",
        height: "100%",
        locale: "en",
        dateRange: "12M",
        colorTheme: "light",
        trendLineColor: "rgba(17, 85, 204, 1)",
        underLineColor: "rgba(73, 133, 231, 1)",
        underLineBottomColor: "rgba(73, 133, 231, 0)",
        isTransparent: false,
        autosize: true,
        largeChartUrl: "",
        chartOnly: true
      });
      containerRef.current.appendChild(script);
    }

    // Cleanup function to remove the script if the component unmounts
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      {/* <div className="tradingview-widget-container__widget"></div> */}
    </div>
  );
});

export default TradingViewWidget;
