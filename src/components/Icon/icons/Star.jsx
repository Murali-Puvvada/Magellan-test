/* eslint-disable max-len */
import React from 'react';

export default function Star({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...rest}>
      <path fill={color} fillRule="evenodd" d="M5.27 4.614l-4.647.68-.102.022c-.52.15-.707.823-.3 1.219l3.36 3.274-.792 4.627-.01.097c-.023.545.562.934 1.065.67L8 13.016l4.156 2.185.09.04c.51.19 1.061-.245.965-.806l-.793-4.627 3.361-3.274.07-.077c.333-.428.09-1.082-.472-1.164l-4.648-.68L8.652.405c-.267-.54-1.037-.54-1.304 0L5.27 4.615zM8 2.37L9.595 5.6l.051.088c.114.167.293.28.496.31l3.567.52-2.58 2.515-.068.076c-.124.16-.176.366-.142.568l.608 3.55-3.189-1.676-.093-.041c-.19-.069-.402-.055-.583.04l-3.19 1.677.609-3.55.01-.1c.006-.203-.073-.4-.22-.544L2.29 6.52l3.568-.521c.237-.035.441-.183.547-.398L8 2.37z" />
    </svg>
  );
}
