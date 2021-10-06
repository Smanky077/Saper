import * as MinesActionCreators from './minesCounterActions';
import * as BoxesActionCreators from './boxesActions';

export default{
    ...MinesActionCreators,
    ...BoxesActionCreators
}
