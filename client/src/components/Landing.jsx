import { useNavigate } from "react-router-dom";


function Landing_page() {
    const navigate = useNavigate()
    
    const goToChat = () => {
        navigate("/chat"); 
    };
    return (
        <>


            <div className="Animation_wrapper">
                {/* <svg  height="270" className="bloob1" viewBox="0 0 409 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M335.683 253.221C266.602 295.87 45.8642 292.038 6.84252 228.831C-32.1792 165.623 125.292 66.9758 194.373 24.3275C263.455 -18.3208 351.09 -1.65436 390.112 61.553C429.133 124.76 404.765 210.573 335.683 253.221Z" fill="url(#paint0_linear_64_2)" />
                    <defs>
                        <linearGradient id="paint0_linear_64_2" x1="390.112" y1="61.5529" x2="37.8362" y2="279.034" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFCA80" />
                            <stop offset="1" stop-color="#7BC8FF" />
                        </linearGradient>
                    </defs>
                </svg> */}


                <svg className="bloob1" height="270" viewBox="0 0 407 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_29_22)">
                        <path d="M343.014 245.475C279.042 295.461 59.2215 315.926 13.4857 257.393C-32.25 198.86 113.418 83.4944 177.391 33.5082C241.363 -16.4781 330.3 -9.54967 376.036 48.9832C421.771 107.516 406.987 195.488 343.014 245.475Z" fill="url(#paint0_linear_29_22)" />
                    </g>
                    <defs>
                        <filter id="filter0_d_29_22" x="0.751465" y="0.118164" width="405.853" height="300.897" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_29_22" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_29_22" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_29_22" x1="376.036" y1="48.9832" x2="49.8121" y2="303.884" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#43D9C0" />
                            <stop offset="0.5" stop-color="#4DD0BB" />
                            <stop offset="1" stop-color="#53ADED" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg className="bloob2" height="300" viewBox="0 0 544 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_43_4)">
                        <path d="M273.57 392.222C195.12 371.326 83.4082 215.287 102.527 143.507C121.646 71.7276 253.735 106.131 332.186 127.027C410.637 147.923 458.734 223.052 439.615 294.831C420.496 366.611 352.021 413.118 273.57 392.222Z" fill="#FF9FEA" />
                    </g>
                    <defs>
                        <filter id="filter0_f_43_4" x="0.362793" y="0.201294" width="543.444" height="497.049" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_43_4" />
                        </filter>
                    </defs>
                </svg>
                {/* <svg className="bloob2" width="352" height="274" viewBox="0 0 352 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M223.557 273.187C142.416 270.5 -1.5749 143.637 0.883009 69.3954C3.34092 -4.84622 139.785 -1.08237 220.926 1.60397C302.068 4.29031 365.853 66.6528 363.395 140.894C360.937 215.136 304.699 275.873 223.557 273.187Z" fill="url(#paint0_linear_29_4)" />
                    <defs>
                        <linearGradient id="paint0_linear_29_4" x1="12.5" y1="39.5" x2="350" y2="184" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4AD2CE" />
                            <stop offset="0.504808" stop-color="#4DCCD0" />
                            <stop offset="1" stop-color="#37ACFF" />
                        </linearGradient>
                    </defs>
                </svg> */}




            </div>
            <div className="Landing_page_info">
                <div className="wrapper_heading">
                    <h1>AskUni

                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa dolorum quod excepturi, accusamus quasi ab eligendi, ducimus doloremque, iure consequuntur. libero.</p>
                    <button className="chat-button" onClick={goToChat}>Chat</button>
                </div>
            </div>
        </>
    )
}

export default Landing_page;