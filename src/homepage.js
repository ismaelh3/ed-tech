import './homepage.css';

function NavigatonBar() {
    return (
    <div className = 'NavigationBar'>
        <div className = 'FirstDiv'>   
            <a href = "#road"> Roadmap </a>
            <a href = "#Explore"> Explore </a>
            <a href = "#Resources" > Resources </a>
            <a href = "#About" > About </a>      
        </div> 
        <div className = "MiddleDiv"> 
            <img src = "https://banner2.cleanpng.com/20180503/uaq/avdoc9im6.webp" alt = "logo" className = "TempLogo"/> 
        </div>
        <div className = "ThirdDiv"> 
            <input className = "SearchBar" type = 'text' placeholder = 'Search...'/>
            <a href = "#SignIn"> Sign In </a>
        </div> 
    </div>
    );
}

export default NavigatonBar;