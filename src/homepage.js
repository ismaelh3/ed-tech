import './homepage.css';

function NavigatonBar() {
    return (
    <div id = 'MainContainer'>
        <nav className = 'NavigationBar' role = 'navigation'>
            <div className = 'Container'>
                <div className = 'FirstDiv'> 
                        <div className = 'RoadMap'> 
                            <a href = "https://www.khanacademy.org/"> Roadmap </a>
                        </div>
                        <div className = 'Explore'>
                            <a href = "https://www.callofdutyleague.com/en-us/"> Explore </a>
                        </div>
                        <div className = 'Resources'>
                            <a href = "https://scratch.mit.edu/" > Resources </a>
                        </div>
                        <div className = 'About'> 
                            <a href = "https://www.apple.com/" > About </a>      
                        </div>
                </div> 
                <div className = "MiddleDiv"> 
                    <div className = "TheLogo">
                        <img src = "https://banner2.cleanpng.com/20180503/uaq/avdoc9im6.webp" alt = "logo" className = "TempLogo"/> 
                    </div>
                </div>
                <div className = "ThirdDiv"> 
                    <div className = 'Search'>
                        <input className = "SearchBar" type = 'text' placeholder = 'Search...'/>
                        <div className = 'SignIn'>
                            <a href = "#SignIn" className = 'SignButton'> Sign In </a>
                        </div>
                    </div>
                </div>
            </div> 
        </nav>
    </div>
    );
}

export default NavigatonBar;