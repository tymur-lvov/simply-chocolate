import { TestA, TestB } from '@components';
import { chocolateWithFruits_1x, chocolateWithFruits_2x } from '@images';
import { helperA, helperB } from '@utils';
import { icons } from '@icons';

const App = () => {
  return (
    <>
      <TestA />
      <TestB />
      {helperA()}
      {helperB()}
      <svg width={24} height={24}>
        <use href={`${icons}#chocolate`} />
      </svg>
      <img src={chocolateWithFruits_1x} alt='' width={300} height={300} />
      <img src={chocolateWithFruits_2x} alt='' width={300} height={300} />
      <h1>Hello, World!</h1>
    </>
  );
};

export default App;
