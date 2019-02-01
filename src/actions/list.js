export const RECEIVE_DATA = "RECEIVE_DATA";

export const receiveData = list => {
  return {
    type: RECEIVE_DATA,
    list,
  };
};
