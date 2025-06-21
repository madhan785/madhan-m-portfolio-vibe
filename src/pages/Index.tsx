
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, Code, Database, Brain, GraduationCap, Award, User, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // This would typically link to an actual resume file
    alert('Resume download functionality would be implemented here!');
  };

  const skills = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'SQL', level: 85, category: 'Database' },
    { name: 'Power BI', level: 80, category: 'Visualization' },
    { name: 'Machine Learning', level: 75, category: 'AI/ML' },
    { name: 'Tableau', level: 70, category: 'Visualization' },
    { name: 'R', level: 65, category: 'Programming' },
    { name: 'Excel', level: 95, category: 'Tools' },
    { name: 'Statistics', level: 80, category: 'Analytics' }
  ];

  const projects = [
    {
      title: 'Customer Churn Prediction',
      description: 'ML model to predict customer churn using Python and scikit-learn',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      category: 'Machine Learning'
    },
    {
      title: 'Sales Dashboard',
      description: 'Interactive Power BI dashboard for sales performance analysis',
      tech: ['Power BI', 'SQL', 'DAX', 'Excel'],
      category: 'Data Visualization'
    },
    {
      title: 'Sentiment Analysis Tool',
      description: 'NLP project for analyzing customer sentiment from reviews',
      tech: ['Python', 'NLTK', 'TensorFlow', 'Streamlit'],
      category: 'AI/NLP'
    },
    {
      title: 'Financial Data Analysis',
      description: 'Comprehensive analysis of stock market trends and patterns',
      tech: ['R', 'ggplot2', 'Shiny', 'quantmod'],
      category: 'Data Analysis'
    }
  ];

  const certifications = [
    {
      title: 'Microsoft Data Analyst Essentials',
      issuer: 'Microsoft',
      year: '2024',
      description: 'Comprehensive certification covering Power BI, Excel, and data modeling'
    },
    {
      title: 'Generative AI Fundamentals',
      issuer: 'Infosys',
      year: '2024',
      description: 'Advanced concepts in generative AI and large language models'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Madhan M
            </h1>
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="hover:text-blue-400 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={downloadResume} variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div 
          className="text-center z-10"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Madhan M
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-gray-300 animate-fade-in delay-300">
            Data Analyst & AI Enthusiast
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in delay-500">
            Pre-final year B.Tech AI & Data Science student passionate about transforming data into actionable insights
          </p>
          <div className="flex gap-4 justify-center animate-fade-in delay-700">
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              Get In Touch
            </Button>
            <Button onClick={() => scrollToSection('projects')} variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              View Projects
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <User className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate data analyst and AI enthusiast currently pursuing B.Tech in AI & Data Science at Arunai Engineering College. 
                With a strong foundation in statistical analysis, machine learning, and data visualization, I enjoy uncovering insights 
                from complex datasets and building intelligent solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in data science combines technical expertise with creative problem-solving, always striving to bridge the gap 
                between raw data and meaningful business decisions. I'm particularly interested in machine learning applications and 
                the potential of AI to solve real-world challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-2xl font-semibold">Bachelor of Technology</h3>
                  <p className="text-blue-400">Artificial Intelligence & Data Science</p>
                </div>
              </div>
              <div className="border-l-2 border-blue-400 pl-6">
                <h4 className="text-xl font-medium mb-2">Arunai Engineering College</h4>
                <p className="text-gray-400 mb-4">Pre-final Year Student</p>
                <p className="text-gray-300">
                  Specializing in AI & Data Science with coursework in machine learning, deep learning, 
                  statistical analysis, and big data technologies. Active in research projects and 
                  hands-on implementation of AI solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                      {skill.category}
                    </Badge>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Code className="w-6 h-6 text-blue-400" />
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <Badge variant="outline" className="border-purple-400 text-purple-400 w-fit">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.title} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 text-yellow-400 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-blue-400 font-medium">{cert.issuer}</span>
                        <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                          {cert.year}
                        </Badge>
                      </div>
                      <p className="text-gray-300">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <p className="text-gray-300 text-lg mb-6">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about data and AI!
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <a 
                  href="mailto:madhanmahe2005@gmail.com"
                  className="flex items-center justify-center gap-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Mail className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">Email</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/madhan-m-3522482a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/madhan785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Github className="w-6 h-6 text-gray-300 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">GitHub</span>
                </a>
              </div>
              <div className="text-center mt-8">
                <Button 
                  onClick={downloadResume}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Madhan M. Built with passion for data and AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
