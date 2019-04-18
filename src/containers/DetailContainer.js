import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import ActionItems from '../actions/ActionItems';
import Detail from '../components/detail/detail';

const mapStateToProps = state => ({...state.detail});

const fetchDetail = id => dispatch => dispatch(ActionItems.fecthingDetail(id));

export default compose(
    withRouter,
    connect(mapStateToProps, { fetchDetail }),
    lifecycle({
      componentDidMount () {
        const id = this.props.match.params.id;
        this.props.fetchDetail(id);
      }
    })
)(Detail);