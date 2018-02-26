import type {Action} from './actions';

export type Dispatch = (action: Action | Promise<Action>) => Promise<*>;
