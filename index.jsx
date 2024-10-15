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
        e('img', { src: 'college.jpg', alt: 'VES College', className: 'hero-image' }),
        e('div', { className: 'hero-content' }, [
            e('h1', null, title),
            e('p', null, subtitle),
        ]),
        e('p', { className: 'click-counter' }, `Clicks: ${clicks}`)
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
    return e('div', { className: 'page-content' }, [
        e('h2', null, 'About VES College'),
        e('p', null, 'VES College of Science and Humanities, established in 1962, is a premier institution dedicated to providing quality education in various disciplines.'),
        e('p', null, 'Our mission is to empower students with knowledge, skills, and values that enable them to excel in their chosen fields and contribute positively to society.'),
        e('h3', null, 'Our Vision'),
        e('p', null, 'To be a leading institution of higher education, recognized for academic excellence, innovative research, and commitment to social responsibility.')
    ]);
}

// Academics Page Component
function Academics() {
    return e('div', { className: 'page-content' }, [
        e('h2', null, 'Our Academic Programs'),
        e('p', null, 'VES College offers a wide range of undergraduate and postgraduate programs across various disciplines:'),
        e('ul', null, [
            e('li', null, 'Bachelor of Science (B.Sc.) in Computer Science, Physics, Chemistry, and Mathematics'),
            e('li', null, 'Bachelor of Arts (B.A.) in Economics, Psychology, and Sociology'),
            e('li', null, 'Master of Science (M.Sc.) in Information Technology'),
        ]),
        e('p', null, 'Our programs are designed to provide a strong foundation in theory and practical skills, preparing students for successful careers in their chosen fields.')
    ]);
}

// Admissions Page Component
function Admissions() {
    return e('div', { className: 'page-content' }, [
        e('h2', null, 'Admissions Information'),
        e('p', null, 'We welcome applications from motivated students who are eager to learn and grow. Here\'s what you need to know about our admissions process:'),
        e('h3', null, 'Application Process'),
        e('ol', null, [
            e('li', null, 'Fill out the online application form'),
            e('li', null, 'Submit required documents (transcripts, recommendation letters, etc.)'),
            e('li', null, 'Pay the application fee'),
            e('li', null, 'Attend the entrance exam (if applicable)'),
            e('li', null, 'Participate in an interview (for selected programs)')
        ]),
        e('h3', null, 'Important Dates'),
        e('p', null, 'Applications for the upcoming academic year open on June 1st and close on July 31st.'),
        e('p', null, 'For more detailed information, please contact our admissions office.')
    ]);
}

// Contact Page Component
function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };

    return e('div', { className: 'page-content' }, [
        e('h2', null, 'Contact Us'),
        isSubmitted 
            ? e('p', null, 'Thank you for your message. We\'ll get back to you soon!')
            : e('form', { onSubmit: handleSubmit }, [
                e('div', null, [
                    e('label', { htmlFor: 'name' }, 'Name:'),
                    e('input', {
                        type: 'text',
                        id: 'name',
                        name: 'name',
                        value: formData.name,
                        onChange: handleInputChange,
                        required: true
                    })
                ]),
                e('div', null, [
                    e('label', { htmlFor: 'email' }, 'Email:'),
                    e('input', {
                        type: 'email',
                        id: 'email',
                        name: 'email',
                        value: formData.email,
                        onChange: handleInputChange,
                        required: true
                    })
                ]),
                e('div', null, [
                    e('label', { htmlFor: 'message' }, 'Message:'),
                    e('textarea', {
                        id: 'message',
                        name: 'message',
                        value: formData.message,
                        onChange: handleInputChange,
                        required: true
                    })
                ]),
                e('button', { type: 'submit' }, 'Send Message')
            ]),
        e('h3', null, 'Contact Information'),
        e('p', null, 'Phone: +91 22 2522 3124'),
        e('p', null, 'Email: info@ves.ac.in'),
        e('h3', null, 'Address'),
        e('p', null, 'VES College of Arts, Science and Commerce'),
        e('p', null, 'Sindhi Society, Chembur'),
        e('p', null, 'Mumbai - 400071, Maharashtra, India'),
        e('h3', null, 'Office Hours'),
        e('p', null, 'Monday to Friday: 8:30 AM - 3:30 PM'),
        e('p', null, '(Closed on Sundays and public holidays)')
    ]);
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
