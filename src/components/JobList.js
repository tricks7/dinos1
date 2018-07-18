import React from 'react';

const JobList = ({ listings }) => {
    //const listings = props.listings;
    //creat one <li> for each listing object
    //listings is an array of objects
    const listItems = listings.map(listing => (<li key={listing.id}>
        <h4>{listing.title}</h4>
        <small>{listing.pay}</small>
        <p>{listing.description}</p>
        <small>{`${listing.interested.length} dinos are interested in this job`}</small>
    </li>));
    listItems.reverse();

    return (
        <section>
            <h2>Job Listings</h2>
            <ul id="job-listings">{listItems}</ul>
        </section>
    )
}

export default JobList