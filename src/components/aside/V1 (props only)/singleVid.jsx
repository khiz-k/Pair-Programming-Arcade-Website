import React from 'react'; 

const singleVid = (props) => {  
  return (
      <div className="list-item" /* onClick={(event)=>{props.clickHandler(event, props.title)}} */>
        <img src={props.pic} className="item-image" alt="List Video" />
        <div className="item-text">
          <h5>{props.title}</h5><h5>{props.creator}</h5>
        </div>
      </div>
  );
}

export default singleVid;