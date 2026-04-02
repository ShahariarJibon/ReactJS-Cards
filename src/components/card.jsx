
const Card = (props) => {
  return (
    <div className='parent' id={props.id}>
        <div className="img-box">
          <img src={props.link} alt="" />
        </div>
       
        <div className="texts">
            <div className="left">
              <h2>{props.name}</h2> 
              <p><span>Kiwi</span> <span>Ice Creame</span> <span>Milk</span> </p>
            </div>
            <div className="right">
              <h1>{props.price}$</h1>
              <a href="https://www.youtube.com">Order Now</a>
            </div>
        </div>

    </div>
  )
}

export default Card