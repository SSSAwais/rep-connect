// export const token = JSON.parse(localStorage.getItem("token"));

export const token = () => {
  if (localStorage.getItem("token")) {
    return JSON.parse(localStorage.getItem("token"));
  }
};


