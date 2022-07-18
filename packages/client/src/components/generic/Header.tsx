import icon from '../../assets/images/sonae-west-shopping-ag.svg';
import MainNavigation from './MainNavigation';
import { HeaderStyle } from '../../assets/style/generic/Header';

const Header = () => {
     return (
          <HeaderStyle className='header'>
               <div className='header__logo'>
                    <img src={icon} alt='logo' />
               </div>
               <div className='header__nav'>
                    <ul>
                         <li>
                              <MainNavigation activeClassName={'activeLink'} to={'/'} label={'Home'}></MainNavigation>
                         </li>
                         <li>
                              <MainNavigation to={'/about'} label={'About'}></MainNavigation>
                         </li>
                         <li>
                              <MainNavigation to={'/contact'} label={'Contact'}></MainNavigation>
                         </li>
                    </ul>
               </div>
          </HeaderStyle>
     );
};
export default Header;
