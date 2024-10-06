import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Header Component with Props
function Header({ title }) {
    return (
        <header>
            <div className="logo">{title}</div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/academics">Academics</Link></li>
                    <li><Link to="/admissions">Admissions</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

// Hero Component with Props and Event
function Hero({ title, subtitle }) {
    const [clicks, setClicks] = React.useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <section className="hero" onClick={handleClick}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>Clicks: {clicks}</p>
        </section>
    );
}

// Features Component with Props and Key
function Features({ features }) {
    return (
        <section className="features">
            {features.map((feature, index) => (
                <div className="feature" key={index}>
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                </div>
            ))}
        </section>
    );
}

// News Component
function News() {
    return (
        <section className="news">
            <h2>Latest News</h2>
            <ul>
                <li>VES College Ranks #1 in Engineering</li>
                <li>New Research Center Inaugurated</li>
                <li>Annual Tech Fest Dates Announced</li>
            </ul>
        </section>
    );
}

// Footer Component
function Footer() {
    return (
        <footer>
            <p>© 2023 VES College. All rights reserved.</p>
            <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
            </div>
        </footer>
    );
}

// Home Page Component
function Home() {
    const featuresData = [
        { title: "Excellence in Education", description: "Providing quality education since 1962" },
        { title: "State-of-the-art Facilities", description: "Modern labs and learning spaces" },
        { title: "Industry Partnerships", description: "Collaborations with leading companies" }
    ];

    return (
        <div>
            <Hero title="Welcome to VES College" subtitle="Empowering Minds, Shaping Futures" />
            <Features features={featuresData} />
            <News />
        </div>
    );
}

// About Page Component
function About() {
    return <h2>About VES College</h2>;
}

// Academics Page Component
function Academics() {
    return <h2>Our Academic Programs</h2>;
}

// Admissions Page Component
function Admissions() {
    return <h2>Admissions Information</h2>;
}

// Contact Page Component
function Contact() {
    return <h2>Contact Us</h2>;
}

// Main App Component
function App() {
    return (
        <Router>
            <div>
                <Header title="VES" />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/academics" component={Academics} />
                    <Route path="/admissions" component={Admissions} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
