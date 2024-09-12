const Button = (props) => {
    const { direction, eventHandler, stylee, isOn } = props;
  
    return (
      <>
        {isOn ? (
          <button onClick={eventHandler} className={stylee}>
            <i className={direction}></i>
          </button>
        ):
        <button className="text-center bg-slate-100 w-[45px] h-[45px] rounded-lg m-2"></button>
        
        }
      </>
    );
  };
  
  export default Button;
  