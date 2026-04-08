import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  CalendarDays,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./BookMeeting.css";

const BookMeeting = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Breadcrumb />

      <div className="bm-page">
        <div className="bm-container">
          <div className="bm-header">
            <h1>Book a Meeting</h1>
            <p>Schedule a consultation with our team</p>
          </div>

          <div className="bm-form-card">
            <form onSubmit={submit}>
              <div className="bm-grid">

                <div className="bm-field">
                  <label><User size={14}/> Full Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handle}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="bm-field">
                  <label><Mail size={14}/> Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="bm-field">
                  <label><Phone size={14}/> Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="bm-field">
                  <label><CalendarDays size={14}/> Meeting Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handle}
                    required
                  />
                </div>

                <div className="bm-field full">
                  <label><MessageSquare size={14}/> Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handle}
                    placeholder="Describe your requirement..."
                  />
                </div>

              </div>

              <button
                type="submit"
                className={`bm-btn ${sent ? "sent" : ""}`}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} /> Meeting Booked
                  </>
                ) : (
                  <>
                    <Send size={15} /> Book Now
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookMeeting;