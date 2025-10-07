import { useTranslation } from "react-i18next";

export default function About (){
     const { t } = useTranslation();
    return(
        
        <>
        
        <div className="container-about" id="about">
            <svg className="bloob-f-2 bloob-about" height="270" viewBox="0 0 407 302" fill="none" xmlns="http://www.w3.org/2000/svg">
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
               

            <div className="feature-title About">
                    <h1>{t ("about")}</h1>
                   <div className="feature-card About-card">
                     <p> {t ("about_p")}</p>
                   </div>
            </div>
        </div>
        
        </>
    )
}