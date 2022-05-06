
import React from 'react';
import { createRoot } from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './index.css';

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

 root.render( <GifExpertApp /> );

