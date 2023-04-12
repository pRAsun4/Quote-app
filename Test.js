import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import Copy from './Copy';


function Test() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const baseURL = 'https://api.quotable.io/random';
    function getNewQuote() {
        axios.get(`${baseURL}`)
            .then((response) => {
                var data = response.data;
                setAuthor(data.author);
                setQuote(data.content);
            })
    }
    useEffect(() => getNewQuote(), [])

    return (
        <div className="main">
            <div className="header bb">
                <div className="title">
                    <h1>Quote App"</h1>
                </div>
                <div className="title">
                    <button id="about">About</button>
                </div>

            </div>
            <div class="quote_box">
                <div class="quote">
                    <h2>Quote"</h2>  
                </div>
                <div class="main_quote">
                    <h3><span class="red">"</span> {quote} <span class="red">"</span></h3>
                </div>
                <div class="authorText">
                    <h4>By : {author} </h4>
                </div>
                 
            </div>
            <div class="button">
                <button className="btn" onClick={getNewQuote} >Next</button>
                <Copy/>
            </div>
            <div class="footer bt">
                <h5> Quote Web App. All Rights are reserved by Pratham Saxena. </h5>
            </div>
        </div>

    )
}


export default Test 