const errorCathingDecorator = (callback) => {
  return async (...args) => {
    try {
      return await callback(...args);
    } catch (error) {
      throw error;
    }
  };
};

export default errorCathingDecorator;
