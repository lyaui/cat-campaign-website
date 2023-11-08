import { type MouseEvent } from 'react';

export function numberWithCommas(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function handleSectionScroll(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, '');
  if (targetId === window.location.href) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
}
