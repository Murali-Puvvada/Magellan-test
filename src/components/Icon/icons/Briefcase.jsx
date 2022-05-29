/* eslint-disable max-len */
import React from 'react';

export default function Briefcase({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...rest}>
      <path fill={color} fillRule="evenodd" d="M2.406 13.382c-1.28 0-2.326-.999-2.402-2.26L0 10.977V5.77c0-1.28.999-2.326 2.26-2.402l.146-.004h1.325v-.588C3.732 1.771 4.51.95 5.497.88l.136-.005h2.487c1.004 0 1.826.778 1.896 1.764l.005.136-.001.588h1.326c1.28 0 2.326.999 2.402 2.26l.004.146v5.207c0 1.28-.999 2.326-2.26 2.402l-.146.004H2.406zm1.325-8.707H2.406c-.566 0-1.032.43-1.088.982l-.006.112v5.207c0 .566.43 1.032.982 1.088l.112.006h1.325V4.675zm4.975 0H5.044v7.395h3.662V4.675zm2.639 0h-1.326v7.395h1.326c.566 0 1.032-.43 1.088-.982l.006-.112V5.77c0-.566-.43-1.032-.982-1.088l-.112-.006zM8.119 2.188H5.632c-.295 0-.54.217-.582.5l-.006.087v.588h3.662l.001-.588c0-.295-.217-.54-.5-.581l-.088-.006z" />
    </svg>
  );
}