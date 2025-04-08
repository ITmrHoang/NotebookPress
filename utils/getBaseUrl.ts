export default () => {
  if (typeof window != "undefined") {
    const host = window.location.host;
    if (host.includes("github")) {
      return "https://itmrhoang.github.io/NotebookPress/";
    }
  }
  return "/";
};
