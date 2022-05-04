// implement Header component here!
import React from 'react';

class Header extends React.Component {
  render() {
    const titulo = <h1>Movie Cards Library</h1>;
    return (
      <header className="movie-card-header page-title">
        {titulo}
      </header>
    );
  }
}

export default Header;
