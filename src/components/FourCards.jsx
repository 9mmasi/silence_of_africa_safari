import "./fourcards.css"
import Card from "./Cards"
import bg1 from "../assets/honeymoon.jpg"
import bg2 from "../assets/families.jpg"
import bg3 from "../assets/couples.jpg"
import bg4 from "../assets/zenji.jpg"
const FourCards = () => {
    return (
      <section >
        <div className='experience'>
        <h1>Well-known experiences</h1>
      <p>Passtimes for leisure and enjoyment.</p>
        </div>
      
      <div className="card-container">
        <Card imageSrc={bg1} text="Honeymoon" />
        <Card imageSrc={bg2} text="Families" />
        <Card imageSrc={bg3} text="Couples" />
      </div>
      </section>
    );
  }

export default FourCards