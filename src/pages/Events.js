import React from "react"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import "../styles/Events.css"
// import Eid from "../assets/images/Eid-ul-fitr.webp";

function Events() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const filter = searchParams.get("filter")
  const action = searchParams.get("action")




  // Sample initial events
  const initialEvents = [
    {
      id: 1,
      title: "Holi Event",
      date: new Date("2025-03-14T10:00:00"),
      location: "Community Park, 123 Main St",
      description: "Join us for a colorful celebration of the Holi festival with music, dance, and traditional colors.",
      category: "Social",
      image: require("../assets/images/Eid-ul-fitr.webp")
    },
    {
      id: 2,
      title: "Christmas Charity Drive",
      date: new Date("2025-03-15T05:30:00"),
      location: "Downtown Community Center",
      description: "Help collect gifts and essentials for underprivileged children this holiday season.",
      category: "Charity",
    },
    
    {
      id: 3,
      title: "Eid-ul-Fitr",
      date: new Date("2025-03-30T05:30:00"),
      location: "Islamic Center, 789 Elm St",
      description: "Join the community in celebrating Eid with prayers and festive meals.",
      category: "Religious",
  
    },
    
    {
      id: 4,
      title: "Community Picnic",
      date: new Date("2025-03-25T12:00:00"),
      location: "Central Park",
      description: "Bring your family for a day of fun, food, and fellowship with community members.",
      category: "Social",
    },
   
    {
      id: 5,
      title: "Meditation Workshop",
      date: new Date("2025-04-10T17:30:00"),
      location: "Wellness Center, 456 Oak Ave",
      description: "Learn meditation techniques from different spiritual traditions.",
      category: "Religious",
    },
    // Past events
    {
      id: 6,
      title: "Winter Festival",
      date: new Date("2024-12-15T14:00:00"),
      location: "City Square",
      description: "A celebration of winter traditions from around the world.",
      category: "Social",
    },
  ]

  const [events, setEvents] = useState(initialEvents)
  const [filteredEvents, setFilteredEvents] = useState(initialEvents)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [animatedItems, setAnimatedItems] = useState([])

  // Form state
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    category: "Social",
  })

  // Handle URL parameters
  useEffect(() => {
    if (filter === "upcoming") {
      const today = new Date()
      setFilteredEvents(events.filter((event) => event.date >= today))
      setSelectedCategory("Upcoming")
    } else if (filter === "past") {
      const today = new Date()
      setFilteredEvents(events.filter((event) => event.date < today))
      setSelectedCategory("Past")
    }

    if (action === "create") {
      setIsDialogOpen(true)
    }
  }, [filter, action, events])

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(  
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedItems((prev) => [...prev, entry.target.dataset.id])
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".event-card").forEach((el) => observer.observe(el))

    return () => {
      document.querySelectorAll(".event-card").forEach((el) => observer.unobserve(el))
    }
  }, [filteredEvents])

  // Filter events by category
  const filterEvents = (category) => {
    setSelectedCategory(category)

    if (category === "All") {
      setFilteredEvents(events)
    } else if (category === "Today") {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)

      setFilteredEvents(
        events.filter((event) => {
          const eventDate = new Date(event.date)
          eventDate.setHours(0, 0, 0, 0)
          return eventDate.getTime() === today.getTime()
        }),
      )
    } else if (category === "Tomorrow") {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)
      const dayAfterTomorrow = new Date(today)
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)

      setFilteredEvents(
        events.filter((event) => {
          const eventDate = new Date(event.date)
          eventDate.setHours(0, 0, 0, 0)
          return eventDate.getTime() === tomorrow.getTime()
        }),
      )
    } else if (category === "This Week") {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const endOfWeek = new Date(today)
      const day = endOfWeek.getDay()
      const diff = endOfWeek.getDate() - day + (day === 0 ? -6 : 7)
      endOfWeek.setDate(diff)

      setFilteredEvents(
        events.filter((event) => {
          const eventDate = new Date(event.date)
          return eventDate >= today && eventDate <= endOfWeek
        }),
      )
    } else if (category === "Next Week") {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const startOfNextWeek = new Date(today)
      const day = startOfNextWeek.getDay()
      const diff = startOfNextWeek.getDate() - day + (day === 0 ? -6 : 7) + 1
      startOfNextWeek.setDate(diff)
      const endOfNextWeek = new Date(startOfNextWeek)
      endOfNextWeek.setDate(endOfNextWeek.getDate() + 6)

      setFilteredEvents(
        events.filter((event) => {
          const eventDate = new Date(event.date)
          return eventDate >= startOfNextWeek && eventDate <= endOfNextWeek
        }),
      )
    } else if (category === "This Month") {
      const today = new Date()
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
      const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

      setFilteredEvents(
        events.filter((event) => {
          const eventDate = new Date(event.date)
          return eventDate >= startOfMonth && eventDate <= endOfMonth
        }),
      )
    } else if (category === "Upcoming") {
      const today = new Date()
      setFilteredEvents(events.filter((event) => event.date >= today))
    } else if (category === "Past") {
      const today = new Date()
      setFilteredEvents(events.filter((event) => event.date < today))
    } else {
      setFilteredEvents(events.filter((event) => event.category === category))
    }
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewEvent((prev) => ({ ...prev, [name]: value }))
  }

  // Handle category selection
  const handleCategoryChange = (e) => {
    setNewEvent((prev) => ({ ...prev, category: e.target.value }))
  }

  // Add new event
  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.location) {
      return
    }

    const newEventObj = {
      id: events.length + 1,
      title: newEvent.title,
      date: new Date(newEvent.date),
      location: newEvent.location,
      description: newEvent.description,
      category: newEvent.category,
    }

    const updatedEvents = [...events, newEventObj]
    setEvents(updatedEvents)

    // Apply current filter to updated events
    if (selectedCategory === "All") {
      setFilteredEvents(updatedEvents)
    } else {
      setFilteredEvents(updatedEvents.filter((event) => event.category === selectedCategory))
    }

    // Reset form and close dialog
    setNewEvent({
      title: "",
      date: "",
      location: "",
      description: "",
      category: "Social",
    })
    setIsDialogOpen(false)
  }

  // Format date
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  // Format time
  const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  // Format month
  const formatMonth = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
    })
      .format(date)
      .toUpperCase()
  }

  // Format day
  const formatDay = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="events-page">
      <div className="events-container">
        <div className="events-header">
          <h1 className="events-title">Events</h1>
          <p className="events-subtitle">Discover and join events in your community or create your own.</p>
        </div>

        <div className="category-filters">
          <button
            className={`category-button ${selectedCategory === "All" ? "active" : ""}`}
            onClick={() => filterEvents("All")}
          >
            All
          </button>
          <button
            className={`category-button ${selectedCategory === "Religious" ? "active" : ""}`}
            onClick={() => filterEvents("Religious")}
          >
            Religious
          </button>
          <button
            className={`category-button ${selectedCategory === "Social" ? "active" : ""}`}
            onClick={() => filterEvents("Social")}
          >
            Social
          </button>
          <button
            className={`category-button ${selectedCategory === "Charity" ? "active" : ""}`}
            onClick={() => filterEvents("Charity")}
          >
            Charity
          </button>

          <button className="add-event-button" onClick={() => setIsDialogOpen(true)}>
            <svg
              className="add-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Event
          </button>
        </div>

        <div className="events-section">
          <div className="events-header-banner">
            <h2 className="events-banner-title">We Helped Communities Connect & Flourish</h2>
            <div className="events-banner-subtitle">
              <span className="subtitle-icon">✦</span> Upcoming Events
            </div>
          </div>

          <div className="time-filters">
            <button
              className={`time-filter-button ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => filterEvents("All")}
            >
              All
            </button>
            <button
              className={`time-filter-button ${selectedCategory === "Upcoming" ? "active" : ""}`}
              onClick={() => filterEvents("Upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`time-filter-button ${selectedCategory === "Past" ? "active" : ""}`}
              onClick={() => filterEvents("Past")}
            >
              Past
            </button>
            <button
              className={`time-filter-button ${selectedCategory === "Today" ? "active" : ""}`}
              onClick={() => filterEvents("Today")}
            >
              Today
            </button>
            <button
              className={`time-filter-button ${selectedCategory === "This Week" ? "active" : ""}`}
              onClick={() => filterEvents("This Week")}
            >
              This Week
            </button>
            <button
              className={`time-filter-button ${selectedCategory === "This Month" ? "active" : ""}`}
              onClick={() => filterEvents("This Month")}
            >
              This Month
            </button>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="events-grid">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className={`event-card ${animatedItems.includes(event.id.toString()) ? "animated" : ""}`}
                  data-id={event.id}
                >
                  <div className="event-image-container">
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=${event.title}`}
                      alt={event.title}
                      className="event-image"
                    />
                    <div className="event-date-badge">
                      <div className="event-month">{formatMonth(event.date)}</div>
                      <div className="event-day">{formatDay(event.date)}</div>
                    </div>
                  </div>

                  <div className="event-content">
                    <div className="event-category">
                      <span className={`event-category-badge ${event.category.toLowerCase()}`}>
                        {event.category === "Religious" ? "FREE" : event.category === "Charity" ? "DONATION" : "FREE"}
                      </span>
                    </div>

                    <h3 className="event-title">{event.title}</h3>

                    <div className="event-details">
                      <div className="event-detail">
                        <svg
                          className="detail-icon"
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
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="event-detail">
                        <svg
                          className="detail-icon"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>{formatTime(event.date)} IST</span>
                      </div>
                    </div>

                    <div className="event-join">
                      <button className="join-button">
                        <span className="star-icon">★</span> Join others in this event
                      </button>
                    </div>

                    <button className="event-details-button">
                      Event Details
                      <svg
                        className="arrow-icon"
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
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-events">
              <h3 className="no-events-title">No events found</h3>
              <p className="no-events-subtitle">
                There are no {selectedCategory !== "All" ? selectedCategory.toLowerCase() : ""} events available at the
                moment.
              </p>
              <button className="create-event-button" onClick={() => setIsDialogOpen(true)}>
                <svg
                  className="add-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Create an Event
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add Event Dialog */}
      {isDialogOpen && (
        <div className="dialog-overlay" onClick={() => setIsDialogOpen(false)}>
          <div className="dialog" onClick={(e) => e.stopPropagation()}>
            <div className="dialog-header">
              <h2 className="dialog-title">Add New Event</h2>
              <p className="dialog-description">
                Fill in the details to create a new event. All fields except description are required.
              </p>
            </div>
            <div className="dialog-content">
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  Event Title
                </label>
                <input
                  id="title"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  placeholder="Enter event title"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="date" className="form-label">
                  Date and Time
                </label>
                <input
                  id="date"
                  name="date"
                  type="datetime-local"
                  value={newEvent.date}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  value={newEvent.location}
                  onChange={handleInputChange}
                  placeholder="Enter event location"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={newEvent.category}
                  onChange={handleCategoryChange}
                  className="form-select"
                >
                  <option value="Religious">Religious</option>
                  <option value="Social">Social</option>
                  <option value="Charity">Charity</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  value={newEvent.description}
                  onChange={handleInputChange}
                  placeholder="Enter event description"
                  className="form-input"
                />
              </div>
            </div>
            <div className="dialog-footer">
              <button className="dialog-button cancel" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </button>
              <button className="dialog-button submit" onClick={handleAddEvent}>
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Events

