import React from "react";
import { Redirect } from "react-router";
import {  useDispatch } from "react-redux";
import * as tokenConfig from '../utils/tokenConfig'
import * as authActions from '../redux/actions/authActions';

export default function LecturerRoute({ component }) {
//   const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth.isAuth);
  const Component = component;

  const dispatch = useDispatch();
  // const auth = useSelector(state => state.auth);
  // console.log(auth)

  React.useEffect(() => {
    if (tokenConfig.getToken() && tokenConfig.getUserdata()) {
      dispatch(authActions.loadAuthUser());
    } else {
      dispatch(authActions.logout());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return true ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/" }} />
  );
}
