import { EActionAuth } from "../types/types"
import { IAuth } from "./AuthContext";

export interface IAction {
  type: EActionAuth;
  payload?: any
};

export const authReducer = (state: IAuth, action: IAction): IAuth => {
  switch (action.type) {
    case EActionAuth.LOGIN:
      return {
        ...action.payload,
        logged: true
      }

    case EActionAuth.LOGOUT:
      return {
        ...action.payload,
        logged: false
      }

    default:
      return state
  };
};
