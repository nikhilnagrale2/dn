const updatePlace = (place) => {
  return {
    type: "Update_Place",
    payload: place,
  };
};

const updatePlaceData = (place) => {
  return (dispatch) => {
    // my key is not working
    // b6723b06b49c460da65120105211208
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=3a81ceec694b4589a6791432212707&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "Update_Place_Data",
          payload: data,
        });
      });
  };
};

const toggleTheme = () => {
  return {
    type: "Toggle_Theme",
  };
};

export { toggleTheme, updatePlace, updatePlaceData };
