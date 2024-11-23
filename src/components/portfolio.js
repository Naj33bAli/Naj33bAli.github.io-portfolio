import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Phone } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function Portfolio() {
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform using React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Developed a collaborative task management application",
      tags: ["React", "Firebase", "Tailwind"],
      link: "/task-manager"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created an interactive dashboard for data analysis",
      tags: ["D3.js", "React", "REST API"],
      link: "#"
    },
    {
      title: "Web Design",
      description: "Designed a responsive, interactive website, optimized for a seamless user experience",
      tags: ["D3.js", "React", "REST API"],
      link: "https://cambatech.com/"
    }
  ];

  const skills = [
    "JavaScript", "React", "Node.js", "Python",
    "SQL", "Git", "AWS", "Docker"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Najeeb Ali</h1>
          <p className="text-xl text-gray-600 mb-6">Full Stack Developer</p>
          <p className="text-gray-600 max-w-2xl">
            Passionate developer with 4 years of experience building web applications.
            Specialized in Python, Java, React and Node.js development.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/najeebaliii/" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
            <a href="mailto:najeebmohali@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
          <a
            href="tel:+16127351500"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? "(612) 735-1500" : "Contact Me"} <Phone size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
