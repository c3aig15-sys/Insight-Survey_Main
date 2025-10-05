import { useState } from 'react';
import {
  BarChart3,
  Brain,
  TrendingUp,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  MessageSquare,
  AlertTriangle,
  Clock,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: FileSpreadsheet,
      title: "Multi-format Import",
      description: "Accepts CSV, XLSX, Google Forms, Typeform for broad compatibility"
    },
    {
      icon: Brain,
      title: "Auto Question Typing",
      description: "Detects Likert, open-ended, multiple choice—no manual setup"
    },
    {
      icon: MessageSquare,
      title: "Sentiment Analysis",
      description: "Detects emotional tone to understand user mood"
    },
    {
      icon: BarChart3,
      title: "Theme Clustering",
      description: "Groups similar feedback into actionable categories"
    },
    {
      icon: TrendingUp,
      title: "Trend Detection",
      description: "Tracks shifts over time for strategic foresight"
    },
    {
      icon: AlertTriangle,
      title: "Anomaly Detection",
      description: "Flags outliers for risk mitigation"
    }
  ];

  const benefits = [
    "Real-time sentiment and theme detection",
    "No manual setup—auto question typing",
    "Enterprise-grade privacy and compliance readiness",
    "Seamless integration with Teams, Slack, and Zoom"
  ];

  const teamMembers = [
    "Faith", "Mahnoor", "Kashif", "Mukesh",
    "Paulinus", "Prasad", "Navin", "Rolando"
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">InsightStream</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">Team</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-700 hover:text-blue-600">Features</a>
              <a href="#benefits" className="block text-gray-700 hover:text-blue-600">Benefits</a>
              <a href="#team" className="block text-gray-700 hover:text-blue-600">Team</a>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Survey Data into
              <span className="text-blue-600"> Actionable Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Automate the extraction of meaningful patterns, sentiments, and anomalies from any type of survey data—structured or unstructured—while ensuring compliance and integration with enterprise workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-blue-600">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$16B+</div>
              <div className="text-gray-600">Global Market</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">&lt;500</div>
              <div className="text-gray-600">Target Company Size</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Real-time</div>
              <div className="text-gray-600">Insights Delivery</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Problem We Solve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Organizations collect vast amounts of survey data but struggle to extract timely, actionable insights due to manual analysis, inconsistent formats, and lack of contextual understanding. This leads to missed opportunities, delayed decisions, and poor stakeholder engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Manual Analysis</h3>
                  <p className="text-gray-600">Time-consuming manual review delays critical decisions</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <FileSpreadsheet className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Inconsistent Formats</h3>
                  <p className="text-gray-600">Multiple data sources create integration nightmares</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Missing Context</h3>
                  <p className="text-gray-600">Lack of contextual understanding leads to poor insights</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                InsightStream automates the entire process with intelligent AI that understands context, detects patterns, and delivers actionable insights in real-time. No manual setup required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to extract insights from survey data</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-blue-300"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Key Benefits & Competitive Advantage
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Built for small businesses across industries, InsightStream empowers HR Managers, Product Researchers, Executives, and Compliance Officers to make data-driven decisions faster.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <Users className="w-10 h-10 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-3">Target Audience</h3>
                <p className="text-blue-100 leading-relaxed">
                  Small businesses with fewer than 500 employees across all industries
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
                <Shield className="w-10 h-10 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-3">Enterprise Ready</h3>
                <p className="text-gray-300 leading-relaxed">
                  Enterprise-grade privacy, compliance readiness, and seamless integration with your existing tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Real-world use cases from our target users</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-4">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">HR Manager</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Employee Engagement Survey</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  Upload Google Forms
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  Auto-detect question types
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  Sentiment analysis reveals low morale
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  Theme clustering shows "lack of recognition"
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  Follow-up workflow triggered via Teams
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-4">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Product Manager</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Beta Feedback Analysis</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  Upload CSV from Typeform
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  Theme clustering: "slow load time," "confusing UI"
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  Trend detection shows worsening issue
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  Dashboard shared via Slack
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  Predictive modeling flags churn risk
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-4">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Officer</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Internal Audit Feedback</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  Import XLSX
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  PII redaction + "data breach\" flagged
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  GDPR non-compliance detected
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  Report exported for legal review
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">→</span>
                  <span className="text-gray-400 italic">Future Feature</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-600 mb-12">
            A diverse group of experts building the future of survey analytics
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-gray-50 px-8 py-4 rounded-full border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-md"
              >
                <p className="text-lg font-semibold text-gray-900">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Survey Data?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the beta program and be among the first to experience InsightStream
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
              <span>Request Beta Access</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all border-2 border-white/20">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <BarChart3 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">InsightStream</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">MVP Launch: November 2024</p>
              <p className="text-sm text-gray-400 mt-1">Transforming survey data into actionable insights</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
