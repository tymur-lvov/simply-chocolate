import { TestA, TestB } from '@components';
import { chocolateWithFruits_1x, chocolateWithFruits_2x } from '@images';
import { helperA, helperB } from '@utils';

const App = () => {
  return (
    <>
      <TestA />
      <TestB />
      {helperA()}
      {helperB()}
      <img src={chocolateWithFruits_1x} alt='' width={300} height={300} />
      <img src={chocolateWithFruits_2x} alt='' width={300} height={300} />
      <h1>Hello, World!</h1>
    </>
  );
};

export default App;
