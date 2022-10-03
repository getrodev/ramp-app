import React, { useState, useEffect } from 'react';

export default function Datee() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
      setInterval(() => setDate(new Date()), 1000);
    }, []);

    return (
        <div className="App">
            <p>
             {date.toLocaleString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            })}
            </p>
        </div>
    );
}