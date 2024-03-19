import React, { useState } from 'react';
import axios from 'axios';
import { UrlResponseDetails } from '../UrlResponseDetails/UrlResponseDetails';
import './UrlChecker.css'; // Import the CSS file

const UrlChecker = () => {
    const [url, setUrl] = useState('');
    const [response, setResponse] = useState(null);

    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.post('http://127.0.0.1:8000/url_classifier', {
                target_url: url
            });
            console.log(result);
            setResponse(result.data); 
        } catch (error) {
            console.error('Error posting URL:', error);
            setResponse({ status: 'error', error: error.message });
        }
    };

    return (
        <div className="url-checker-container">
            <div className="url-checker-description">
                <p>Enter a URL in the field below to check its classification and get details about its safety, content, and more.</p>
            </div>
            <form onSubmit={handleSubmit} className="url-checker-form">
                <input 
                    type="text" 
                    value={url} 
                    onChange={handleChange} 
                    placeholder="Enter URL here" 
                    className="url-checker-input"
                />
                <input 
                    type="submit" 
                    value="Submit"
                    className="url-checker-submit"
                />
            </form>

            {response && (
                <div className="url-checker-response">
                    <UrlResponseDetails response={response} />
                </div>
            )}
        </div>
    );
};

export {
    UrlChecker
};
