import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { useLocation } from 'react-router-dom';

const projectData = [
  {
    id: 1,
    title: 'PhysioSync',
    category: 'App Development',
    image: require('../Assets/PhysioSync.png'),
    description: 'PhysioSync is an app that uses machine learning to monitor and ensure accurate exercise performance, enhancing the physiotherapy experience.',
  },
  {
    id: 2,
    title: 'Greatly Social',
    category: 'App Development',
    image: require('../Assets/greatlysocial.jpg'),
    description: 'Greatly Social is an all-in-one social media scheduling application that allows users to create a single post and schedule it across multiple platforms, including Instagram, Facebook, LinkedIn, Twitter, Pinterest, Google, YouTube, and TikTok .',
  },
  {
    id: 3,
    title: 'OBD IQ',
    category: 'App Development',
    image: require('../Assets/obdIQ.png'),
    description: 'OBD IQ — A powerful vehicle diagnostics app developed by us, delivering fast, accurate, and comprehensive OBD-II data to help automotive professionals make informed decisions. With extensive OEM coverage and detailed repair insights, it’s designed to streamline vehicle inspections and protect your business.',
  },
  {
    id: 4,
    title: 'Shop4Me',
    category: 'App Development',
    image: require('../Assets/shop4me.png'),
    description: 'Shop4me is a comprehensive wholesale supply platform designed for businesses such as restaurants, retail stores, clinics, and offices. The app allows users to easily find suppliers, compare prices, and place orders for a wide range of products—from food and beverages to healthcare supplies and office stationery—all delivered within 24 hours. ',
  },
  {
    id: 5,
    title: 'Foodz Delivery App',
    category: 'App Development',
    image: require('../Assets/foodz.webp'),
    description: 'Foodz is a commercial service for free food delivery and takeaway all over Bahrain. This app was created to provide the user with ease of use and efficient system with minimum cost.',
  },
  {
    id: 6,
    title: 'MealMaster CRM',
    category: 'Web Development',
    image: require('../Assets/mealmaster.jpg'),
    description: 'MealMasterCRM is a comprehensive platform for tiffin service providers, streamlining customer management with features like revenue analysis and more.',
  },
  {
    id: 7,
    title: 'Causevest',
    category: 'Web Development',
    image: require('../Assets/causevest.png'),
    description: 'Causevest helps you to make a difference in the lives of those you care about Get rewarded for supporting any type of good cause, large or small, with integrated analytics to trace donations, registration and social fundraising.',
  },
  {
    id: 8,
    title: 'Sports Learning',
    category: 'Web Development',
    image: require('../Assets/sportLearning.png'),
    description: 'We bring together sports biz professionals to a cross-functional community in an effort to share best practices and foster professional development. ',
  },
  {
    id: 9,
    title: 'Livesy',
    category: 'Web Development',
    image: require('../Assets/livesy.png'),
    description: 'Livesy is user-friendly for both the instructor and the student. Our fees are small compared to our competitor’s and you do not have to sign any contract with us.  Even though everything was closed, people were still looking for activities to do or new things to learn and teachers wanted to keep teaching and sharing what they know',
  },
  {
    id: 10,
    title: 'Voiceover Casting Hub',
    category: 'Web Development',
    image: require('../Assets/voiceover.png'),
    description: 'Voice Casting Hub is the creative solution built on the two foundations of necessity and fairness. Before launching, we consulted with the industry’s best and brightest to design a state of the art casting portal that addresses the diverse needs of casting directors, producers, agencies and talent.',
  },
  {
    id: 11,
    title: 'Freshpicks',
    category: 'Web Development',
    image: require('../Assets/freshpicks.png'),
    description: 'FreshPicks helps users discover and review local farmers markets, making it easy to support fresh, locally grown produce. The app empowers farmers to list, manage, and promote their markets with ease, offering a platform to reach nearby communities. With real-time updates, reviews, and interactive maps, FreshPicks bridges the gap between local growers and conscious consumers.',
  },
  {
    id: 12,
    title: 'Filance',
    category: 'Digital Marketing',
    image: require('../Assets/filance.webp'),
    description: 'We supported Filance by driving its digital marketing efforts, boosting user engagement through targeted campaigns, social media strategy, and brand awareness initiatives — helping the app reach and grow its freelance professional audience effectively.',
  },
  {
    id: 13,
    title: 'Vivace on the Drive',
    category: 'Digital Marketing',
    image: require('../Assets/Vivace_Outline_Cropped.png'),
    description: 'Vivace on the Drive is a vibrant Italian restaurant located in the heart of Vancouver’s Commercial Drive. Our team collaborated with Vivace to elevate their online presence through targeted digital marketing strategies. From managing their social media campaigns to optimizing their Google listings and executing location-based promotions, we helped increase their customer engagement, foot traffic, and reservations. The result? A noticeable boost in visibility and a stronger connection with the local dining community.',
  },
];

const categories = ['All', 'App Development', 'Web Development', 'Digital Marketing'];
const queryToCategoryMap = {
  app: 'App Development',
  web: 'Web Development',
  marketing: 'Digital Marketing',
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const queryCategory = queryParams.get('category');

    if (queryCategory && queryToCategoryMap[queryCategory]) {
      setActiveCategory(queryToCategoryMap[queryCategory]);
    }
  }, [location.search]);

  const filteredProjects = activeCategory === 'All'
    ? projectData
    : projectData.filter(project => project.category === activeCategory);

  return (
    <section className="projects-section" id="projects">
      <h1>Our <span>Projects</span></h1>
      <div className="divider" />

      {/* Filter Tabs */}
      <div className="project-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`tab-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="project-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
