// import { Fragment } from "react";
import React from "react";
import SingleCard from "./SingleCard";

const cards = [
  {
    id: 1,
    title: "AI + RPA is what we do",
    para: " Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
    link: "AI + RPA Automation",
    linkSrc: "https://www.xivtech.io./Arrow-black.svg",
    img: "https://www.xivtech.io./rp2.jpg",
  },
  {
    id: 2,
    title: "Make Bolder Choices",
    para: " Digital focused strategies to realize market-changing ideas",
    link: "Build Better Apps",
    linkSrc: "https://www.xivtech.io./Arrow-black.svg",
    img: "https://www.xivtech.io./p1.png",
  },
  {
    id: 3,
    title: "Innovate with Speed",
    para: "Create higher quality software, deliver on customer expectations and business goals",
    link: "DevOps",
    linkSrc: "https://www.xivtech.io./Arrow-black.svg",
    img: "https://www.xivtech.io./p2.jpg",
  },
  {
    id: 4,
    title: "Embrace Cloud",
    para: "With Cloud-First accelerate innovation and optimize performance",
    link: "Cloud Services",
    linkSrc: "https://www.xivtech.io./Arrow-black.svg",
    img: "https://www.xivtech.io./p3.jpg",
  },
];

function Cards() {
  const cardList = cards.map((card) => {
    return (
      <SingleCard
        key={card.id}
        title={card.title}
        para={card.para}
        link={card.link}
        linkSrc={card.linkSrc}
        img={card.img}
      />
    );
  });
  return <div>{cardList}</div>;
}

export default Cards;
