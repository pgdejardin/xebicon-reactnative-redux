import React from 'react';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';
import Ratings from '../../components/Ratings';
import Cast from '../../components/Cast';
import { getImageSource } from '../../utils';
import styles from './styles';
import { loadMovie, loadCredits } from './actions';
import { selectMovie, selectCredits, selectLoading } from './selector';

class MovieScreen extends React.Component {

  componentWillMount() {
    this.props.loadMovie(this.props.id);
    this.props.loadCredits(this.props.id);
  }

  render() {
    const { movie, credits, loading } = this.props;
    const releaseDate = moment(movie.release_date);
    if (loading) {
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.spinnerContainer}>
            <ActivityIndicator style={styles.scrollSpinner} size="large" />
          </View>
        </ScrollView>
      )
    }
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
          <Image
            source={getImageSource(movie)}
            style={styles.detailsImage}
          />
          <View style={styles.rightPane}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            {movie && <Text style={styles.tagline}>{movie.tagline}</Text>}
            <Text>{releaseDate.year()}</Text>
            <View style={styles.mpaaWrapper}>
              {movie.genres && movie.genres.map((item, key) => (
                <Text key={key} style={styles.mpaaText}>
                  {item.name}
                </Text>
              ))}
            </View>
            {movie && <Ratings ratings={movie} styles={styles} />}
          </View>
        </View>
        <View style={styles.separator} />
        <Text>
          {movie.overview}
        </Text>
        <View style={styles.separator} />
        <Cast actors={credits} styles={styles} />
      </ScrollView>
    );
  }
}

MovieScreen.propTypes = {
  movie: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.bool]).isRequired,
  credits: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.bool]).isRequired,
  loadMovie: React.PropTypes.func,
  loadCredits: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  movie: selectMovie(),
  credits: selectCredits(),
  loading: selectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadMovie(id) {
      return dispatch(loadMovie(id))
    },
    loadCredits(id) {
      return dispatch(loadCredits(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
