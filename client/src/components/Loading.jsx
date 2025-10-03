import "./loading.css";
import { useEffect } from "react";

function Loading() {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            document.querySelector(".main-loader").classList.add("remove");
        }, 4000);

        return () => clearTimeout(timeoutId); // cleanup if component unmounts
    }, []);
    return (
        <div class="main-loader">
            <div class="loader-container">
                <div class="load"></div>
            </div>
        </div>
    );
}

export default Loading;