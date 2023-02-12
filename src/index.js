import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
    const [yourName, setYourName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [Email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
    <>
        <h1>This is a super important form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="yourName:"
            value={yourName}
            onChange={(event) => setYourName(event.target.value)}></input>
            <input type="text" 
            name="phoneNum"
            value={phoneNum}
            onChange={(event) => setPhoneNum(event.target.value)}></input>
            <input type="email" 
            name="Email"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}></input>
        </form>

        <h2>Your Name is: {yourName}</h2>
        <h2>Your Number is: {phoneNum}</h2>
        <h2>Your Email is: {Email}</h2>
    </>
)}

root.render(<App />)