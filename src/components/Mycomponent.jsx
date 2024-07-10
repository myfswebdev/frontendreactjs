import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #grey;
    color: white;
    font-family: Arial, sans-serif;
  }
`;

// Styled components
const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  position: relative;
`;

const Card = styled.div`
  background-color: #grey;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ScrollableList = styled.div`
  max-height: 150px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #grey;
    border-radius: 5px;
  }
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #2a2a2a;
`;

const NFTImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CountdownTimer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const TimerUnit = styled.div`
  text-align: center;
  font-size: 1.2em;
`;

const DottedLine = styled.div`
  position: absolute;
  border-left: 2px dotted #444;
  height: 100px;
  left: ${props => props.left}%;
  top: ${props => props.top}px;
`;

// Reusable components
const CourseCard = ({ title, lessons }) => (
  <Card>
    <h2>{title}</h2>
    <ScrollableList>
      {lessons.map((lesson, index) => (
        <ListItem key={index}>{lesson}</ListItem>
      ))}
    </ScrollableList>
  </Card>
);

const NFTDisplay = ({ imageUrl, name }) => (
  <Card style={{ display: 'flex', alignItems: 'center' }}>
    <NFTImage src={imageUrl} alt={name} />
    <p>{name}</p>
  </Card>
);

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <CountdownTimer>
      {['days', 'hours', 'minutes', 'seconds'].map((interval) => (
        <TimerUnit key={interval}>
          <div>{addLeadingZero(timeLeft[interval])}</div>
          <div>{interval.charAt(0).toUpperCase() + interval.slice(1)}</div>
        </TimerUnit>
      ))}
    </CountdownTimer>
  );
};

// Main component
const Dashboard = () => {
  const cryptoCourse = {
    title: 'Basics of Crypto',
    lessons: ['What is crypto', 'Setting up your own...', 'What the heck is...']
  };

  const aiCourse = {
    title: 'Introduction to AI/GPTs',
    lessons: ['What are AI/GPTs', 'Types of AI/GPTs', 'How to use AI/GPTs']
  };

  // Set the target date to 24 hours from now
  const targetDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  return (
    <>
      <GlobalStyle />
      <DashboardLayout>
        <CourseCard {...cryptoCourse} />
        <NFTDisplay imageUrl="/nft.png" name="Internet Caretaker License NFT" />
        <CourseCard {...aiCourse} />
        <Card style={{ gridColumn: '1 / -1' }}>
          <h3>10,000 PEPE</h3>
          <Timer targetDate={targetDate} />
        </Card>
        <DottedLine left={25} top={200} />
        <DottedLine left={75} top={200} />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;