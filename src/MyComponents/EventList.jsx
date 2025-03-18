import React, { useEffect, useState } from "react";

const scriptURL =
  "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLji7MZqPPDccSlAf-wHUi715KNElwRYtPg-AsmV6RJUFYZIbR-GEsigQFx3sBBLZ5ulXSn8x4aGxeXxD8s74Oe9SRXnED6Hb0zIgIa0Ko9DzRYSHNNyvYNV6rBndrvQR3tB2aa8mSaMShUBLYdkRKjHtPPOZIESWI_3wTKx4lepaQ1KzIm7-XSClC2U4Dhai8fxAMoezXu8avKRssFaMHjYxvaVeV8ULOwnA-pVlDc332hnU6HOkmVVxuTdgLnBEwCUDB4w1svKxG8NegmpyX00KTyB-A&lib=MPx2Q0pnrNzlFmBQqkb5iJjQM98uU350M";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(scriptURL)
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <ul className="space-y-4">
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={index} className="p-4 border rounded-lg shadow">
              <p><strong>Name:</strong> {event[2]}</p>
              <p><strong>Date:</strong> {new Date(event[3]).toDateString()}</p>
              <p><strong>Website:</strong> <a href={event[4]} className="text-blue-500" target="_blank" rel="noopener noreferrer">{event[4]}</a></p>
              <p><strong>Description:</strong> {event[5]}</p>
            </li>
          ))
        ) : (
          <p>Loading events...</p>
        )}
      </ul>
    </div>
  );
};

export default EventList;