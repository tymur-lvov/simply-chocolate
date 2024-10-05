import { Test } from '@components';
import { chocolateWithFruits_2x } from '@images';

const App = () => {
  return (
    <>
      <Test />
      <img src={chocolateWithFruits_2x} alt='' width={300} height={300} />
      <h1>Hello, World!</h1>
    </>
  );
};

export default App;
