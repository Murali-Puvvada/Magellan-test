/* eslint-disable max-len */
import React from 'react';

export default function CirclePlus({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" {...rest}>
      <path fill={color} fillRule="evenodd" d="M14 .438C21.49.438 27.563 6.51 27.563 14c0 7.49-6.073 13.563-13.563 13.563S.437 21.49.437 14 6.51.437 14 .437zm0 2.624C7.96 3.063 3.062 7.96 3.062 14c0 6.04 4.897 10.938 10.938 10.938 6.04 0 10.938-4.897 10.938-10.938C24.938 7.96 20.04 3.062 14 3.062zm0 4.726c.664 0 1.214.493 1.3 1.134l.012.178v3.588H18.9c.725 0 1.313.587 1.313 1.312 0 .664-.494 1.214-1.135 1.3l-.178.012h-3.587V18.9c0 .725-.588 1.313-1.313 1.313-.664 0-1.214-.494-1.3-1.135l-.012-.178v-3.587H9.1c-.725 0-1.313-.588-1.313-1.313 0-.664.494-1.214 1.135-1.3l.178-.012h3.588V9.1c0-.725.587-1.313 1.312-1.313z" />
    </svg>
  );
}
