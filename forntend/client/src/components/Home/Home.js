import React from "react";
import homememe  from "./memegirl.jpg";
import news from "./news.jpg";
import chat from "./chat.jpg";
import blog from "./blog.jpg";
import "./Home.css";

export const Home = () => {
  return (
    <div className="bann">
      <ul className="bannerlist">
        <li>
          <a href="/memes">
            <div className="banner1">
              <div className="imgstyle" id="popo" >
              <img src={homememe} alt="" className="imgstyle2" />
              </div>
              <div className="banner2">
                <h4>Meme Page</h4>
                <p>Make your own memes to reduce your stress and share with others</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="/news">
            <div className="banner1">
              <div className="imgstyle">
              <img src={news} alt="" className="imgstyle2"/>
              </div>
              <div className="banner2">
                <h4>News</h4>
                <p>Latest positive news related to depression, stress, anxiety</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="/chat">
            <div className="banner1">
              <div className="imgstyle">
              <img src={chat} alt="" className="imgstyle2"/>
              </div>
              <div className="banner2">
                <h4>Chat Box</h4>
                <p>Chat anonymously and make random friends</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="/blog">
            <div className="banner1">
              <div className="imgstyle">
              <img src={blog} alt="" className="imgstyle2"/>
              </div>
              <div className="banner2">
                <h4>Blogs</h4>
                <p>Write your own blogs anonymously and read others</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};
