
function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">Chandana</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20">
        <h2 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Chandana G K</span>
        </h2>
        <p className="text-lg text-gray-300">
          Software Engineer | React Developer
        </p>
      </section>

      {/* About */}
      <section id="about" className="px-10 py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">About Me</h2>
        <p className="text-gray-300">
          I am an Information Science graduate passionate about building
          scalable web applications using React, JavaScript, and Java.
          I enjoy solving real-world problems and continuously learning new technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-10 py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Java", "JavaScript", "React.js", "MySQL", "Tailwind CSS", "Firebase"].map(skill => (
            <div key={skill} className="bg-gray-800 p-3 rounded-lg text-center shadow">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-10 py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Projects</h2>

        <div className="bg-gray-800 p-5 rounded-lg mb-5 shadow">
          <h3 className="text-xl font-semibold">Ekart – E-commerce</h3>
          <p className="text-gray-300 mt-2">
            Built using React and Firebase with authentication and cart system.
          </p>
          <a
            href="https://github.com/gkchandana2003-cpu/Ekart-Ecommerce"
            target="_blank"
            className="text-blue-400 mt-2 inline-block"
          >
            View Project →
          </a>
        </div>

        <div className="bg-gray-800 p-5 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Kidney Stone Detection</h3>
          <p className="text-gray-300 mt-2">
            AI-based system using CNN for medical image analysis.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Contact</h2>
        <p>Email: gkchandana69@gmail.com</p>
        <p>Phone: +91-9353199794</p>
      </section>

    </div>
  );
}

export default App;