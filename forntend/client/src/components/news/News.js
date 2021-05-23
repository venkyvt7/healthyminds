import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import data1 from './news.json';
function News() {

  console.log(data1.articles)
    const [data,setData]=useState(data1.articles);
  useEffect(()=>{

axios.get("https://newsapi.org/v2/everything?qInTitle=%22depression%22&qInTitle=stress&language=en&apiKey=ffc79f243b8d42c484ae4d6d35547942")
.then(res=>console.log(res.data.articles))
.catch( );

    

  },[]);


  const useStyles = makeStyles({
    root: {
      maxWidth: 590,
    },
  });
  const classes = useStyles();

  console.log(process.env)
    return (
        <div>
          
            
        
          <Grid style={{backgroundColor:"white" , position:"absolute", marginTop:"0px"}} > 
    
       <h1 style={{textTransform:"uppercase",color:"#8A2BE2"}}>  Latest Postive News Related to Depression,Stress,Anxiety</h1>

    {data==undefined?(null):
    
    <> 
     {data.map((index)=>{
return <span style={{display:"inline-flex",padding:"4%"}}>


<Card className={classes.root} style={{backgroundColor:"#8A2BE2"}} >

    <img src={index.urlToImage} style={{height:"20vh",marginTop:"2vh"}}/>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color:"white"}}>
           {index.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"white"}}>
            {index.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions   >
     
     <div style={{display:"flex",marginLeft:"43%"}}>    
          <a href={index.url} target="_blank"  style={{textDecoration:"none",color:"white"}} > 
          
          Read Full Article </a>
       
        </div>
      </CardActions>
    </Card>
    </span>
   })}
    
    
    </>
    }
    
   

</Grid>

        </div>
        
        
        )}

export default News;
