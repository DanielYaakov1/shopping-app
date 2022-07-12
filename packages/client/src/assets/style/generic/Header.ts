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
               display: flex;
               list-style: none;
               margin: 0;
               padding: 0;
               li {
                    display: inline-flex;
                    margin-right: 1rem;

                    a {
                         color: #fff;
                         text-decoration: none;
                         font-size: 1.2rem;
                         &:hover {
                              color: #ccc;
                         }
                    }
               }
          }
     }
     .activeLink {
          color: #ccc;
          text-decoration: underline;
          box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
          /* animation-name: activeLink;
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
          animation-delay: 0s;
          animation-iteration-count: 4;
          @keyframes activeLink {
               0% {
                    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
               }
               100% {
                    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0);
               }
          } */
     }
`;
