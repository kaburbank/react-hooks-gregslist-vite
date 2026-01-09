import { useState, useEffect } from "react";
import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";

function App() {
  // rest of App

  const deleteListing = deletedListingId => setListings(previousListings => previousListings.filter(listing => listing.id !== deletedListingId))

  // filter listings by the search query
  const displayedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingForm addListing={addListing} />
      { // change the listings passed down to the new filtered listings }
      <ListingsContainer listings={displayedListings} updateListing={updateListing} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
