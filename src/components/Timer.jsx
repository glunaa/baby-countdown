
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import '../App.css';
function Timer() {
  const targetDate = new Date('March 14, 2025 00:00:00').getTime(); // Target date: March 14, 2025
  const [timeRemaining, setTimeRemaining] = useState(targetDate - new Date().getTime());
  
  // New state for rotating header texts
  const headerMessages = [
    "Awaiting Baby Luna",
    "Counting Down to Luna's Arrival",
    "Luna's Coming Soon",
    "Anticipating Baby Luna"
  ];
  const [currentHeader, setCurrentHeader] = useState(0);

  useEffect(() => {
    // Interval for countdown
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeRemaining(0); // Countdown ends at 0
      } else {
        setTimeRemaining(difference);
      }
    }, 1000);

    // Interval for rotating header texts every 5 seconds
    const headerIntervalId = setInterval(() => {
      setCurrentHeader((prevHeader) => (prevHeader + 1) % headerMessages.length);
    }, 5000); // Change message every 5 seconds

    return () => {
      clearInterval(intervalId); 
      clearInterval(headerIntervalId);
    }; // Clean up intervals on component unmount
  }, [targetDate, headerMessages.length]);

  const formatTime = (time) => {
    if(time === 0){
      return "Little blessing baby is here!!";
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <Card className="timer-card text-center">
      <Card.Header className="timer-header d-flex align-items-center justify-content-center">
        <i className="bi bi-baby-fill me-2" style={{ fontSize: '1.5rem', color: '#FF69B4' }}></i> {/* Baby Icon */}
        <h2 className="mb-0">{headerMessages[currentHeader]}</h2> {/* Rotating Header Text */}
      </Card.Header>
      <Card.Body>
        <Card.Text className="display-4 timer-display">{formatTime(timeRemaining)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Timer;
