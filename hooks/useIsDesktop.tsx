import { useEffect, useState } from 'react';
import { FONT_SCALE } from '@/constants/index';

type WindowSize = {
  width: number;
  height: number;
};

const debounce = <F extends (...args: any[]) => void>(
  func: F,
  delay: number,
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 200);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

const useIsDesktop = (): {
  isDesktop: boolean;
  scale: typeof FONT_SCALE.DESKTOP | typeof FONT_SCALE.MOBILE;
} => {
  const { width } = useWindowSize();
  return {
    isDesktop: width >= 768,
    scale: width >= 768 ? FONT_SCALE.DESKTOP : FONT_SCALE.MOBILE,
  };
};

export default useIsDesktop;
