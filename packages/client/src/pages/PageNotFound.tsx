import { memo } from 'react';
import { useLocation } from 'react-router-dom';

const PageNotFound = memo(() => {
  //add image + background + animation  to page not found
  let location = useLocation();

  return (
    <div>
      <h3
        style={{
          textAlign: 'center',
        }}
      >
        No match for <span>{location.pathname}</span>
      </h3>
      <img
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
        }}
        src={require('../assets/images/004.jpg')}
        alt="404"
      />
    </div>
  );
});
export default PageNotFound;
