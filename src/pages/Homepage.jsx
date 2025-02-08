import React from 'react';
import Home from '../components/Home';
import Header from "../components/Header";
import Skills from "../components/Skill";
import About from '../components/About';
import Education from '../components/Education';
import Intern from '../components/Intern';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

export default function Homepage() {
  return (
    <div>
      <Header />
      <section id="home" ><Home /></section>
      <section id="about" className='pt-5'><About /></section>
      <section id="skills" className='pt-5'><Skills /></section>
      <section id="education" className='pt-5'><Education /></section>
      <section id="intern" className='pt-5'> <Intern /></section>
      <section id="projects" className='pt-5'><Projects /></section>
      <section id="resume" className='pt-5'><Resume /></section>
      <section id="contact" className='pt-5'><Contact /></section>
      <Footer />
    </div>
  );
}
