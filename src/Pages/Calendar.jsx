import './Calendar.css';
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

export default function EventCalendar() {
    const [selectedDate, setSelectedDate] = useState(null);

    const events = [
        { title: "Goldman Sachs - 2025 Engineering Analyst Campus Hiring Program", start: "", deadline: "2025-03-23" },
        { title: "HackOClock - Hackathon", start: "2025-03-15", deadline: "2025-03-20" },
        { title: "IIITD summer internship program", start: "", deadline: "2025-03-31" },
        { title: "ICRASTE Conference", start: "", deadline: "2025-04-10" },
        { title: "NCRAET Conference", start: "", deadline: "2025-04-06" },
        { title: "IgNITionHack", start: "", deadline: "2025-04-09"},
         

    ];

    const eventDates = events.map((event) => new Date(event.deadline));

    const addToGoogleCalendar = (event) => {
        const startDate = event.start ? format(new Date(event.start), "yyyyMMdd") : format(new Date(event.deadline), "yyyyMMdd");
        const endDate = format(new Date(event.deadline), "yyyyMMdd");

        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            event.title
        )}&dates=${startDate}/${endDate}&details=Don't forget this deadline!`;

        window.open(googleCalendarUrl, "_blank");
    };

    return (
        <section
            id="calendar"
            className="w-full min-h-screen flex flex-col items-center justify-center text-white px-4 pt-20"
            style={{ backgroundImage: "url('/src/assests/bgfinal.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
        >
            <h1 className="text-4xl font-bold text-white text-center mb-6 drop-shadow-md" style={{ marginTop: "10px" }}>
                EVENT CALENDAR
            </h1>

            <p className="text-lg mb-4 text-white text-center w-full" style={{ margin: "0 auto", maxWidth: "800px" }}>
                "Never Miss an Opportunity – Stay Updated with Upcoming Events & Deadlines!"
            </p>

            <div className="calendar-wrapper">
                <div className="calendar-container">
                    <Calendar
                        onClickDay={(date) => setSelectedDate(date)}
                        tileContent={({ date }) =>
                            eventDates.some((d) => d.toDateString() === date.toDateString()) ? (
                                <span className="text-yellow-400 font-bold text-lg">📌</span>
                            ) : null
                        }
                        className="calendar-custom"
                    />
                </div>
            </div>

            {selectedDate && (
                <div className="mt-4 p-3 border rounded shadow-md w-full max-w-xl bg-gray-800 text-white text-center">
                    <h2 className="text-lg font-semibold">Deadlines on {format(selectedDate, "PPP")}:</h2>
                    {events
                        .filter((event) => new Date(event.deadline).toDateString() === selectedDate.toDateString())
                        .map((event, index) => (
                            <div key={index} className="mt-2">
                                <p className="font-medium event-title">{event.title}</p>
                                <button
                                    onClick={() => addToGoogleCalendar(event)}
                                    className="mt-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Add to Google Calendar
                                </button>
                            </div>
                        ))}
                </div>
            )}

            <style jsx global>{`
                body {
                    background: url('/src/assets/bgfinal.jpg') no-repeat center center fixed;
                    background-size: cover;
                }
                .calendar-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    min-height: 500px;
                }
                .calendar-container {
                    background: linear-gradient(135deg, black, rgb(79, 105, 109), rgb(250, 67, 97));
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
                    width: 90%;
                    max-width: 950px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .react-calendar {
                    width: 100% !important;
                    min-height: 300px;
                    background: transparent !important;
                    border: none !important;
                    color: rgb(255, 255, 255) !important;
                    font-size: 1.7rem;
                }
                .react-calendar__tile {
                    color: white !important;
                    border-radius: 6px;
                    transition: all 0.3s ease-in-out;
                }
                .react-calendar__tile--now {
                    background: rgb(76, 16, 54) !important;
                    color: white !important;
                    font-weight: bold;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                .react-calendar__tile--active {
                    background: linear-gradient(135deg, #00ffff, #ff00ff) !important;
                    color: black !important;
                    font-weight: bold;
                    box-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
                }
                .react-calendar__tile:hover {
                    background-color: rgba(255, 255, 255, 0.2) !important;
                }
                .event-title {
                    font-size: 1.6rem;
                    font-family: "Calibri";
                    font-weight: bold;
                    color: rgb(92, 220, 205);
                    text-align: center;
                    margin-top: 10px;
                    margin-left: 40px;
                }
            `}</style>
        </section>
    );
}
