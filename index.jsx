const e = React.createElement;

function Header() {
    return e('header', null, [
        e('div', {className: 'logo'}, 'VES'),
        e('nav', null, 
            e('ul', null, [
                e('li', null, e('a', {href: '#'}, 'Home')),
                e('li', null, e('a', {href: '#'}, 'About')),
                e('li', null, e('a', {href: '#'}, 'Academics')),
                e('li', null, e('a', {href: '#'}, 'Admissions')),
                e('li', null, e('a', {href: '#'}, 'Contact'))
            ])
        )
    ]);
}

function Hero() {
    return e('section', {className: 'hero'}, [
        e('h1', null, 'Welcome to VES College'),
        e('p', null, 'Empowering Minds, Shaping Futures')
    ]);
}

function Features() {
    return e('section', {className: 'features'}, [
        e('div', {className: 'feature'}, [
            e('h2', null, 'Excellence in Education'),
            e('p', null, 'Providing quality education since 1962')
        ]),
        e('div', {className: 'feature'}, [
            e('h2', null, 'State-of-the-art Facilities'),
            e('p', null, 'Modern labs and learning spaces')
        ]),
        e('div', {className: 'feature'}, [
            e('h2', null, 'Industry Partnerships'),
            e('p', null, 'Collaborations with leading companies')
        ])
    ]);
}

function News() {
    return e('section', {className: 'news'}, [
        e('h2', null, 'Latest News'),
        e('ul', null, [
            e('li', null, 'VES College Ranks #1 in Engineering'),
            e('li', null, 'New Research Center Inaugurated'),
            e('li', null, 'Annual Tech Fest Dates Announced')
        ])
    ]);
}

function Footer() {
    return e('footer', null, [
        e('p', null, '© 2023 VES College. All rights reserved.'),
        e('div', {className: 'social-links'}, [
            e('a', {href: '#'}, 'Facebook'),
            e('a', {href: '#'}, 'Twitter'),
            e('a', {href: '#'}, 'LinkedIn')
        ])
    ]);
}

function App() {
    return e('div', null, [
        e(Header, null),
        e(Hero, null),
        e(Features, null),
        e(News, null),
        e(Footer, null)
    ]);
}

ReactDOM.render(e(App), document.getElementById('root'));
