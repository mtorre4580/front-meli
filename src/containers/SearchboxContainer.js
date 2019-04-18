import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import Searchbox from '../components/commons/searchbox/searchbox';
import ActionItems from '../actions/ActionItems';

const mapStateToProps = state => ({...state.items});

const submit = input => dispatch => {
  const { search } = input;
  if (search) {
    dispatch(ActionItems.searchingItems(search));
  }
};

export default compose(
    withRouter,
    connect(mapStateToProps, { submit })
)(Searchbox);