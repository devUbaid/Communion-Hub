import React from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/About.css"
import About1 from "../assets/images/About1.avif";
import About2 from "../assets/images/About2.avif";
import About3 from "../assets/images/About3.avif";
import About4 from "../assets/images/About4.jpg";

function About() {
  useEffect(() => {
    // Add animation classes after component mounts
    const elements = document.querySelectorAll(".animate-on-scroll")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated")
          }
        })
      },
      { threshold: 0.1 },
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero animate-on-scroll">
          <h1 className="about-title">About CommunionHub</h1>
          <p className="about-subtitle">Connecting people of all faiths through events and community support.</p>
          <div className="about-hero-image">
            <img src={About4} alt="Community gathering" />
            <div className="image-overlay"></div>
            <div className="image-caption">
              <p>Building bridges across communities</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission animate-on-scroll">
          <div className="mission-grid">
            <div className="mission-content">
              <h2 className="section-title">Our Mission</h2>
              <p className="section-text">
                At CommunionHub, we believe in the power of community and connection across different faiths and
                interests. Our mission is to create a platform where people can discover meaningful events, connect with
                like-minded individuals, and build bridges between diverse communities.
              </p>
              <p className="section-text">
                We strive to foster understanding, respect, and collaboration among people of all backgrounds, creating
                spaces where everyone feels welcome and valued.
              </p>
            </div>
            <div className="mission-image">
              <img src={About1} alt="Our mission" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values animate-on-scroll">
          <h3 className="section-title">Our Values</h3>
          <div className="values-grid">
            <ul className="values-list">
              <li className="value-item">
                <div className="value-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="value-title">Inclusivity</h4>
                  <p className="value-description">We welcome people of all faiths, backgrounds, and identities.</p>
                </div>
              </li>
              <li className="value-item">
                <div className="value-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="value-title">Diversity</h4>
                  <p className="value-description">
                    We celebrate the rich tapestry of cultures, traditions, and perspectives.
                  </p>
                </div>
              </li>
              <li className="value-item">
                <div className="value-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="value-title">Community</h4>
                  <p className="value-description">We foster meaningful connections and supportive relationships.</p>
                </div>
              </li>
              <li className="value-item">
                <div className="value-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="value-title">Engagement</h4>
                  <p className="value-description">
                    We encourage active participation in events and community initiatives.
                  </p>
                </div>
              </li>
            </ul>
            <div className="values-image">
              <img src={About2} alt="Our values" />
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story animate-on-scroll">
          <div className="story-grid">
            <div className="story-image">
              <img src={About3} alt="Our story" />
            </div>
            <div className="story-content">
              <h2 className="section-title">Our Story</h2>
              <p className="section-text">
                CommunionHub was founded in 2023 by a diverse group of community leaders who recognized the need for a
                platform that could bring people together across different faiths and interests. What started as a small
                initiative to organize interfaith events has grown into a comprehensive platform serving communities
                worldwide.
              </p>
              <p className="section-text">
                Today, CommunionHub hosts thousands of events annually, ranging from religious gatherings to social
                meetups and charity drives. Our community continues to grow, united by a shared vision of a more
                connected and compassionate world.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta animate-on-scroll">
          <h2 className="cta-title">Join Our Community</h2>
          <p className="cta-description">
            Discover events, connect with others, and be part of something meaningful. CommunionHub is more than just a
            platform—it's a community where everyone belongs.
          </p>
          <div className="cta-buttons">
            <Link to="/events" className="cta-button primary">
              Explore Events
              <svg
                className="button-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link to="/events?action=create" className="cta-button secondary">
              Create an Event
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

