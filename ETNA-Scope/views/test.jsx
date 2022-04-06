var React = require('react');
var DefaultLayout = require('./layouts/default');

function editon(props) {
  return (
    <DefaultLayout title={props.title}>
        
        {/* <div>Hello {props.name}</div>
        <form method="POST" action="/post/update">
        <input type="hidden" name="id" value={props.data[0].id} />  
        <input name="firstName" value={props.data[0].firstName} required />
        <input name="lastName" value={props.data[0].lastName} required />
        <input name="service" value={props.data[0].service} required />
        <input name="pictureUrl" type="url" value={props.data[0].pictureUrl} required />
        <input name="mail" type="email" value={props.data[0].mail} required />
        <input type="tel" pattern="[+]{1}[0-9]{2}[0-9]{9}" name="phone" value={props.data[0].phone} required />
        <textarea name="hrNote" value={props.data[0].hrNote} required/>
        <button type="submit">button</button>
        </form>   */}
     </DefaultLayout>
  );
}
 
module.exports = editon;