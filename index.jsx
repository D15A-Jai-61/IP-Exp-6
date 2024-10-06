const e = React.createElement;

// Header Component with Props
function Header({ title, setCurrentPage }) {
    return e('header', null, [
        e('div', { className: 'logo' }, title),
        e('nav', null, 
            e('ul', null, [
                e('li', null, e('a', { href: '#', onClick: () => setCurrentPage('home') }, 'Home')),
                e('li', null, e('a', { href: '#', onClick: () => setCurrentPage('about') }, 'About')),
                e('li', null, e('a', { href: '#', onClick: () => setCurrentPage('academics') }, 'Academics')),
                e('li', null, e('a', { href: '#', onClick: () => setCurrentPage('admissions') }, 'Admissions')),
                e('li', null, e('a', { href: '#', onClick: () => setCurrentPage('contact') }, 'Contact'))
            ])
        )
    ]);
}

// Hero Component with Props and Event
function Hero({ title, subtitle }) {
    const [clicks, setClicks] = React.useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return e('section', { className: 'hero', onClick: handleClick }, [
        e('h1', null, title),
        e('p', null, subtitle),
        e('p', null, `Clicks: ${clicks}`)
    ]);
}

// Features Component with Props and Key
function Features({ features }) {
    return e('section', { className: 'features' },
        features.map((feature, index) => 
            e('div', { className: 'feature', key: index }, [
                e('h2', null, feature.title),
                e('p', null, feature.description)
            ])
        )
    );
}

// News Component
function News() {
    return e('section', { className: 'news' }, [
        e('h2', null, 'Latest News'),
        e('ul', null, [
            e('li', null, 'VES College Ranks #1 in Engineering'),
            e('li', null, 'New Research Center Inaugurated'),
            e('li', null, 'Annual Tech Fest Dates Announced')
        ])
    ]);
}

// Footer Component
function Footer() {
    return e('footer', null, [
        e('p', null, '© 2023 VES College. All rights reserved.'),
        e('div', { className: 'social-links' }, [
            e('a', { href: '#' }, 'Facebook'),
            e('a', { href: '#' }, 'Twitter'),
            e('a', { href: '#' }, 'LinkedIn')
        ])
    ]);
}

// Home Page Component
function Home() {
    const featuresData = [
        { title: "Excellence in Education", description: "Providing quality education since 1962" },
        { title: "State-of-the-art Facilities", description: "Modern labs and learning spaces" },
        { title: "Industry Partnerships", description: "Collaborations with leading companies" }
    ];

    return e('div', null, [
        e(Hero, { title: "Welcome to VES College", subtitle: "Empowering Minds, Shaping Futures" }),
        e(Features, { features: featuresData }),
        e(News)
    ]);
}

// About Page Component
function About() {
    return e('h2', null, 'About VES College');
}

// Academics Page Component
function Academics() {
    return e('h2', null, 'Our Academic Programs');
}

// Admissions Page Component
function Admissions() {
    return e('h2', null, 'Admissions Information');
}

// Contact Page Component
function Contact() {
    return e('h2', null, 'Contact Us');
}

// Main App Component
function App() {
    const [currentPage, setCurrentPage] = React.useState('home');

    let pageContent;
    switch(currentPage) {
        case 'home':
            pageContent = e(Home);
            break;
        case 'about':
            pageContent = e(About);
            break;
        case 'academics':
            pageContent = e(Academics);
            break;
        case 'admissions':
            pageContent = e(Admissions);
            break;
        case 'contact':
            pageContent = e(Contact);
            break;
        default:
            pageContent = e(Home);
    }

    return e('div', null, [
        e(Header, { title: "VES", setCurrentPage: setCurrentPage }),
        pageContent,
        e(Footer)
    ]);
}

ReactDOM.render(e(App), document.getElementById('root'));
