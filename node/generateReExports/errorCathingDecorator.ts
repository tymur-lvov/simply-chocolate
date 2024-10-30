type AsyncFunction<T extends any[], R> = (...args: T) => Promise<R>;

type DecoratedFunction<T extends any[], R> = (...args: T) => Promise<R>;

const errorCatchingDecorator = <T extends any[], R>(
  callback: AsyncFunction<T, R>
): DecoratedFunction<T, R> => {
  return async (...args: T): Promise<R> => {
    try {
      return await callback(...args);
    } catch (error) {
      throw error;
    }
  };
};

export default errorCatchingDecorator;
