import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Feaature from "./components/Feature";

i18next.use(LanguageDetector).use(initReactI18next).init({
    debug: false,
    lng: "en",
    resources : {
        en:{
            translation :{
                home:"HOME",
                about:"ABOUT",
                team:"TEAM",
                chat:"CHAT",
                contact:"CONTACT",
                github:"GitHub",

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

                about_h:"About",
                about_p:"AskUni is an AI-powered multilingual campus assistant that simplifies student life. Supporting Hindi, English, Rajasthani, and more, it answers queries on admissions, fees, timetables, scholarships, and events instantly—no more PDFs or queues.For colleges, AskUni reduces staff workload, ensures consistent communication, and promotes inclusivity. With seamless integration and smart updates, it’s the digital bridge between students and institutions.",

                team:"Team",
                role:"Role",
                t1:"Rudraksha Keshari",
                r1:"Frontend & Backend",
                t2:"Ayaan Iqbal",
                r2:"Backend",
                t3:"Vansh Baranwal",
                r3:"AI/ML",
                t4:"Rahul Gautam",
                r4:"Researcher",
                t5:"Suhani Yadav",
                r5:"UI/UX design",
                t6:"Pranjali Keshari",
                r6:"Documentation & testing"

            }
        },
        hi:{
            translation :{
                home:"होम",
                about:"के बारे में",
                team:"टीम",
                chat:"बात करना",
                contact:"संपर्क",
                github:"गिटहब",


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

                about_h:"विवरण",
                about_p:"AskUni एक एआई-संचालित बहुभाषी कैंपस सहायक है जो छात्रों के जीवन को सरल बनाता है। यह हिंदी, अंग्रेज़ी, राजस्थानी और अन्य भाषाओं का समर्थन करता है, और प्रवेश, फीस, टाइमटेबल, छात्रवृत्ति, और कार्यक्रमों से जुड़ी पूछताछ का तुरंत जवाब देता है — अब पीडीएफ़ खोजने या कतार में लगने की ज़रूरत नहीं।कॉलेजों के लिए, AskUni स्टाफ का काम कम करता है, सुसंगत संचार सुनिश्चित करता है, और समावेशिता को बढ़ावा देता है।अपने सरल एकीकरण (integration) और स्मार्ट अपडेट सिस्टम के साथ, यह छात्रों और संस्थानों के बीच का डिजिटल पुल (digital bridge) है।",
                
                team:"टीम",
                role:"भूमिका",
                t1:"रुद्राक्ष केशरी",
                r1:"फ्रंटएंड एवं बैकएंड",
                t2:"अयान इकबाल",
                r2:"बैकएंड",
                t3:"वंश बरनवाल",
                r3:"एआई/एमएल",
                t4:"राहुल गौतम",
                r4:"शोधकर्ता ",
                t5:"सुहानी यादव",
                r5:"यूआई/यूएक्स डिज़ाइन",
                t6:"प्रांजलि केशरी",
                r6:"दस्तावेज़ीकरण एवं परीक्षण"
            }

        },
        rj:{
            translation :{
                home:"होम",
                about:"के बारे में",
                team:"टीम",
                chat:"बात करना",
                contact:"संपर्क",
                github:"गिटहब",

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
                Feature6:"विद्यार्थी अकसर दूसरां री आगर “साधा” सवाल पूछण सूं झिझकता है।",

                about_h:"विवरण",
                about_p:"AskUni एक एआइ चालत बहुभासीय कैंपस सहायको है, जिको मकसद विद्यार्थीनो जीवन आसान बनावणो है। ई हिंदी, इंग्लिश, राजस्थानी अणि अरनी भाषां समझै है, अणि दाखला, फीस, टाइमटेबल, छात्रवृत्ति अणि कार्यक्रमां स्यूं जुड़ेला सवालां को झटपट जवाब देवै है — अब पीडीएफ़ां खोजण री या कतार में उभा रहण री जरूरत नै।कॉलेज खातर, AskUni स्टाफ़ रो काम घटावै है, समान बातचीत बनावै है, अणि सबने साथ लै समावेश बढ़ावै है।अपने सहेला जोड़ (integration) अणि स्मार्ट अपडेट सिस्टम स्यूं, ई विद्यार्थी अणि संस्थान बीच रो डिजिटल पूल है।",

                
                team:"टीम",
                role:"भूमिका",
                t1:"रुद्राक्ष केशरी",
                r1:"फ्रंटएंड एवं बैकएंड",
                t2:"अयान इकबाल",
                r2:"बैकएंड",
                t3:"वंश बरनवाल",
                r3:"एआई/एमएल",
                t4:"राहुल गौतम",
                r4:"शोधकर्ता ",
                t5:"सुहानी यादव",
                r5:"यूआई/यूएक्स डिज़ाइन",
                t6:"प्रांजलि केशरी",
                r6:"दस्तावेज़ीकरण एवं परीक्षण"
            }
        }
    }
})