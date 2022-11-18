import React from 'react'
import {  Grid, Typography,Card, TextField, Button, Link,Box} from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import { useLoginStudentMutation } from '../features/coach/Index';
import { useState } from 'react';
import { getToken, storeToken } from '../services/LocalStorageService';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../features/auth/authSlice';
import { useEffect } from 'react';
const LoginPage = () => {
    const [server_error,setServerError] = useState({})
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const[loginStudent,{isLoading}] = useLoginStudentMutation()
    const handleLogin = async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const actualData = {
            username:data.get('username'),
            password:data.get('password'),
        }
        
        const res = await loginStudent(actualData)
       
        if(isLoading){
            return (
                console.log("loading")
            )
        }
    
        if(res.data){
            storeToken(res.data)
            let {access_token} = getToken()
            dispatch(setUserToken({access_token:access_token}))
            navigate('/')
        }
    }

   

   return(
    <Container maxWidth="xl" sx={{marginTop:12}}>
    <Grid container sx={{justifyContent:"center",alignItems:"center"}}  columns={{xs:4,sm:8,md:12}}>
        <Grid item xs={4} sm={8} md={4}>
            <Card sx={{maxWidth:370}}>
                <Box component="form" sx={{p:2}} onSubmit={handleLogin} >
                
                    <Typography sx={{marginTop:1,flexDirection:"row"}} style={{borderBottom:"2px solid grey",borderWidth:2}}><Typography sx={{fontWeight:"500",fontSize:20,marginLeft:3}} >Login Here</Typography></Typography>
                    <Grid container>
                        <Grid item xs={12}  sx={{marginTop:3}}>
                            <TextField fullWidth label="UserName/Email" name="username"></TextField>
                            
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sx={{marginTop:3}}>
                            <TextField fullWidth label="Password" name="password"></TextField>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sx={{marginTop:3}}>
                            <Button fullWidth label="Password" variant="contained" type="submit">Login</Button>
                        </Grid>
                    </Grid>
                    <Grid container columns={{xs:6,sm:8,md:12}} >
                        <Grid item xs={6}  sx={{marginTop:3}}>
                            <Typography> <Link underline="hover" href="#"> Forgat Password ?</Link></Typography>
                        </Grid>
                        <Grid item xs={6} sx={{marginTop:3,justifyContent:"flex-end",alignItems:"flex-end",textAlign:"end"}}>
                            <Typography> <Link underline="hover" href="/register">Register ? New</Link></Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </Grid>
    </Grid>
    
    
</Container>
   );
}

export default LoginPage