import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Feaature from "./components/Feature";

i18next.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources : {
        en:{
            translation :{
                logoTxt:"AskUni",
                login:"Sign-Up / Login",
                heroText:"AI Powered Multilingual Campus Assistant",
                spanText:"Ready to chat? Your queries, your language — Hindi, English, Rajasthani, and 3+ regional languages",
                btnText:"chat",
                FeatureHeading:"Features",
                Feature1H:"Seamless Integration",
                Feature1:"Designed to embed easily into the college website",
                Feature2H:"Smart FAQ Integration",
                Feature2:"Dropdown for quick access to frequent queries",
                Feature3H:"Institution-Specific Knowledge Base",
                Feature3:"Trained on circulars, PDFs, notices, timetable, fees, etc",
                Feature4H:"Updatable Knowledge Base",
                Feature4:"The bot’s information can be easily updated to stay relevant",
                Feature5H:"Cost Effective",
                Feature5:"Low infrastructure requirement (basic server + cloud)",
                Feature6H:"Privacy by Design",
                Feature6:"Students often hesitate to ask “silly” doubts in front of others",
            }
        },
        hi:{
            translation :{
                logoTxt:"आस्कयूनि",
                login:"दाखल / लॉगिन",
                heroText:"एआई समर्थित बहुभाषी कैंपस सहायक  ",
                spanText:"बात करने के लिए तैयार?  आपके प्रश्न, आपकी भाषा — हिन्दी, अंग्रेज़ी, राजस्थानी और ३+ क्षेत्रीय भाषाएँ",
                btnText:"बात ",
                FeatureHeading:"विशेषताएँ",
                Feature1H:"सहज एकीकरण ",
                Feature1:" कॉलेज की वेबसाइट में आसानी से एम्बेड करने के लिए डिज़ाइन किया गया।",
                Feature2H:"स्मार्ट FAQ इंटीग्रेशन ",
                Feature2:"बार-बार पूछे जाने वाले सवालों के लिए ड्रॉपडाउन सुविधा।",
                Feature3H:"संस्थान-विशिष्ट ज्ञान आधार ",
                Feature3:"सर्कुलर, PDF, नोटिस, टाइमटेबल, फीस आदि पर आधारित प्रशिक्षण।",
                Feature4H:"अपडेटेबल ज्ञान आधार ",
                Feature4:"बॉट की जानकारी को आसानी से अपडेट किया जा सकता है ताकि यह हमेशा प्रासंगिक रहे।",
                Feature5H:"लागत-कुशल ",
                Feature5:"कम इन्फ्रास्ट्रक्चर की आवश्यकता (साधारण सर्वर + क्लाउड)।",
                Feature6H:" प्राइवेसी बाय डिज़ाइन ",
                Feature6:"छात्र अक्सर साधारण सवाल दूसरों के सामने पूछने में संकोच करते हैं।",
            }

        },
        rj:{
            translation :{
                logoTxt:"आस्कयूनि",
                login:"दाखल / लॉगिन",
                heroText:"ए.आई. चालित बहुभाषी कैंपस सहायको",
                spanText:"गपसप करन वास्ते तैयार हो? थारा सवाल, थारी भाषा — हिंदी, इंग्लिश, राजस्थानी अर ३+ प्रादेशिक भाषां",
                btnText:"गपसप",
                FeatureHeading:"विशेषताएँ",
                Feature1H:"सरल मिलणो",
                Feature1:"कॉलेज वेबसाइट में आसानी सूं जोडबा खातर बनायो गयो।",
                Feature2H:"समझदार FAQ जोडणो",
                Feature2:"बारंबार सवालां खातर झटपट पहुँच वास्ते ड्रॉपडाउन।",
                Feature3H:"संस्थान-विशेष ज्ञान आधार",
                Feature3:"सर्कुलर, PDF, नोटिस, टाइमटेबल, फीस आदी पर आधारित।",
                Feature4H:"अपडेट होणो ज्ञान आधार",
                Feature4:"बॉट री माहिती ने आसानी सूं अपडेट कर सकी है तांईं यो हमेशा काम आवे।",
                Feature5H:"सस्ता अर फायदेमंद",
                Feature5:"कम ढांचा चाही (बेसिक सर्वर + क्लाउड)।",
                Feature6H:"गोपनीयता री रचना",
                Feature6:"विद्यार्थी अकसर दूसरां री आगर “साधा” सवाल पूछण सूं झिझकता है।"
            }
        }
    }
})