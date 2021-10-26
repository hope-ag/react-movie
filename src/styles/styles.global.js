import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #00bcd4;
    --color-secondary: #fafafa;
    --color-light-grey: #eee;
    --color-grey: #353535;
    --color-dark-grey: #1c1c1c;
    --color-black: #000;
    --color-white: #fff;
    /* Sizes */

    --max-width: 1280px;
    /* Typography */
    --font-sm:1rem;
    --font-md:1.2rem;
    --font-lg:1.5rem;
    --font-xl:2.5rem;}

    *{
        box-sizing: border-box;       
      font-family: 'Zen Kaku Gothic New', sans-serif;
  
    }

    body{
        overflow-x:hidden;
        margin: 0;
        padding: 0;
        h1{
            font-size: var(--font-xl);
            font-weight:bold;
            color: var(--color-white);
        }
        h3{
            font-size: var(--font-md);
            font-weight:bold;
            color: var(--color-white);
        }
        p{
            font-size: var(--font-sm);
            color: var(--color-white);
        }
    }


`;
