// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
// import * as actionCreators from '../actions';
//
//
// // import { addGoal } from '../actions';
//
// class GoalEntryForm extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   submit(dispatch) {
//     let goal = {
//       id: 'hi',
//       l2: 'second level',
//       l3: 'third level'
//     }
//
//     return dispatch(actionCreators.addGoal(goal));
//   }
//   render() {
//     // const { handleSubmit } = this.props
//     const {dispatch} = this.props
//     let goal = {
//       id: 'hi',
//       l2: 'second level',
//       l3: 'third level'
//     }
//     // const handleSubmit = dispatch(actionCreators.addGoal(goal))
//     const handleSubmit = this.submit(dispatch)
//
//     return(
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="l1">L1</label>
//           <Field
//             onChange={(e) => console.log(e.target.value)}
//             name="l1"
//             component="input"
//             type="text" />
//         </div>
//         <div>
//           <label htmlFor="l2">L2</label>
//           <Field
//             onChange={(e) => console.log(e.target.value)}
//             name="l2"
//             component="input"
//             type="text"/>
//         </div>
//         <div>
//           <label htmlFor="l2">L3</label>
//           <Field
//             onChange={(e) => console.log(e.target.value)}
//             name="l3"
//             component="input"
//             type="text"/>
//         </div>
//         <button type="submit">Submit</button>
//
//       </form>
//     )
//   }
// }
//
// const mapStateToProps = state => {
//   return {
//     goals: state.goals
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actionCreators, dispatch)
// }
//
// GoalEntryForm = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(GoalEntryForm);
//
// GoalEntryForm = reduxForm({
//   form: 'goalEntryForm'
// })(GoalEntryForm)
//
// export default GoalEntryForm
