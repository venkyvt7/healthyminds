import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./memes.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const Memes = () => {
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [captions, setCaptions] = useState([]);

  const history = useHistory();

  const updateCaption = (e, index) => {
    const text = e.target.value || "";
    setCaptions(
      captions.map((c, i) => {
        if (index === i) {
          return text;
        } else {
          return c;
        }
      })
    );
  };

  const generateMeme = () => {
    const currentMeme = memes[memeIndex];
    const formData = new FormData();

    formData.append("username", "sudhanshu9028");
    formData.append("password", "sudhanshu@987");
    formData.append("template_id", currentMeme.id);
    captions.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));

    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    }).then((res) => {
      res.json().then((res) => {
        history.push(`/generated?url=${res.data.url}`);
      });
    });
  };

  const shuffleMemes = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) => {
      res.json().then((res) => {
        const _memes = res.data.memes;
        shuffleMemes(_memes);
        setMemes(_memes);
      });
    });
  }, []);

  useEffect(() => {
    if (memes.length) {
      setCaptions(Array(memes[memeIndex].box_count).fill(""));
    }
  }, [memeIndex, memes]);

  return memes.length ? (
    <>

  <h1 style={{textTransform:"uppercase",color:"#8A2BE2"}}> Make your own memes to reduce your stress and share with others</h1>
    <div className="main1">
  
    
      <div className="imgmeme">
        <img alt="meme" src={memes[memeIndex].url} className="meme-style" />
      </div>
      <div className="btn">
      <div className="btn1">
          <Button
            onClick={() => setMemeIndex(memeIndex + 1)}
            className="btn-generate"
            variant="contained" color="primary"
          >
            Skip
          </Button>
        </div>
        <div className="btn1">
          <Button onClick={generateMeme} className="btn-generate" variant="contained" color="primary">
            Generate
          </Button>
        </div>
        {captions.map((c, index) => (
          <div className="btn1">
            <TextField   onChange={(e) => updateCaption(e, index)} key={index} label=" " variant="outlined"/>
          </div>
        ))}
      </div>
      </div>
    </>
  ) : (
    <></>
  );
};
