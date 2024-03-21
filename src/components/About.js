//import 'C:/Users/Shubhangi Patil/Desktop/navigation-app/src/components/menu/About.css'; // Importing the CSS file for styling
import React, { useState, useEffect } from 'react';
import 'C:/Users/Shubhangi Patil/Desktop/navigation-app/src/components/menu/About.css';

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const showSlide = (slideIndex) => {
        const slideWidth = document.querySelector('.slide').offsetWidth;
        const slides = document.querySelector('.slides');
        slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlide) => (currentSlide + 1) % 5);
        showSlide(currentSlide + 2);
    };

    return ( <
        div className = "slider-container" >
        <
        div className = "slides" >
        <
        div className = "slide" >
        <
        img src = "https://freedesignfile.com/upload/2017/06/Check-vegetable-farmers-HD-picture.jpg"
        alt = "Image 1" / >
        <
        div className = "content" >
        <
        h2 > About AgritradeHub < /h2> <
        p >
        Welcome to AgritradeHub, your premier destination
        for connecting farmers, producers, buyers, and sellers in the agricultural industry.At AgritradeHub, we 're passionate about revolutionizing the way agricultural products are traded and distributed, empowering
        farmers and businesses to thrive in today 's dynamic market. < /
        p > <
        /div> < /
        div > <
        div className = "slide" >
        <
        img src = "https://wallpaperaccess.com/full/1605902.jpg"
        alt = "Image 2" / >
        <
        div className = "content" >
        <
        h3 > Our Mission < /h3> <
        p >
        Our mission at AgritradeHub is to provide a comprehensive and user - friendly platform that streamlines the agricultural trade process, fostering transparency, efficiency, and fair trade practices.We aim to bridge the gap between producers and consumers,
        facilitating seamless transactions and promoting sustainable agriculture practices. <
        /p> < /
        div > <
        /div> <
        div className = "slide" >
        <
        img src = "https://thumbs.dreamstime.com/z/homegrown-vegetables-buy-vegetables-local-farm-farm-market-harvest-festival-sell-vegetables-man-bearded-farmer-vegetables-185513153.jpg"
        alt = "Image 3" / >
        <
        div className = "content" >
        <
        h3 > Our Vision < /h3> <
        p >
        We envision a future where every farmer has access to global markets, every buyer can source high - quality agricultural products with ease, and every transaction is conducted with integrity and fairness.By leveraging technology and innovation, we strive to create a world where agricultural trade is inclusive, equitable, and environmentally responsible. <
        /p> < /
        div > <
        /div> <
        div className = "slide" >
        <
        img src = "https://thumbs.dreamstime.com/z/man-holding-basket-organic-vegetables-healthy-76739247.jpg"
        alt = "Image 4" / >
        <
        div className = "content" >
        <
        h3 > Our Values < /h3> <
        ul >
        <
        li >
        <
        strong > Transparency: < /strong> We believe in transparency and openness in all our dealings, ensuring trust and confidence among our users. < /
        li > <
        li >
        <
        strong > Collaboration: < /strong> We foster collaboration and partnerships with stakeholders across the agricultural value chain, driving mutual success and growth. < /
        li > <
        li >
        <
        strong > Empowerment: < /strong> We empower farmers and businesses by providing them with the tools, resources, and support they need to thrive in the agricultural marketplace. < /
        li > <
        li >
        <
        strong > Sustainability: < /strong> We are committed to promoting sustainable agricultural practices that preserve natural resources, protect the environment, and support rural communities. < /
        li > <
        /ul> < /
        div > <
        /div> <
        div className = "slide" >
        <
        img src = "https://img.freepik.com/free-photo/senior-man-working-field-with-chest-vegetables_329181-12492.jpg?w=1380&t=st=1687015754~exp=1687016354~hmac=a0a5869fddec9e079f52229928cabbe0e0dc45027d758827ea7ac2e39fba59a4"
        alt = "Image 5" / >
        <
        div className = "content" >
        <
        h3 > Meet the Team < /h3> <
        p >
        AgritradeHub was founded by a team of dedicated professionals with a passion
        for agriculture and a commitment to making a positive impact in the industry.Our team brings together expertise in technology, agriculture, business development, and customer service to deliver an unparalleled trading experience
        for our users. <
        /p> < /
        div > <
        /div> < /
        div > <
        /div>

    );
};

export default About;