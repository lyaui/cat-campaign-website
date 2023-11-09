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
  const isClient = typeof window === 'object';

  const defaultSize = { width: 0, height: 0 };
  const [windowSize, setWindowSize] = useState<WindowSize>(
    isClient
      ? { width: window.innerWidth, height: window.innerHeight }
      : defaultSize,
  );

  useEffect(() => {
    if (!isClient) return;
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

  return isClient ? windowSize : defaultSize;
};

const useIsDesktop = (): {
  isDesktop: boolean;
  scale: typeof FONT_SCALE.DESKTOP | typeof FONT_SCALE.MOBILE;
} => {
  const isClient = typeof window === 'object';
  const { width } = useWindowSize();
  console.log({ width });

  if (isClient) {
    return {
      isDesktop: width >= 768,
      scale: width >= 768 ? FONT_SCALE.DESKTOP : FONT_SCALE.MOBILE,
    };
  }

  return {
    isDesktop: true,
    scale: FONT_SCALE.DESKTOP,
  };
};

export default useIsDesktop;
