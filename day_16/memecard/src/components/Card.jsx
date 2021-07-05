import "../App.css";

let url = "https://i.ytimg.com/vi/svSKWHEdyjo/hqdefault.jpg";

//   .then((data) => {
//     console.log(data.url);
//     url = data.url;
//   });

const Card = () => {
//   fetch("https://namo-memes.herokuapp.com/memes/latest/1").then((res) => {
//     console.log(res.json());
//     return res.json();
//   });
  const Image = () => {
    // child component
    return <img src={url} alt="" />;
  };
  return (
    <div className="card">
      <Image />
      <h2 className="title">Meme Card</h2>
    </div>
  );
};

export default Card;
