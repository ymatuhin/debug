const debug = require("debug");

const isDefined = (any) => typeof any !== undefined;

exports.createLogger = (name) => {
  const log = debug(name);
  function logger(message, ...args) {
    const argsClone = JSON.parse(JSON.stringify(args.filter(isDefined)));
    log(`%c${message}`, "font-weight: bold", ...argsClone);
  }
  logger.store = (name, store) => {
    let initial = true;
    return store.subscribe((...args) => {
      const message = initial ? "initial" : "change";
      logger(`${name}:${message}`, ...args);
      initial = false;
    });
  };
  return logger;
};

exports.createDomain = (domain) => (name) => createLogger(`${domain} ${name}`);
