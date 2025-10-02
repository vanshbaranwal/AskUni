import github_icon from '/icons/github.png';
import { useTranslation } from 'react-i18next';

function Footer(){
    const { t} = useTranslation();
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    
                    <img src={github_icon} alt="" srcSet="" />
                    <div><a target="_blank" href="https://github.com/vanshbaranwal/AskUni">{t("github")}</a></div>
                </div>
                <ul className="list-inline">
                    <li target="_blank"  className="list-inline-item"><a href="https://askuni-seven.vercel.app/">{t("home")}</a></li>
                    <li target="_blank"  className="list-inline-item"><a href="https://askuni-seven.vercel.app/chat">{t("chat")}</a></li>
                    <li target="_blank"  className="list-inline-item"><a href="#">{t("about")}</a></li>
                    <li target="_blank"  className="list-inline-item"><a href="#">{t("contact")}</a></li>
                </ul>
                <p className="copyright">AskUni © 2025</p>
            </footer>
        </div>
    );
}
export default Footer;