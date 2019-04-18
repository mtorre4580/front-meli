import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import ActionItems from '../actions/ActionItems';
import Results from '../components/results/results';
import queryString from 'query-string';

const mapStateToProps = state => ({...state.items});

const searchItems = query => dispatch => dispatch(ActionItems.searchingItems(query));

export default compose(
    withRouter,
    connect(mapStateToProps, { searchItems }),
    lifecycle({
      componentDidMount () {
        const { search } = queryString.parse(this.props.location.search);
        if (search && search.length) {
          this.props.searchItems(search);
        }
      }
    })
)(Results);