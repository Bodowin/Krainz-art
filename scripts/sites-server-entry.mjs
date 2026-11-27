import handler from "./handler.js";

export * from "./handler.js";

const worker = {
  fetch(request) {
    return handler(request);
  },
};

export default worker;
