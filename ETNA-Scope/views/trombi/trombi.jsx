var React = require('react');

function Trombi(props) {
    return ( <div>
        {props.data.map(((item) => (
        <div key={item.id} className="post">
          <h3>{item.lastName} - {item.id}</h3>
          <p>{item.surName}</p>
          <a href={"/"+item.id}>test </a>
          <a href={"/dl/"+item.id}>delete</a>
        </div>
      )))}
    </div>)
        

}

module.exports = Trombi;




