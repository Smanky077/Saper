import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import  ActionCreators from '../Store/ActionCreators/index';

export const useActions = () =>{
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators,dispatch);
}