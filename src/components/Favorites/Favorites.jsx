import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Favorites = ({ myFavorites }) => {
  return (
    <div>
      <h1>My Favorites</h1>
      {myFavorites.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);