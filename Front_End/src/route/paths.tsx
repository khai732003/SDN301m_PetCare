const path = (root: string, sublink: string) => {
  return `${root}${sublink}`;
};
const ROOT_DASHBOARD = "/admin";
const ROOT_COMPANY = "/company";
const ROOT_USER = "/users";
const ROOT_MANAGER = "/manager";

const PATH_DASHBOARD = {
  root: ROOT_DASHBOARD,
  customer: path(ROOT_DASHBOARD, "/customer"),
  schedule: path(ROOT_DASHBOARD, "/schedule"),
  revenue: path(ROOT_DASHBOARD, "revenue")
};

const PATH_USER = {
  root: ROOT_USER,
  contact: path(ROOT_DASHBOARD, "/contact"),
  about: path(ROOT_DASHBOARD, "/about"),
};

const PATH_COMPANY = {
  root: ROOT_COMPANY,
  organizations: path(ROOT_COMPANY, "/organizations"),
  partners: path(ROOT_COMPANY, "/partners"),
  stores: path(ROOT_COMPANY, "/stores"),
};

const PATH_MANAGER = {
  root: ROOT_MANAGER,
  employees: path(ROOT_MANAGER, "/employee"),
  schedule: path(ROOT_MANAGER, "/schedule"),
}
const PATHS = {
  PATH_DASHBOARD,
  PATH_USER,
  PATH_COMPANY,
  PATH_MANAGER
};

export default PATHS;
