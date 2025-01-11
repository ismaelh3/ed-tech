import './homepage.css';

function NavigatonBar() {
    return (
        <div className = "NavigationBar">   
            <a className = "options" href = "#road"> Roadmap </a>
            <a href = "#explore"> Explore </a>
            <a href = "#resources" > Resources </a>
            <img src = "https://banner2.cleanpng.com/20180503/uaq/avdoc9im6.webp" alt = "logo" className = "templogo"/>
            <a href = "#about" > About </a>
            <a href = "#signin"> Sign In </a>
            <input className = "searchbar" placeholder = 'Search...'/>
        </div> 
    );
}

export default NavigatonBar;