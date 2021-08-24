import axios from 'axios';
import React, { Component, Fragment, useState } from 'react';

export const Landing = () => {
    const [value, setValue] = useState("");   
    const [index, setIndex] = useState("");

    const shortURlPrefix = "http://urlshortener.qpc.hal.davecutting.uk/"

    function getShortUrl(e) {
        try {
            if(e)
            {
                axios.post(`http://urlshortener.qpc.hal.davecutting.uk/` + encodeURIComponent(e)).then(res => {
                    setIndex(res.data.index);
                })
            }else{
                alert("There has been an error converting URL");
            }
           
        } catch (error) {
            alert("There has been an error converting URL");
        }
       
    }

    return (
        <div>
            <Fragment className="body-container">
            <h1>Conor's URL Shrinker</h1>
            <div className="input-container">
                <input 
                type="text" 
                value={value} 
                onChange={event => setValue(event.target.value)}
                className="input-text"
                />
                <button onClick={() => getShortUrl(value)}>Shrink!</button>
                <p>Short Url</p>
                {index != "" && (
                    <div>
                        <div>{shortURlPrefix + index}</div>
                        <a href={shortURlPrefix + index}><button type="button">Open!</button></a>
                    </div>
                )}
                
            </div>
            </Fragment>
        </div>
    );
}

export default Landing;