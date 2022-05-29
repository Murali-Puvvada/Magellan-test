/* eslint-disable max-len */
import React from 'react';

export default function Trash({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...rest}>
      <path fill={color} fillRule="evenodd" d="M8.509 0c1.02 0 1.854.79 1.925 1.792l.004.138v.605h2.507c.366 0 .662.297.662.662 0 .335-.249.612-.572.656l-.09.006h-.606v8.211c0 1.02-.79 1.854-1.791 1.925L10.41 14H4.072c-1.02 0-1.854-.79-1.925-1.792l-.004-.138-.001-8.211h-.605c-.366 0-.662-.296-.662-.662 0-.335.25-.612.572-.656l.09-.006h2.506l.001-.605c0-1.02.79-1.854 1.792-1.925L5.974 0h2.535zm2.506 3.859H3.466v8.211c0 .304.225.556.517.6l.09.006h6.337c.304 0 .556-.224.6-.516l.006-.09-.001-8.211zM5.974 5.704c.335 0 .612.25.656.572l.006.09v3.803c0 .366-.297.662-.662.662-.336 0-.613-.249-.656-.572l-.006-.09V6.366c0-.365.296-.662.662-.662zm2.535 0c.335 0 .612.25.656.572l.006.09v3.803c0 .366-.297.662-.662.662-.335 0-.612-.249-.656-.572l-.006-.09V6.366c0-.365.296-.662.662-.662zm0-4.38H5.974c-.304 0-.556.224-.6.516l-.006.09v.605h3.746V1.93c0-.304-.224-.556-.516-.6l-.09-.006z" />
    </svg>
  );
}