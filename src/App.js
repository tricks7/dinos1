import React, { Component } from 'react';
import './index.css';
import Header from './components/Header'
import JobList from './components/JobList';
import JobForm from './components/JobForm'
import Footer from './components/Footer'

const apiURL = './listings.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
this.addListing = this.addListing.bind(this);

  }

  componentDidMount() {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      this.setState({
        listings: data
      });
    })
  }

addListing(listing) {
  listing.id = this.state.listings.length + 1;
  this.setState({
    listings: [...this.state.listings, listing]
  });
}

  render() {
    return (
    <div>
    <Header />
    <main>
      <JobList listings={this.state.listings} />
      <JobForm addListing={this.addListing} />
    </main>
    <Footer />
  </div>
    );
  }
}

export default App;
