// Import specific named exports from './actions'
import * as actions from "./actions";

// Export all named exports from './actions' within an object named 'actions'
export { default as StoreProvider } from "./Provider";
export { default as StoreContext } from "./Context";
export * from "./hooks";
export { actions }; // Exporting the object containing all actions
