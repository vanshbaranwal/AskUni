function Feaature() {
    return (
        <>
            <div className="Animation_wrapper">


                <svg className="bloob-f-1" height="270" viewBox="0 0 407 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_29_22)">
                        <path d="M343.014 245.475C279.042 295.461 59.2215 315.926 13.4857 257.393C-32.25 198.86 113.418 83.4944 177.391 33.5082C241.363 -16.4781 330.3 -9.54967 376.036 48.9832C421.771 107.516 406.987 195.488 343.014 245.475Z" fill="url(#paint0_linear_29_22)" />
                    </g>
                    <defs>
                        <filter id="filter0_d_29_22" x="0.751465" y="0.118164" width="405.853" height="300.897" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_29_22" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_29_22" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_29_22" x1="376.036" y1="48.9832" x2="49.8121" y2="303.884" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#43D9C0" />
                            <stop offset="0.5" stopColor="#4DD0BB" />
                            <stop offset="1" stopColor="#53ADED" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg className="bloob-f-2" height="300" viewBox="0 0 544 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_43_4)">
                        <path d="M273.57 392.222C195.12 371.326 83.4082 215.287 102.527 143.507C121.646 71.7276 253.735 106.131 332.186 127.027C410.637 147.923 458.734 223.052 439.615 294.831C420.496 366.611 352.021 413.118 273.57 392.222Z" fill="#FF9FEA" />
                    </g>
                    <defs>
                        <filter id="filter0_f_43_4" x="0.362793" y="0.201294" width="543.444" height="497.049" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_43_4" />
                        </filter>
                    </defs>
                </svg>





            </div>
            <div className=" Feature_wrapper ">
                <div className="feature-title">
                    <h1>Features</h1>
                </div>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h2>Seamless Integration</h2>
                        <p>Designed to embed easily into the college website</p>
                    </div>
                    <div className="feature-card">
                        <h2>Smart FAQ Integration</h2>
                        <p> Dropdown for quick access to frequent queries</p>
                    </div>
                    <div className="feature-card">
                        <h2>Institution-Specific Knowledge Base</h2>
                        <p>Trained on circulars, PDFs, notices, timetable, fees, etc</p>
                        </div>
                    <div className="feature-card">
                        <h2>Updatable Knowledge Base</h2>
                        <p>The bot’s information can be easily updated to stay relevant</p>
                    </div>
                    <div className="feature-card">
                        <h2>Cost Effective</h2>
                        <p>Low infrastructure requirement (basic server + cloud)</p>
                    </div>
                    <div className="feature-card">
                        <h2>Privacy by Design</h2>
                        <p>Students often hesitate to ask “silly” doubts in front of others</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Feaature;