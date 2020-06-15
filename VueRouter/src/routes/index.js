import Home from "../components/Home";
import HeaderTop from "../components/HeaderTop";
import HeaderBottom from "../components/HeaderBottom";

const User = (resolve) => {
  require.ensure(
    ["../components/user/User.vue"],
    () => {
      resolve(require("../components/user/User.vue"));
    },
    "User"
  );
};

const UserStart = (resolve) => {
  require.ensure(
    ["../components/user/UserStart.vue"],
    () => {
      resolve(require("../components/user/UserStart.vue"));
    },
    "User"
  );
};

const UserDetail = (resolve) => {
  require.ensure(
    ["../components/user/UserDetail.vue"],
    () => {
      resolve(require("../components/user/UserDetail.vue"));
    },
    "User"
  );
};

const UserEdit = (resolve) => {
  require.ensure(
    ["../components/user/UserEdit.vue"],
    () => {
      resolve(require("../components/user/UserEdit.vue"));
    },
    "User"
  );
};

export const routes = [
  {
    path: "",
    name: "HomePage",
    components: {
      default: Home,
      "header-top": HeaderTop,
    },
  },
  {
    path: "/user",
    name: "UserPage",
    components: {
      default: User,
      "header-bottom": HeaderBottom,
    },
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail },
      { path: ":id/edit", component: UserEdit, name: "UserEdit" },
    ],
  },
  {
    path: "*",
    redirect: "/",
  },
];
