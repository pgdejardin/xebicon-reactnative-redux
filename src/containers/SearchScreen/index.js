import React from 'react';
import { ActivityIndicator, ListView, Platform, View } from 'react-native';
import { connect } from 'react-redux';
import NoMovies from '../../components/NoMovies';
import SearchBar from '../SearchBar';
import MovieScreen from '../MovieScreen';
import MovieCell from '../MovieCell';
import styles from './styles';
import { createStructuredSelector } from 'reselect';
import {
  selectMovies, selectLoading, selectError, selectTotalMovies, selectPage, selectLoadingTail, selectTotalPages,
} from './selector';
import { searchMovies } from './actions';

class SearchScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      queryNumber: 0,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    this.searchMovies = this.searchMovies.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
  }

  componentDidMount() {
    this.searchMovies('', 1);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      dataSource: this.getDataSource(newProps.dataSource)
    })
  }

  searchMovies(query, page) {
    this.timeoutID = null;
    this.setState({ filter: query });
    this.props.searchMovies(query, page);
  }

  hasMore() {
    return this.props.total_pages !== this.props.total;
  }

  onEndReached() {
    var query = this.state.filter;
    if (!this.hasMore() || this.props.isLoadingTail) {
      // We're already fetching or have all the elements so noop
      return;
    }

    if (this.props.isLoading) {
      return;
    }

    const page = this.props.page + 1;
    this.props.searchMovies(query, page)
  }

  getDataSource(movies) {
    return this.state.dataSource.cloneWithRows(movies);
  }

  selectMovie(movie) {
    if (Platform.OS === 'ios') {
      this.props.navigator.push({
        title: movie.title,
        component: MovieScreen,
        passProps: { id: movie.id },
      });
    } else {
      dismissKeyboard();
      this.props.navigator.push({
        title: movie.title,
        name: 'movie',
        id: movie.id,
      });
    }
  }

  onSearchChange(event) {
    const filter = event.nativeEvent.text.toLowerCase();
    clearTimeout(this.timeoutID);
    if (filter.length >= 3 || filter.length) {
      this.timeoutID = setTimeout(() => this.searchMovies(filter, 1), 100);
    }
  }

  renderFooter() {
    if (!this.hasMore() || !this.props.isLoadingTail) {
      return <View style={styles.scrollSpinner} />;
    }
    return <ActivityIndicator style={styles.scrollSpinner} />;
  }

  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    var style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
      style = [style, styles.rowSeparatorHide];
    }
    return (
      <View key={'SEP_' + sectionID + '_' + rowID} style={style} />
    );
  }

  renderRow(movie, sectionID, rowID, highlightRowFunc) {
    return (
      <MovieCell
        key={movie.id}
        onSelect={() => this.selectMovie(movie)}
        onHighlight={() => highlightRowFunc(sectionID, rowID)}
        onUnhighlight={() => highlightRowFunc(null, null)}
        movie={movie}
      />
    );
  }

  render() {
    const content = this.state.dataSource.getRowCount() === 0 ?
      <NoMovies
        filter={this.state.filter}
        isLoading={this.props.isLoading}
        styles={styles}
      /> :
      <ListView
        ref="listview"
        renderSeparator={this.renderSeparator}
        dataSource={this.state.dataSource}
        renderFooter={this.renderFooter}
        renderRow={this.renderRow}
        onEndReached={this.onEndReached}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
      />;

    return (
      <View style={styles.container}>
        <SearchBar
          onSearchChange={this.onSearchChange}
          isLoading={this.props.isLoading}
          onFocus={() =>
          this.refs.listview && this.refs.listview.getScrollResponder().scrollTo({ x: 0, y: 0 })}
        />
        <View style={styles.separator} />
        {content}
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dataSource: selectMovies(),
  total: selectTotalMovies(),
  page: selectPage(),
  total_pages: selectTotalPages(),
  isLoading: selectLoading(),
  isLoadingTail: selectLoadingTail(),
  error: selectError()
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  searchMovies(query, page) {
    return dispatch(searchMovies(query, page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
