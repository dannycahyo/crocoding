const Component = () => {
  const handleButtonClick = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      <button onClick={(event) => handleButtonClick(event)}></button>
    </div>
  );
};
