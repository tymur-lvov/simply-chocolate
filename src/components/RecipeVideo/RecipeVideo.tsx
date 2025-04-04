import { clsx } from 'clsx';
import { useEffect } from 'react';

import {
  keydownHandle,
  releaseScrollLock,
  backdropClickHandle,
  addKeydownEventListener,
  removeKeydownEventListener,
} from '@helpers';

import { recipeVideoModule as css } from '@styles';

import type { IRecipeVideo } from '@types';

export const RecipeVideo: IRecipeVideo = ({ isVideoOpen, setIsVideoOpen }) => {
  useEffect(() => {
    addKeydownEventListener(keydownHandle, setIsVideoOpen);

    return () => {
      removeKeydownEventListener(keydownHandle, setIsVideoOpen);

      releaseScrollLock();
    };
  }, []);

  return (
    <div
      className={clsx({
        [css.video_backdrop]: true,
        [css.video_backdrop__visible]: isVideoOpen,
      })}
      onClick={(event) => backdropClickHandle(event, setIsVideoOpen)}
    >
      <div className={css.video_wrapper}>
        <iframe
          width='922'
          height='519'
          src='https://www.youtube.com/embed/DISjdfkSjc8'
          title='How It&#39;s Made: Chocolate'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
      </div>
    </div>
  );
};
