import React from 'react';
import ReactDOM from 'react-dom';


const Info =(props) =>(
  <div>
    <h1>Info</h1>
    <p>Thie info is: {props.info}</p>
  </div>
);


const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private information. Please don't share!</p>
      <WrappedComponent {...props} />
    </div>
  );
};


const Authentication =(props) =>{
  <div>
    <h1>Info</h1>
    <p>This account is logged in {props.info}</p>
  </div>
};

const requireAuthentication = (WrappedComponent) =>{
  return (props) => (
    <div>
      {props.isAuthenticated && <p>Please Sign In!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning();
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(< AuthInfo isAuthenticated={true} info = "We in here"/>,  document.getElementById('app'));
