import { LogoModule as css } from '@styles';

export const Logo = () => {
  return (
    <div className={css.wrapper}>
      <a href='/' className={css.text}>
        <span className={css.accent}>SIMPLY</span> CHOCOLATE
      </a>
    </div>
  );
};
