import React from "react";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Image1 from "../assets/images/Image-1.avif";
import Image2 from "../assets/images/Image2.webp";
import Image3 from "../assets/images/Image3.avif";
import Testimonial1 from "../assets/images/Testimonial1.avif";  
import Testimonial2 from "../assets/images/Testimonial2.avif";
import Testimonial3 from "../assets/images/Testimonial3.avif";
function Home() {
  useEffect(() => {
    // Add animation classes after component mounts
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section class="hero-section">
        <div class="hero-container">
          <div class="hero-content">
            <div class="hero-text animate-on-scroll">
              <div class="hero-badge">
                <svg
                  class="hero-badge-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Unlimited Advantages
              </div>
              <h1 class="hero-title">
                Connecting People Across Faiths & Interests
              </h1>
              <p class="hero-description">
                Connecting people of all faiths through events and community
                support.
              </p>
              <Link to="/events" className="hero-button">
                Explore Events
                <svg
                  className="hero-button-icon"
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
            </div>

            <div class="hero-images animate-on-scroll">
              <div class="hero-image hero-image-1">
                <img
                  src={Image1}
                  alt="Community gathering"
                />
              </div>
              <div class="hero-image hero-image-2">
                <img
                  src={Image2}
                  alt="Community event"
                />
              </div>
              <div class="hero-image hero-image-3">
                <img
                  src={Image3}
                  alt="Community members"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="hero-background"></div>
      </section>

      {/* Features Section */}
      <section className="features-section animate-on-scroll">
        <div className="features-container">
          <div className="features-grid">
            <div className="feature">
              <div className="feature-badge">
                <svg
                  className="feature-badge-icon"
                  width="16"
                  height="16"
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
                Events
              </div>
              <h2 className="feature-title">Find Events That Matter To You</h2>
              <p className="feature-description">
                Browse through a variety of events from religious gatherings to
                social meetups and charity drives. Filter by your interests and
                connect with like-minded individuals.
              </p>
              <Link to="/events" className="feature-button">
                View All Events
              </Link>
            </div>

            <div className="feature">
              <div className="feature-badge">
                <svg
                  className="feature-badge-icon"
                  width="16"
                  height="16"
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
                Community
              </div>
              <h2 className="feature-title">Build Meaningful Connections</h2>
              <p className="feature-description">
                CommunionHub is more than just events - it's about building a
                community where everyone feels welcome. Share your experiences
                and grow together.
              </p>
              <Link
                to="/events"
                className="feature-button feature-button-outline"
              >
                Create an Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section animate-on-scroll">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-titles">Join Our Community Today</h2>
            <p className="cta-descriptions">
              Discover events, connect with others, and be part of something
              meaningful.
            </p>
            <Link to="/events" className="cta-button">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section animate-on-scroll">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">What Our Community Says</h2>
            <p className="testimonials-description">
              Hear from our members about their experiences with CommunionHub.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img
                    src={Testimonial1}
                    alt="Testimonial author"
                  />
                </div>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">Rohan K</h4>
                  <p className="testimonial-role">Community Member</p>
                </div>
              </div>
              <p className="testimonial-text">
                "CommunionHub has transformed how I connect with my faith
                community. I've found events that align with my beliefs and made
                lasting friendships."
              </p>
              <div className="testimonial-rating">
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img
                    src={Testimonial2}
                    alt="Testimonial author"
                  />
                </div>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">Michael Chen</h4>
                  <p className="testimonial-role">Event Organizer</p>
                </div>
              </div>
              <p className="testimonial-text">
                "As an event organizer, I've been able to reach a diverse
                audience and create meaningful interfaith dialogues. The
                platform is intuitive and powerful."
              </p>
              <div className="testimonial-rating">
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img
                    src={Testimonial3}
                    alt="Testimonial author"
                  />
                </div>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">Priya Patel</h4>
                  <p className="testimonial-role">Charity Volunteer</p>
                </div>
              </div>
              <p className="testimonial-text">
                "I've participated in several charity events through
                CommunionHub. It's amazing to see people from different
                backgrounds come together for a common cause."
              </p>
              <div className="testimonial-rating">
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section animate-on-scroll">
        <div className="how-it-works-container">
          <div className="how-it-works-header">
            <h2 className="how-it-works-title">How CommunionHub Works</h2>
            <p className="how-it-works-description">
              Simple steps to connect with your community and participate in
              meaningful events.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step">
              <div className="step-icon-container">
                <svg
                  className="step-icon"
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
              <h3 className="step-title">Create Your Profile</h3>
              <p className="step-description">
                Sign up and create your profile to connect with like-minded
                individuals in your community.
              </p>
            </div>

            <div className="step">
              <div className="step-icon-container">
                <svg
                  className="step-icon"
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
              <h3 className="step-title">Discover Events</h3>
              <p className="step-description">
                Browse through a variety of events from religious gatherings to
                social meetups and charity drives.
              </p>
            </div>

            <div className="step">
              <div className="step-icon-container">
                <svg
                  className="step-icon"
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
              <h3 className="step-title">Join & Contribute</h3>
              <p className="step-description">
                Participate in events, connect with others, and even create your
                own events to share with the community.
              </p>
            </div>
          </div>

          <div className="how-it-works-cta">
            <Link to="/events" className="how-it-works-button">
              Get Started Today
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section animate-on-scroll">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat">
              <h3 className="stat-number">10K+</h3>
              <p className="stat-label">Community Members</p>
            </div>

            <div className="stat">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Monthly Events</p>
            </div>

            <div className="stat">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Faith Communities</p>
            </div>

            <div className="stat">
              <h3 className="stat-number">100K+</h3>
              <p className="stat-label">Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
