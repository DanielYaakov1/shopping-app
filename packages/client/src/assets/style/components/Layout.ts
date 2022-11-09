import style from 'styled-components';

export const LayoutStyle = style.main`
position: fixed;
top: 15vh;
left: 5%;
width: 90%;
background-color: white;
padding: 1rem;
border-radius: 14px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
z-index: 30;
animation: slide-down 700ms ease-out forwards;    

`;
