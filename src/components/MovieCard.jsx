// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <section>
        <img src={ movie.imagePath } alt="foto_filme" />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
      </section>
    );
  }
}
// para treinar as maneiras de usar propType, decidi usar PropType.shape englobando os atributos de cada objeto.
MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
