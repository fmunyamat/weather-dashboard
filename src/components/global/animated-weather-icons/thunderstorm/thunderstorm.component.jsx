import './thunderstorm.styles.scss';

const Thunderstorm = ({ style }) => {
    return (
        <>
            <div className="thunderstorm-icon-container">
                <svg
                    style={style}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64">
                    <defs>
                        <filter id="blur" width="200%" height="200%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                            <feOffset dx="0" dy="4" result="offsetblur"/>
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.05"/>
                            </feComponentTransfer>
                            <feMerge> 
                                <feMergeNode/>
                                <feMergeNode in="SourceGraphic"/> 
                            </feMerge>
                        </filter>
                        </defs>
                    <g filter="url(#blur)" id="thunder">
                        <g transform="translate(20,10)">
                            <g className="am-weather-cloud-1">
                                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-10,-6), scale(0.6)" />
                            </g>
                            <g>
                                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                            </g>
                            <g transform="translate(-9,28), scale(1.2)">
                                <polygon className="am-weather-stroke" fill="orange" stroke="white" strokeWidth="1" points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </>
    );
};

export default Thunderstorm;