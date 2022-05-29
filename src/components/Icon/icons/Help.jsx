/* eslint-disable max-len */
import React from 'react';

export default function Help({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...rest}>
      <path fill={color} fillRule="evenodd" d="M7 .3333C3.32.3333.3333 3.32.3333 7c0 3.68 2.9867 6.6667 6.6667 6.6667 3.68 0 6.6667-2.9867 6.6667-6.6667C13.6667 3.32 10.68.3333 7 .3333zm0 12C4.06 12.3333 1.6667 9.94 1.6667 7 1.6667 4.06 4.06 1.6667 7 1.6667c2.94 0 5.3333 2.3933 5.3333 5.3333 0 2.94-2.3933 5.3333-5.3333 5.3333zm-.6667-2.6666h1.3334V11H6.3333V9.6667zm1.0734-6.64c-1.3734-.2-2.5867.6466-2.9534 1.86-.12.3866.1734.78.58.78h.1334c.2733 0 .4933-.1934.5866-.4467.2134-.5933.8467-1 1.5334-.8533.6333.1333 1.1.7533 1.0466 1.4-.0666.8933-1.08 1.0866-1.6333 1.92 0 .0066-.0067.0066-.0067.0133-.0066.0133-.0133.02-.02.0333-.06.1-.12.2134-.1666.3334-.0067.02-.02.0333-.0267.0533-.0067.0133-.0067.0267-.0133.0467-.08.2266-.1334.5-.1334.8333h1.3334c0-.28.0733-.5133.1866-.7133.0134-.02.02-.04.0334-.06.0533-.0934.12-.18.1866-.26.0067-.0067.0134-.02.02-.0267.0667-.08.14-.1533.22-.2267.64-.6066 1.5067-1.1 1.3267-2.3733-.16-1.16-1.0733-2.14-2.2333-2.3133z" />
    </svg>
  );
}