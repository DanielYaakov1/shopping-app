import styled from 'styled-components';
import imageHeader from '../../../assets/images/logoHeader.jpg';

export const HeaderStyle = styled.header`
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0.5rem;
     background: #333;
     color: #fff;
     background-image: url(${imageHeader});
     background-size: cover;
     background-repeat: no-repeat;
     .header__logo {
          img {
               height: 50px;
               border-radius: 20%;
          }
     }
     .header__nav {
          ul {
               list-style: none;
               display: flex;
               margin: 0;
               padding: 0;
          }

          li {
               margin-left: 1.5rem;
               font-size: 1.25rem;
          }

          a {
               text-decoration: none;
               color: #88dfdf;
          }

          a:hover,
          a:active,
          a.active {
               color: #e6fcfc;
          }
          .activeLink {
               box-shadow: bisque 0 0 1rem;
               border-radius: 0.5rem;
               color: #fff;
          }
     }
`;
