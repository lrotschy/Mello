import { connect } from 'react-redux';
import Board from './Board';
import { fetchBoard } from '../../actions/BoardActions'

// const mapStateToProps = (state, ownProps) => (
//   {}
// );

const mapDispatchToProps = (dispatch) => (
  {
    onGetBoard() {
      dispatch(fetchBoard(1));
    },
  }
);

export default connect(null, mapDispatchToProps)(Board);
