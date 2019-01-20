import $ from "jquery";

export function getAllTvShows() {
  return $.ajax({
    url: "https://yourslangapi.herokuapp.com/getTvShowRoutes/",
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
}

export function tvShowByName(name) {
  return $.ajax({
    url: "https://yourslangapi.herokuapp.com/getTvShowByNameRoutes/" + name,
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
}
