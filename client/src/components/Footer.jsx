import github_icon from '/icons/github.png';
import { useTranslation } from 'react-i18next';

function Footer(){
    const { t} = useTranslation();
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a className='a-tag' href="https://github.com/vanshbaranwal/AskUni"><img src={github_icon} alt="" srcSet="" /></a>
                    
                    <div><a target="_blank" href="https://github.com/vanshbaranwal/AskUni">{t("github")}</a></div>
                </div>
                <ul className="list-inline">
                    <li target="_blank"  className="list-inline-item"><a href="#home">{t("home")}</a></li>
                    <li target="_blank"  className="list-inline-item"><a href="https://askuni-seven.vercel.app/chat">{t("chat")}</a></li>
                    <li target="_blank"  className="list-inline-item"><a href="#about">{t("about")}</a></li>
                    <li target="_blank"  className="list-inline-item"><a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=askunichatbot@gmail.com">{t("contact")}</a></li>
                </ul>
                <p className="copyright">© 2025 AskUni</p>
            </footer>
        </div>
    );
}
export default Footer;