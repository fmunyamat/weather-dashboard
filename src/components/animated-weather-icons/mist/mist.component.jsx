import './mist.styles.scss';

const Mist = () => {
    return (
        <>
            <div className="mist-icon-container">
                <svg
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
                    
                    <g filter="url(#blur)" id="mist">
                        <g transform="translate(20,10)">
                        <g>
                            <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)"/>
                        </g>
                        </g>
                        
                        <g className="am-weather-mist-1">
                        <line fill="none" stroke="#91C0F8" strokeLinecap="round" strokeWidth="1.2" x1="17" x2="35" y1="44" y2="44" />
                        <line fill="none" stroke="#91C0F8" strokeLinecap="round" strokeWidth="1.2" x1="14" x2="42" y1="48" y2="48" />
                        </g>
                        
                        <g className="am-weather-mist-2">
                        <line fill="none" stroke="#91C0F8" strokeLinecap="round" strokeWidth="1.2" x1="20" x2="40" y1="38" y2="38" />
                        <line fill="none" stroke="#91C0F8" strokeLinecap="round" strokeWidth="1.2" x1="18" x2="37" y1="52" y2="52" />
                        </g>
                        
                        <g className="am-weather-mist-3">
                        <line fill="none" stroke="#91C0F8" strokeLinecap="round" strokeWidth="1.2" x1="24" x2="45" y1="41" y2="41" />
                        <line fill="none" stroke="#91C0F8" strokeLinecap="round" strokeWidth="1.2" x1="10" x2="30" y1="55" y2="55" />
                        </g>
                    </g>
                    </svg>
            </div>
        </>
    );
};

export default Mist;