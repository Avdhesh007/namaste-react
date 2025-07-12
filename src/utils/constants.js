export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?industry=COMPANY+NAME";
export const SWIGGY_API =
  "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api";
export const SWIGGY_API_RESTAURANT =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=426776&catalog_qa=undefined&submitAction=ENTER";
export const LOCAL_PROXY = "http://localhost:5000/api/proxy";
export const SWIGGY_API_HOMEPAGE =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const SWIGGY_API_SELECTED_RESTAURANT = (restaurantID) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${restaurantID}&catalog_qa=undefined&submitAction=ENTER`;
