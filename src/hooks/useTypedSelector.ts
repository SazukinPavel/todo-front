import { RootType } from './../store/index';
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelector:TypedUseSelectorHook<RootType>=useSelector