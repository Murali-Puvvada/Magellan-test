/* eslint-disable max-len */
import React from 'react';

export default function CircleMinus({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" {...rest}>
      <path fill={color} fillRule="evenodd" d="M14 .438C21.49.438 27.563 6.51 27.563 14c0 7.49-6.073 13.563-13.563 13.563S.437 21.49.437 14 6.51.437 14 .437zm0 2.624C7.96 3.063 3.062 7.96 3.062 14c0 6.04 4.897 10.938 10.938 10.938 6.04 0 10.938-4.897 10.938-10.938C24.938 7.96 20.04 3.062 14 3.062zm4.9 9.626c.725 0 1.313.587 1.313 1.312 0 .664-.494 1.214-1.135 1.3l-.178.012H9.1c-.725 0-1.313-.587-1.313-1.312 0-.664.494-1.214 1.135-1.3l.178-.012h9.8z" />
    </svg>
  );
}