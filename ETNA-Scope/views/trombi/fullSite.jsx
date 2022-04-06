var React = require('react');
var Trombi = require('./trombi');
var CreateNewPost = require('./createNewPost');

function Site(props){ 
    return (
                <Trombi data={props.data}/>    
            )
}
module.exports = Site;