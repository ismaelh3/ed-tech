import './homepage.css';

function NavigatonBar() {
    return (
        <div className = "navbar">
            <a className = "options" href = "#home"> Home </a>
            <a href = "#explore"> Explore </a>
            <a href = "#resources" > Resources </a>
            <a href = "#about" > About </a>
            <div className = "search"> Search </div>
            <a href = "#signin" > Sign In </a>
        </div>
    );
  }

  export default NavigatonBar;
