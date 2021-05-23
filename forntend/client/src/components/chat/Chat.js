import React ,{useState,useEffect,useRef} from 'react';
import { Button, TextField, unsupportedProp } from '@material-ui/core';
import io from 'socket.io-client';
import './chat.css';
// const socket=io.conect("http://localhost:4000");
import uuid from 'uuid-random';



function Chat() {
    const [ state, setState ] = useState({ message: "", name: "" })
	const [ chat, setChat ] = useState([])

	const socketRef = useRef()

	useEffect(
		() => {
			socketRef.current = io.connect("https://mlhmenatalchatbackend.herokuapp.com/")
			socketRef.current.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
			})
			return () => socketRef.current.disconnect()
		},
		[ chat ]
	)

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
        console.log(34434);
		const { name, message } = state

		if(name==""||message=="")
       {
		   alert("please fill any random name and message")
	   }

	   else
	   {
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	   }
	}

	const renderChat = () => {
        // let objDiv = document.getElementsByClassName("renderingchat");
        // objDiv.scrollTop = objDiv.scrollHeight;

		return chat.map(({ name, message }, index) => (
			<div   key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
		))
	}

	return (
		<div >
	<h3 style={{textTransform:"uppercase",color:"blueviolet"}}>Chat anonymously and make random friends</h3>
	<h3 style={{textTransform:"uppercase",color:"blueviolet"}}>Global Chat</h3>
<div  style={{height:"28vh"}} className="render-chat">
			
			  {renderChat()} 
			</div>

            <div  style={{}} className="formName">
			<form  >
			<h3 style={{textTransform:"uppercase",color:"blueviolet"}}>type here</h3>
				<div className="name-field">
					<TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" />
				</div>
				<div>
					<TextField
						name="message"
						onChange={(e) => onTextChange(e)}
						value={state.message}
						id="outlined-multiline-static"
						variant="outlined"
						label="Message"
                        fullWidth={true}
                        style={{width:"100vw"}}
					/>
				</div>
                <Button  onClick={onMessageSubmit} style={{marginTop:"2vh",color:"white"}} variant="contained" color="primary" > Send Message</Button>
				
			</form>
			</div>
		</div>
	)
}

export default Chat
