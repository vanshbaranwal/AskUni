import github_icon from '/icons/github.png';

function Footer(){
    return (
        <div class="footer-basic">
            <footer>
                <div class="social">
                    
                    <img src={github_icon} alt="" srcset="" />
                    <div><a target="_blank" href="https://github.com/vanshbaranwal/AskUni">GitHub</a></div>
                </div>
                <ul class="list-inline">
                    <li target="_blank"  class="list-inline-item"><a href="https://askuni-seven.vercel.app/">Home</a></li>
                    <li target="_blank"  class="list-inline-item"><a href="https://askuni-seven.vercel.app/chat">Chat</a></li>
                    <li target="_blank"  class="list-inline-item"><a href="#">About</a></li>
                    <li target="_blank"  class="list-inline-item"><a href="#">Teams</a></li>
                </ul>
                <p class="copyright">AskUni © 2025</p>
            </footer>
        </div>
    );
}
export default Footer;