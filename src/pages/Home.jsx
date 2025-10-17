import "./Home.css"
import headerVideo from "../assets/headervid.mp4"
import aboutImage from "../assets/grouppic.jpg"
import ReviewsSlider from "../components/Reviews";

export default function Home() {
    return (
        <div className="home">
            <section className="header-container">
                <video className="header-video" autoPlay loop muted playsinline>
                    <source src={headerVideo}type="video/mp4" />
                </video>
                <div className="video-overlay">
                    <h1>Welcome to Flantastic!!</h1>
                    <p>Your home away from home!</p>
                    <a href="/products"className="shop-btn">Shop Now</a>
                </div>
            </section>
            <section className="about">
                <div className="about-content">
                    <div className="about-text"> 
                        <h2>About Us</h2>
                        <p>Welcome to Flantastic Coffee co. a cozy drive-thru cafe serving coffee, 
                         Tasty food, Flan, and other tasty homemade desserts with love. Here, every
                         sip and bite feels like home. We can't wait to see you soon!
                        </p>
                    </div>
                    <div className="abt-img">
                        <img src={aboutImage} alt="Staff photo" />
                    </div>
                </div>
            </section>

            <section className="reviews">
                <h2>Customer Reviews</h2>
                <ReviewsSlider />
            </section>  
        </div>
    )
}






