const Bdlgo = () => {
  const [y, Nery] = useState(0);
  function utga() {
    let x = Number(prompt())
    let y = Number(prompt())
    Nery(x%y);
    console.log(476%10);
  }

  return (
    <div>
      <div onClick={() => utga()}>Click</div>
      <div>{y}</div>
    </div>
  );
};