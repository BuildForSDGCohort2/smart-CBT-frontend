import React from "react";
import { Redirect, useHistory } from "react-router";
import {  useDispatch, useSelector } from "react-redux";
import * as tokenConfig from '../utils/tokenConfig'
import * as authActions from '../redux/actions/authActions';

export default function LecturerRoute({ component }) {
//   const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth.isAuth);
  const Component = component;
  const history = useHistory();
  console.log("admin", history)

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  // console.log(auth)

  React.useEffect(() => {
    if (tokenConfig.getToken() && tokenConfig.getUserdata()) {
      dispatch(authActions.loadAuthUser());
    } else {
      dispatch(authActions.logout());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return auth.isAuth && history.location.pathname === "/lecturer" ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/lecturer" }} />
  );
}
