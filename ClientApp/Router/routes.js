import Home from "../Components/Home.vue"
import Page from "../Components/Page.vue"

export const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    display: "Home"
  },
  {
    name: "Page",
    path: "/Page",
    component: Page,
    display: "Page"
  }


];
