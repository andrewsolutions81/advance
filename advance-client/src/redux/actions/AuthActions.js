import * as AuthApi from "../../api/authRequests.js";

export const logIn = (FormData) => async(dispatch) => {
  try {
    dispatch({ type: "AUTH_START" })
    const {data} = await AuthApi.logIn(FormData)
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log("❌ AuthActions logIn error:", error)
    dispatch({ type: "AUTH_FAIL" });
  }
}

export const signUp = (FormData) => async(dispatch) => {
  try {
    dispatch({ type: "AUTH_START" })
    const {data} = await AuthApi.signUp(FormData)
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log("❌ AuthActions signUp error:", error)
    dispatch({ type: "AUTH_FAIL" });
  }
}
