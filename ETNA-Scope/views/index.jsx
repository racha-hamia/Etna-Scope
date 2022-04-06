var React = require('react');
var DefaultLayout = require('./layouts/default');
var Site = require('./trombi/fullSite')
var Login = require('./login/login')


function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      {/* if login is true display trombi else display login/password field*/}
      { 0 ? <Site data={props.data}/> : <Login/>}


    </DefaultLayout>
  );
}
 
module.exports = HelloMessage;