import React from 'react';
import './url-res.css'; // Import the CSS file

const UrlResponseDetails = ({ response }) => {
    if (!response || !response.result) return null;

    const {
        domain,
        root_domain,
        ip_address,
        server,
        content_type,
        status_code,
        page_size,
        domain_rank,
        country_code,
        language_code,
        category,
        domain_age,
        risk_score,
        page_title,
        final_url,

        domain_trust,
        adult,
        malware,
        phishing,
        suspicious,
        spamming,
        dns_valid,
        parking,
        redirected,
        short_link_redirect,
        hosted_content,
        risky_tld,
        spf_record,
        dmarc_record,
        technologies,

        unsafe,
    } = response.result;

    return (
        <div className="url-details">
            {response.result && <h2 className="url-details-title">URL Analysis Result</h2>}
            {page_title && <div className="url-detail"><strong>Page Title:</strong> {page_title}</div>}
            {risk_score !== undefined && <div className="url-detail"><strong>Risk Score:</strong> {risk_score}</div>}
            {adult !== undefined && <div className="url-detail" style={{ color: adult ? 'red' : 'green' }}><strong>Adult Content:</strong> {adult ? 'Yes' : 'No'}</div>}
            {malware !== undefined && <div className="url-detail" style={{ color: malware ? 'red' : 'green' }}><strong>Malware:</strong> {malware ? 'Yes' : 'No'}</div>}
            {phishing !== undefined && <div className="url-detail" style={{ color: phishing ? 'red' : 'green' }}><strong>Phishing:</strong> {phishing ? 'Yes' : 'No'}</div>}
            {suspicious !== undefined && <div className="url-detail" style={{ color: suspicious ? 'red' : 'green' }}><strong>Suspicious:</strong> {suspicious ? 'Yes' : 'No'}</div>}
            {spamming !== undefined && <div className="url-detail" style={{ color: spamming ? 'red' : 'green' }}><strong>Spamming:</strong> {spamming ? 'Yes' : 'No'}</div>}
            {dns_valid !== undefined && <div className="url-detail" style={{ color: dns_valid ? 'green' : 'red' }}><strong>DNS Valid:</strong> {dns_valid ? 'Yes' : 'No'}</div>}
            {parking !== undefined && <div className="url-detail" style={{ color: parking ? 'red' : 'green' }}><strong>Parking:</strong> {parking ? 'Yes' : 'No'}</div>}
            {redirected !== undefined && <div className="url-detail" style={{ color: redirected ? 'red' : 'green' }}><strong>Redirected:</strong> {redirected ? 'Yes' : 'No'}</div>}
            {short_link_redirect !== undefined && <div className="url-detail" style={{ color: short_link_redirect ? 'red' : 'green' }}><strong>Short Link Redirect:</strong> {short_link_redirect ? 'Yes' : 'No'}</div>}
            {hosted_content !== undefined && <div className="url-detail" style={{ color: hosted_content ? 'red' : 'green' }}><strong>Hosted Content:</strong> {hosted_content ? 'Yes' : 'No'}</div>}
            {risky_tld !== undefined && <div className="url-detail" style={{ color: risky_tld ? 'red' : 'green' }}><strong>Risky TLD:</strong> {risky_tld ? 'Yes' : 'No'}</div>}
            {spf_record !== undefined && <div className="url-detail" style={{ color: spf_record ? 'green' : 'red' }}><strong>SPF Record:</strong> {spf_record ? 'Yes' : 'No'}</div>}
            {dmarc_record !== undefined && <div className="url-detail" style={{ color: dmarc_record ? 'green' : 'red' }}><strong>DMARC Record:</strong> {dmarc_record ? 'Yes' : 'No'}</div>}
            {unsafe !== undefined && <div className="url-detail" style={{ color: unsafe ? 'red' : 'green' }}><strong>Unsafe:</strong> {unsafe ? 'Yes' : 'No'}</div>}
            {technologies && technologies.length > 0 && <div className="url-detail"><strong>Technologies:</strong> {technologies.join(', ')}</div>}
            {domain && <div className="url-detail"><strong>Domain:</strong> {domain}</div>}
            {root_domain && <div className="url-detail"><strong>Root Domain:</strong> {root_domain}</div>}
            {ip_address && <div className="url-detail"><strong>IP Address:</strong> {ip_address}</div>}
            {server && <div className="url-detail"><strong>Server:</strong> {server}</div>}
            {content_type && <div className="url-detail"><strong>Content Type:</strong> {content_type}</div>}
            {status_code !== undefined && <div className="url-detail"><strong>Status Code:</strong> {status_code}</div>}
            {page_size && <div className="url-detail"><strong>Page Size:</strong> {page_size} bytes</div>}
            {domain_rank !== undefined && <div className="url-detail"><strong>Domain Rank:</strong> {domain_rank}</div>}
            {country_code && <div className="url-detail"><strong>Country Code:</strong> {country_code}</div>}
            {language_code && <div className="url-detail"><strong>Language Code:</strong> {language_code}</div>}
            {category && <div className="url-detail"><strong>Category:</strong> {category}</div>}
            {domain_age && <div className="url-detail"><strong>Domain Age:</strong> {domain_age.human} ({domain_age.iso})</div>}
            {final_url && <div className="url-detail"><strong>Final URL:</strong> <a href={final_url} target="_blank" rel="noopener noreferrer" className="url-link">{final_url}</a></div>}
            {domain_trust !== undefined && <div className="url-detail"><strong>Domain Trust:</strong> {domain_trust}</div>}
            {/* Additional checks for other fields can be added here in a similar manner */}
        </div>
    );
};

export { UrlResponseDetails };
