const createLogger = () => {
  function logger() {}
  logger.store = () => {};
  return logger;
};

const createDomain = () => () => createLogger();

exports.createLogger = createLogger;
exports.createDomain = createDomain;
