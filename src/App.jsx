import { useState } from "react";
import { Lock, FileText, Download, LogOut, Shield, BookOpen, Users, Award } from "lucide-react";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "pinkpusea2000"; // change this

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuth(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleDownloadAll = () => {
    labs.forEach((lab) => {
      const link = document.createElement("a");
      link.href = lab.file;
      link.download = lab.file.split("/").pop();
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const labs = [
    { name: "Lab 1: Familiarization", file: "/Assets/Lab1-Familirization.pdf", description: "Introduction to laboratory equipment and safety protocols" },
    { name: "Lab 2: Basic Logic Gates", file: "/Assets/Lab2-Basic Logic gates.pdf", description: "Implementation and testing of fundamental logic gates" },
    { name: "Lab 3: Universal Gates", file: "/Assets/Lab3-NAND,NOR,XOR,XNOR.pdf", description: "NAND, NOR, XOR, and XNOR gate implementations" },
    { name: "Lab 4: Boolean Laws", file: "/Assets/Lab4-laws.pdf", description: "Verification of Boolean algebra theorems" },
    { name: "Lab 5: Adders", file: "/Assets/Lab5-Adders.pdf", description: "Half adder and full adder circuit design" },
    { name: "Lab 6: Subtractors", file: "/Assets/Lab6-Subtractors.pdf", description: "Half subtractor and full subtractor implementations" },
    { name: "Lab 7: Code Converters", file: "/Assets/Lab7-code_converter.pdf", description: "BCD to binary and binary to BCD conversion" },
    { name: "Lab 8: Encoders & Decoders", file: "/Assets/Lab8-Encoder and decoder Implementation.pdf", description: "Encoder and decoder circuit design" },
    { name: "Lab 9: Multiplexers", file: "/Assets/Lab9-Multiplexer and De-Multiplexer.pdf", description: "Multiplexer and demultiplexer applications" },
    { name: "Lab 10: 7-Segment Display", file: "/Assets/7-segment decoder.pdf", description: "BCD to 7-segment decoder implementation" },
    { name: "Lab 11: Flip-Flops", file: "/Assets/Lab10-Flipflops.pdf", description: "Sequential circuit design with flip-flops" },
    { name: "Lab 12: Registers & Counters", file: "/Assets/Lab11-Registers and Counters.pdf", description: "Register and counter circuit implementations" },
  ];

  if (!isAuth) {
    return (
      <div className="auth-container">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md">
          {/* Enhanced Header */}
          <div className="auth-header">
            <div className="auth-icon-container">
              <Shield className="auth-icon" />
            </div>
            <h1 className="auth-title">Digital Logic Laboratory</h1>
            <p className="auth-subtitle">Secure access to laboratory reports</p>
          </div>

          {/* Enhanced Login Form */}
          <div className="auth-card">
            <div className="auth-form-section">
              <div className="auth-form-title">
                <Lock className="auth-form-icon" />
                Authentication Required
              </div>

              <form onSubmit={handleLogin} className="auth-form">
                <div className="auth-input-group">
                  <label htmlFor="password" className="auth-label">
                    <Shield className="auth-input-icon" />
                    Access Code
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your secure access code"
                    className="auth-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="auth-button">
                  Access System
                </button>
              </form>

              {error && (
                <div className="auth-error">
                  {error}
                </div>
              )}
            </div>

            {/* Enhanced Footer */}
            <div className="auth-footer">
              <div className="auth-footer-text">
                <p className="auth-footer-brand">Department of Electrical Engineering</p>
                <p>© 2026 Digital Logic Laboratory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg mr-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Digital Logic Laboratory</h1>
                <p className="text-sm text-gray-600">Experiment Reports Portal</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-1" />
                <span>Authorized Access</span>
              </div>
              <button
                onClick={() => setIsAuth(false)}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Welcome Section */}
        <div className="welcome-section">
          <h2 className="welcome-title">Laboratory Reports</h2>
          <p className="welcome-subtitle">Access and download your digital logic experiment documentation</p>
        </div>

        {/* Stats Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stats-card">
              <div className="flex items-center">
                <div className="stats-icon-container mr-4">
                  <FileText className="stats-icon" />
                </div>
                <div>
                  <p className="stats-label">Total Reports</p>
                  <p className="stats-value">{labs.length}</p>
                </div>
              </div>
            </div>

            <div className="stats-card">
              <div className="flex items-center">
                <div className="stats-icon-container mr-4">
                  <Award className="stats-icon" />
                </div>
                <div>
                  <p className="stats-label">Completed Labs</p>
                  <p className="stats-value">{labs.length}</p>
                </div>
              </div>
            </div>

            <div className="stats-card">
              <div className="flex items-center">
                <div className="stats-icon-container mr-4">
                  <Download className="stats-icon" />
                </div>
                <div>
                  <p className="stats-label">Downloads Available</p>
                  <p className="stats-value">{labs.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download All CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="download-all-wrapper">
            <button type="button" onClick={handleDownloadAll} className="download-all-btn">
              <Download className="download-icon" />
              Download All Reports
            </button>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab, index) => (
              <div
                key={index}
                className="lab-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="lab-number">
                    {index + 1}
                  </div>
                  <div className="lab-icon-container">
                    <FileText className="w-5 h-5 text-gray-600" />
                  </div>
                </div>

                <h3 className="lab-title">{lab.name}</h3>
                <p className="lab-description">{lab.description}</p>

                <a
                  href={lab.file}
                  download
                  className="download-btn"
                >
                  <Download className="download-icon" />
                  Download Report
                </a>
                <div className="download-progress"></div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>© 2026 Digital Logic Laboratory | Department of Electrical Engineering</p>
            <p className="mt-1">All rights reserved. For gameplay purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}