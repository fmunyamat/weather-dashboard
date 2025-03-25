import './alert-banner.styles.scss';

const AlertBanner = ({ alerts }) => {
    // Early return if no alerts
    if (!alerts || alerts.length === 0) {
        return null;
    }

    // Duplicate alerts to ensure smooth scrolling
    const scrollingAlerts =  [...alerts, ...alerts];

    return (
        <div className="alert-banner">
            <div className="alert-track">
                <div className="alert-content">
                    {scrollingAlerts.map((alert, index) => (
                        <div key={index} className="alert-item">
                            {scrollingAlerts.length > 2 
                                ? `WEATHER ALERT ${(index % alerts.length) + 1}: ${alert.description}`
                                : `WEATHER ALERT: ${alert.description}`}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlertBanner;