import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import images from "../../data";

const Home = () => {
  const [objects] = useState(images);
  const [pageNumber, setPageNumber] = useState(0);

  const objectNumber = 1;
  const displayPage = objects.slice(pageNumber, pageNumber + objectNumber).map((obj) => {
    return (
      <React.Fragment key={obj.id}>
        <div className={style.SinglePage}>
          <img className={style.image} src={obj.image} alt="avatar" />
          <div className={style.Content}>
            <h1 className={style.Title}>{obj.title}</h1>
            <h4 className={style.Description}>{obj.description}</h4>
          </div>
        </div>
      </React.Fragment>
    );
  });

  const Next = () => {
    setPageNumber(pageNumber === objects.length - 1 ? 0 : pageNumber + objectNumber);
  };
  const Prev = () => {
    setPageNumber(pageNumber === 0 ? objects.length - 1 : pageNumber - objectNumber);
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     setPageNumber((pageNumber) => (pageNumber === objects.length - 1 ? 0 : pageNumber + 1));
  //   }, 2000);
  // }, []);

  return (
    <div className={style.AllContent}>
      <h1>Images: {objects.length}</h1>
      <div>{displayPage}</div>
      <button className={style.Button} onClick={Next}>
        Next
      </button>
      <button className={style.Button} onClick={Prev}>
        Prev
      </button>
    </div>
  );
};

export default Home;
