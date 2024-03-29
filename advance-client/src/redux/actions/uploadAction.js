//uploadAction.js
import * as UploadApi from "../../api/UploadRequests.js";

export const uploadImage = (data) => async (dispatch) => {
  try {
    const response = await UploadApi.uploadImage(data);
    return response;
  } catch (error) {
    console.log("uploadImage action error: ", error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await UploadApi.uploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    dispatch({ type: "UPLOAD_FAIL" });
    console.log("uploadPost action error:".error);
  }
};
