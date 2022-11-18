import React from 'react'
import {  Grid, Typography,Card, TextField, Button, Link, Box, Container} from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterStudentMutation } from '../features/coach/Index';
import {storeToken} from "../services/LocalStorageService"
import { storeSession } from '../services/SessionStorageservice';
const RegisterPage = () => {  
    const[server_error,setServerError] = useState({})
    const navigate=useNavigate()
    const [registerStudent,{isLoading}] = useRegisterStudentMutation()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        const actualData = {
        username: data.get('username'),
        email: data.get('email'),
        first_name: data.get('first_name'),
        last_name: data.get('last_name'),
        password: data.get('password'),
        password2: data.get('password2')
    }
    const res = await registerStudent(actualData)
    if(isLoading){
        return (
            <div className="h3">Loadding...</div>
        )
    }
    if(res.error){
        setServerError(res.error.data)
    }
    if(res.data){
        const {access,refresh} = res.data.token
        const {email} = res.data.msg
        storeSession(res.data.msg);
        storeToken({access,refresh,email})
        navigate("/")
    }
    }
  return (
    <Container maxWidth="xl" sx={{marginTop:12}}>
    <Grid container sx={{justifyContent:"center",alignItems:"center"}} columns={{xs:2,sm:8,md:12}}>
        <Grid item xs={4} sm={8} md={4}>
            <Card >
                <Box component='form' sx={{p:2}} onSubmit={handleSubmit} >
                
                    <Typography sx={{marginTop:1,flexDirection:"row"}} style={{borderBottom:"2px solid grey",borderWidth:2}}><Typography sx={{fontWeight:"500",fontSize:20,marginLeft:3}} >Register here...</Typography></Typography>
                    <Grid container spacing={2.5}>
                        <Grid item xs={6} sx={{marginTop:3}}>
                            <TextField fullWidth label="UserName/Email" name="username"></TextField>
                            {server_error.username?<Typography style={{fontSize:12,color:"red",paddingLeft:10}}>{server_error.username[0]}</Typography>:""}
                        </Grid>
                        <Grid item xs={6} sx={{marginTop:3}}>
                            <TextField fullWidth label="Email" name="email"></TextField>
                            {server_error.email?<Typography style={{fontSize:12,color:"red",paddingLeft:10}}>{server_error.email[0]}</Typography>:""}
                        </Grid>
                    </Grid>
                    <Grid container spacing={2.5}>
                        <Grid item xs={6} sx={{marginTop:3}}>
                            <TextField fullWidth label="First Name" name="first_name"></TextField>
                            {server_error.first_name?<Typography style={{fontSize:12,color:"red",paddingLeft:10}}>{server_error.first_name[0]}</Typography>:""}
                        </Grid>
                        <Grid item xs={6} sx={{marginTop:3}}>
                            <TextField fullWidth label="Last Name" name="last_name"></TextField>
                            {server_error.last_name?<Typography style={{fontSize:12,color:"red",paddingLeft:10}}>{server_error.last_name[0]}</Typography>:""}
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={2.5}>
                        <Grid item xs={6} sx={{marginTop:3}}>
                            <TextField fullWidth label="Password" name="password"></TextField>
                            {server_error.password?<Typography style={{fontSize:12,color:"red",paddingLeft:10}}>{server_error.password[0]}</Typography>:""}
                        </Grid>
                        <Grid item xs={6} sx={{marginTop:3}}>
                            <TextField fullWidth label="Conforim password" name="password2"></TextField>
                            {server_error.password2?<Typography style={{fontSize:12,color:"red",paddingLeft:10}}>{server_error.password2[0]}</Typography>:""}
                            {server_error.non_field_errors?<Typography style={{fontSize:12,color:"red",paddingLeft:10}}>{server_error.non_field_errors[0]}</Typography>:""}
                        </Grid>
                    </Grid>
                    
                    <Grid container>
                        <Grid item xs={12} sx={{marginTop:3}}>
                            <Button fullWidth label="Password" variant="contained" type="submit">Register Now</Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} sx={{marginTop:3}}>
                            <Typography> <Link underline="hover" href="#"> Forgat Password ?</Link></Typography>
                        </Grid>
                        <Grid item xs={6} sx={{marginTop:3,justifyContent:"flex-end",alignItems:"flex-end",textAlign:"end"}}>
                            <Typography> <Link underline="hover" href="/login">Login</Link></Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </Grid>
    </Grid>
    
    
</Container>
  )
}

export default RegisterPage