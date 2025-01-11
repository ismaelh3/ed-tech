import './homepage.css';

function NavigatonBar() {
    return (
    <div className = 'NavigationBar'>
        <div className = 'FirstThree'>   
            <a href = "#road"> Roadmap </a>
            <a href = "#Explore"> Explore </a>
            <a href = "#Resources" > Resources </a>
        </div> 
        <div className = "Middle"> 
            <img src = "https://banner2.cleanpng.com/20180503/uaq/avdoc9im6.webp" alt = "logo" className = "TempLogo"/> 
        </div>
        <div className = "LastThree"> 
            <a href = "#About" > About </a>      
            <input className = "SearchBar" placeholder = 'Search...'/>
            <a href = "#SignIn"> Sign In </a>
        </div> 
    </div>
    );
}

export default NavigatonBar;