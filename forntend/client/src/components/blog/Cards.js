import React ,{render,useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
function Cards() {
 

    const [blogData, setsblogData] = useState([]);
    const [open, setOpen] = React.useState(false);
    useEffect(()=>{
          
   axios.get("https://mentathonbackend.herokuapp.com/blogs")
      .then(res=>setsblogData(res.data[0]))
      .catch();
       
  
   },[ ])
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

const Liked=async(id)=>{

  console.log(id);

  const sendData1={
    id:id
  }
  axios.post("".sendData1).then().catch();

  let temp=[];
  for(let i=0;i<blogData.length;i++)
  {

    temp.push(blogData[i]);
      if(blogData[i]._id===id)
      {
          
        temp[i].likes=temp[i].likes+1;

      }
  
    }



    setsblogData(temp);
}
    
    let  submitpost= async()=>{

         console.log(document.getElementById('name').value )

         const submitData={
             name:document.getElementById('name').value,
             head:document.getElementById('head').value,
            body:document.getElementById('body').value,
             likes:0
         }

         if(submitData.name!=""&&submitData.head!=""&&submitData.body!="")
         {
                 

          // axios.post("https://mentathonbackend.herokuapp.com/blogs",submitData)
          const tt= await axios.post("https://mentathonbackend.herokuapp.com/blogs",submitData)
                 
                const res= await axios.get("https://mentathonbackend.herokuapp.com/blogs")
                setsblogData(res.data[0]);  
                // .then(res=>setsblogData(res.data[0]))
                  // .catch()

    //    window.location.reload();
         }
         
        
         console.log(submitData);
    }
  
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
    const data=[
    {
        name:"dsdd",
        head:"ddd",
        body:"dddfdffddf",
        likes:0
    },
    {
        name:"dsdd1",
        head:"ddd",
        body:"dddfdffddf",
        likes:0
    },
    {
        name:"dsdd2",
        head:"ddd",
        body:"dddfdffddf",
        likes:0
    },
    {
        name:"dsdd3",
        head:"ddd",
        body:"dddfdffddf",
        likes:0
    },

    ];
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            
            <Button   variant="contained"  style={{position:"sticky",top:"2px"}}
  color="primary" onClick={handleClickOpen} > <Typography   style={{textTransform:"uppercase"}} variant="h4">
                   post
                  </Typography></Button>
            {console.log(blogData)}
        {

           blogData.map((data1,index)=>{
                
                return(
                    <div>

                   
                    <Card style={{border:"2px solid blue" ,margin:"4%"}} className={classes.root}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                  By - {data1.name}
                  </Typography>
                 
                  <Typography  style={{textTransform:"uppercase"}}variant="h3">
                    {data1.head}
                  </Typography>
                  <Typography variant="body2" component="p">
                   
                   
                   {data1.body}
                  </Typography>
                
                 <IconButton onClick={()=>Liked(data1._id)}  aria-label="add to favorites">
          <FavoriteIcon  color="primary" /> 
            
        </IconButton>
        <Typography  style={{textTransform:"uppercase"}} variant="h7">
        {data1.likes}
                  </Typography>
     
                
                </CardContent>
                
              </Card>
              </div>)
            })
        }
 
       
                  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">

        <Typography   style={{textTransform:"uppercase"}} variant="h4">
                   add your anonymous post
                  </Typography>

        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
          required
            autoFocus
            margin="dense"
            id="name"
            label="Anonymous Name"
           
            fullWidth
          />

           <TextField
           required
            // autoFocus
            margin="dense"
            id="head"
            label="Header of Your Post"
           
            fullWidth
          />

<TextField
required
            // autoFocus
            margin="dense"
            rows={10}
            id="body"
            label="Content  of Your Post"
            multiline={true}
            fullWidth
            // style={{height:"340px"}}
          />
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{handleClose(); submitpost();}} color="primary">
            POST
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default Cards

