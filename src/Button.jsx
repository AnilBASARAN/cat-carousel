const Button = (props) => {
    const { direction, eventHandler, stylee, isOn } = props;
  
    return (
      <>
        {isOn && (
          <button onClick={eventHandler} className={stylee}>
            <i className={direction}></i>
          </button>
        )}
      </>
    );
  };
  
  export default Button;
  