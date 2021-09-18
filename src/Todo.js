import { List, ListItem , ListItemText , ListItemAvatar,Modal, Button} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import React,{useState} from 'react';
import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

function Todo(props) {
    const classes=useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(props.todo.todo);
   

    const updateTodo= ()=>{

        db.collection('todos').doc(props.todo.id).set({
            todo:input
        },{merge:true});
        setOpen(false);
    }

    return (        
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
            className="pos"> 
        <div className={classes.paper}>
            <h2> Enter text to Update </h2>
            <input value={input} onChange={event=> setInput(event.target.value)}/>
            <Button variant="contained" color="primary" onClick={updateTodo}> Update Todo</Button>
        </div>
        </Modal>
        <List>
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
            </ListItem>
            <EditIcon onClick={()=>setOpen(true)} className="curs" />
            <DeleteForeverIcon variant="contained" color="secondary" onClick={event=>db.collection('todos').doc(props.todo.id).delete()} className="curs"/>
        </List>
        </>
    )
}

export default Todo
