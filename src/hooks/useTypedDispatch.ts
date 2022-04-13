import { DispatchType } from './../store/index';
import { useDispatch } from "react-redux";

export const useTypedDispatch=()=>useDispatch<DispatchType>()