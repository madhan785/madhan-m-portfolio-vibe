import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, Code, Database, Brain, GraduationCap, Award, User, Phone, ChevronDown, Sun, Moon, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const downloadResume = () => {
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
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${theme === 'dark' ? 'bg-white opacity-10' : 'bg-blue-400 opacity-20'} animate-pulse`}
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
      <nav className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-900/80 backdrop-blur-md border-gray-800' 
          : 'bg-white/80 backdrop-blur-md border-gray-200'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className={`text-xl md:text-2xl font-bold ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              Madhan M
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6">
              {['home', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`hover:transition-colors capitalize ${
                    theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} transition-all`}></div>
                <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} transition-all`}></div>
                <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} transition-all`}></div>
              </div>
            </button>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                onClick={toggleTheme}
                variant="outline"
                size="sm"
                className={theme === 'dark' ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button 
                onClick={() => navigate('/register')}
                variant="outline" 
                size="sm"
                className={theme === 'dark' ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-white' : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'}
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Connect
              </Button>
              <Button 
                onClick={downloadResume} 
                variant="outline" 
                size="sm"
                className={theme === 'dark' ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`lg:hidden mt-4 pb-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col space-y-3 mt-4">
                {['home', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left capitalize ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
                  >
                    {item}
                  </button>
                ))}
                <div className="flex space-x-2 pt-2">
                  <Button
                    onClick={toggleTheme}
                    variant="outline"
                    size="sm"
                    className={theme === 'dark' ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'}
                  >
                    {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </Button>
                  <Button 
                    onClick={() => navigate('/register')}
                    variant="outline" 
                    size="sm"
                    className={theme === 'dark' ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-white' : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'}
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
        <div 
          className="text-center z-10 max-w-4xl mx-auto"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-bold mb-6 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
          } bg-clip-text text-transparent animate-fade-in`}>
            Madhan M
          </h1>
          <h2 className={`text-xl md:text-2xl lg:text-3xl mb-4 animate-fade-in delay-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Data Analyst & AI Enthusiast
          </h2>
          <p className={`text-base md:text-lg mb-8 max-w-2xl mx-auto animate-fade-in delay-500 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Pre-final year B.Tech AI & Data Science student passionate about transforming data into actionable insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
            <Button 
              onClick={() => scrollToSection('contact')} 
              className={theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }
            >
              Get In Touch
            </Button>
            <Button 
              onClick={() => scrollToSection('projects')} 
              variant="outline" 
              className={theme === 'dark' ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}
            >
              View Projects
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className={`w-8 h-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            About Me
          </h2>
          <Card className={`${
            theme === 'dark' 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white/80 border-gray-200'
          } backdrop-blur-sm`}>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <User className={`w-8 h-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                    <h3 className="text-xl md:text-2xl font-semibold">Who I Am</h3>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
                    I'm a passionate data analyst and AI enthusiast currently pursuing B.Tech in AI & Data Science at Arunai Engineering College. 
                    With a strong foundation in statistical analysis, machine learning, and data visualization, I enjoy uncovering insights 
                    from complex datasets and building intelligent solutions.
                  </p>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    My journey in data science combines technical expertise with creative problem-solving, always striving to bridge the gap 
                    between raw data and meaningful business decisions. I'm particularly interested in machine learning applications and 
                    the potential of AI to solve real-world challenges.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face" 
                    alt="Data Analyst at work" 
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-12 md:py-20 px-4 ${theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-50/50'}`}>
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Education
          </h2>
          <Card className={`${
            theme === 'dark' 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white/80 border-gray-200'
          } backdrop-blur-sm`}>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" 
                    alt="Student studying AI and Data Science" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <GraduationCap className={`w-8 h-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold">Bachelor of Technology</h3>
                      <p className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>Artificial Intelligence & Data Science</p>
                    </div>
                  </div>
                  <div className={`border-l-2 pl-6 ${theme === 'dark' ? 'border-blue-400' : 'border-blue-600'}`}>
                    <h4 className="text-lg md:text-xl font-medium mb-2">Arunai Engineering College</h4>
                    <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Pre-final Year Student</p>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      Specializing in AI & Data Science with coursework in machine learning, deep learning, 
                      statistical analysis, and big data technologies. Active in research projects and 
                      hands-on implementation of AI solutions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Skills & Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className={`${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70' 
                  : 'bg-white/80 border-gray-200 hover:bg-white/90'
              } backdrop-blur-sm transition-all duration-300`}>
                <CardContent className="p-4 md:p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-sm md:text-base">{skill.name}</span>
                    <Badge variant="secondary" className={`text-xs ${
                      theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {skill.category}
                    </Badge>
                  </div>
                  <div className={`rounded-full h-3 overflow-hidden ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600'
                      }`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                  <span className={`text-sm mt-2 block ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {skill.level}%
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-12 md:py-20 px-4 ${theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-50/50'}`}>
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Projects
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className={`${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70' 
                  : 'bg-white/80 border-gray-200 hover:bg-white/90'
              } backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Code className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                    <CardTitle className="text-lg md:text-xl">{project.title}</CardTitle>
                  </div>
                  <Badge variant="outline" className={`w-fit ${
                    theme === 'dark' ? 'border-purple-400 text-purple-400' : 'border-purple-600 text-purple-600'
                  }`}>
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className={`mb-4 text-sm md:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className={`text-xs ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>
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
      <section id="certifications" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Certifications
          </h2>
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.title} className={`${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70' 
                  : 'bg-white/80 border-gray-200 hover:bg-white/90'
              } backdrop-blur-sm transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <Award className={`w-8 h-8 mt-1 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`} />
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold mb-2">{cert.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                        <span className={`font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                          {cert.issuer}
                        </span>
                        <Badge variant="outline" className={
                          theme === 'dark' ? 'border-yellow-400 text-yellow-400' : 'border-yellow-500 text-yellow-500'
                        }>
                          {cert.year}
                        </Badge>
                      </div>
                      <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-12 md:py-20 px-4 ${theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-50/50'}`}>
        <div className="container mx-auto max-w-4xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Get In Touch
          </h2>
          <Card className={`${
            theme === 'dark' 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white/80 border-gray-200'
          } backdrop-blur-sm`}>
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-8">
                <p className={`text-base md:text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about data and AI!
                </p>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <a 
                  href="mailto:madhanmahe2005@gmail.com"
                  className={`flex items-center justify-center gap-3 p-4 rounded-lg transition-colors group ${
                    theme === 'dark' 
                      ? 'bg-gray-700/50 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Mail className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Email</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/madhan-m-3522482a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 p-4 rounded-lg transition-colors group ${
                    theme === 'dark' 
                      ? 'bg-gray-700/50 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/madhan785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 p-4 rounded-lg transition-colors group ${
                    theme === 'dark' 
                      ? 'bg-gray-700/50 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Github className={`w-6 h-6 group-hover:scale-110 transition-transform ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`} />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>GitHub</span>
                </a>
              </div>
              <div className="text-center mt-8 space-y-4">
                <Button 
                  onClick={() => navigate('/register')}
                  className={`mr-4 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600' 
                      : 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700'
                  }`}
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Connect With Me
                </Button>
                <Button 
                  onClick={downloadResume}
                  className={theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  }
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
      <footer className={`py-8 px-4 border-t ${
        theme === 'dark' 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="container mx-auto text-center">
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 Madhan M. Built with passion for data and AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
