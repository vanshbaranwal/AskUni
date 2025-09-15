

function Navbar() {
    return (
        <>
            {/* This is screen for conataining bloob*/}
            {/* This is where you can add compnent for home screen*/}
            
                <div className="Navbar_wapper">
                    <div>
                        <img className="logo" srcSet="src\assets\logo.png" alt="" srcset="" width="50px" />
                    </div>
                    <div className="container">
                        
                            <a className="handburger" href="#menu"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                            </svg></a>
                        

                        <div className="popover" id="menu">
                            <div className='content'>
                                <a href="#" className="close"></a>
                                <div className='nav'>
                                    <ul className='nav_list'>

                                        <div className='nav_list_item'>
                                            <li><a href="#">Home</a></li>
                                        </div>
                                        <div className='nav_list_item'>
                                            <li><a href="#">About</a></li>
                                        </div>
                                        <div className='nav_list_item'>
                                            <li><a href="#">Team</a></li>
                                        </div>
                                        <div className='nav_list_item'>
                                            <li><a href="#">Chat</a></li>
                                        </div>
                                        <div className='nav_list_item'>
                                            <li><a href="#">Contact</a></li>
                                        </div>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            


        </>
    )
}

export default Navbar;