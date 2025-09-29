import github_icon from '/icons/github.png';
import { useTranslation } from 'react-i18next';

function Footer(){
    const { t} = useTranslation();
    return (
        <div class="footer-basic">
            <footer>
                <div class="social">
                    
                    <img src={github_icon} alt="" srcset="" />
                    <div><a target="_blank" href="https://github.com/vanshbaranwal/AskUni">{t("github")}</a></div>
                </div>
                <ul class="list-inline">
                    <li target="_blank"  class="list-inline-item"><a href="https://askuni-seven.vercel.app/">{t("home")}</a></li>
                    <li target="_blank"  class="list-inline-item"><a href="https://askuni-seven.vercel.app/chat">{t("chat")}</a></li>
                    <li target="_blank"  class="list-inline-item"><a href="#">{t("about")}</a></li>
                    <li target="_blank"  class="list-inline-item"><a href="#">{t("contact")}</a></li>
                </ul>
                <p class="copyright">AskUni © 2025</p>
            </footer>
        </div>
    );
}
export default Footer;