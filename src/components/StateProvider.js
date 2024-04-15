// import React, { createContext, useReducer } from 'react';

// // Define the initial state
// const initialState = {
//   count: 0,
//   // Add other state properties here
// };

// // Create the context
// export const StateContext = createContext();

// // Define the reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'NEXT':
//       return { ...state, currentIndex: action.currentIndex };
//     case 'NAME':
//       return { ...state, name: action.name };
//     case 'ID':
//         return { ...state, id: action.id };
//     case 'STUDENTID':
//         return { ...state, student_id: action.id };
//     case 'SECTION1_FLAG':
//         return { ...state, section1_flag: action.flag };
//     // Add more cases for other actions
//     default:
//       return state;
//   }
// };

// // Create the provider component
// export const StateProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <StateContext.Provider value={{ state, dispatch }}>
//       {children}
//     </StateContext.Provider>
//   );
// };