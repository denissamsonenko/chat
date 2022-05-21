import React, {useContext, useState} from 'react'
import {Context} from '../index'
import {useAuthState} from 'react-firebase-hooks/auth'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Loader from './Loader'
import firebase from 'firebase/compat/app'
import Avatar from '@mui/material/Avatar'

const Chat = () => {
  const {auth, firestore} = useContext(Context)
  const [user] = useAuthState(auth)
  const [messages, loading, error] = useCollectionData(
    firestore.collection('messages').orderBy('createAt'),
  )

  const [value, setValue] = useState('')

  const sendMessage = async () => {
    await firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      text: value,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setValue('')
  }

  if (loading) {
    return <Loader/>
  }

  return (
    <Container>
      <Grid container sx={{height: window.innerHeight - 50, justifyContent: 'center', mt: 5}}>
        <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>
          {messages.map(message =>
            <div key={message.createAt}
                 style={{
                   m: 10,
                   border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                   ml: user.uid === message.uid ? 'auto' : '10px',
                   width: 'fit-content',
                   p: 5,
                 }}
            >
              <Grid container>
                <Avatar src={message.photoUrl}/>
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          )}
        </div>
        <Grid container sx={{direction: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', width: '80%'}}>
          <TextField variant={'outlined'}
                     fullWidth
                     maxRows={2}
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
          />
          <Button variant={'outlined'} onClick={sendMessage}>Send</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat
