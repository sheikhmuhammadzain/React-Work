
const CoreConept = (props) => {
  return (

    <li>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  );
};

export default CoreConept;
