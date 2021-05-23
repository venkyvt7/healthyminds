import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';
import Button from '@material-ui/core/Button';

export const MemeGenerated = () => {

  const [copied, setCopied] = useState(false);

  const clipboard = useClipboard();
  const history = useHistory();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get('url');

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };

  return(
    <>
    <div className="main1">
    <div className="imgmeme meme-style">
      { url && <img alt='meme' src={url} /> }
    </div>
    <div className="btn">
      <div className="btn1">
      <Button onClick={() => history.push('/memes')} variant="contained" color="primary">
        Make More Memes
      </Button>
      </div>
      <div className="btn1"> 
      <Button onClick={copyLink} variant="contained" color="primary">
        {copied ? 'Link copied!' : 'Copy link'}
      </Button>
      </div>
    </div>
    </div>
    </>
  );
};