import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import React from 'react'
import { useGetAllCourseQuery } from '../../features/coach/Index'
const Fotter = () => {
  const {data,error,isLoading} = useGetAllCourseQuery()
  if(isLoading){
    return (
      <div className="h3">Loading..</div>
    )
  }
  if(error){
    return (
      <div className="h3">Error...</div>
    )
  }
  console.log(data)
  return (
    // <Container sx={{marginTop:12}}>
    //   {
    //     data?.map((item,index) => (
    //       // <Card key={index}>
    //       //   <CardMedia component="video" image={item.course_video}  controls/>
    //       // </Card>
    //       // <video id='video' controls controlsList='nodownload' style={{width:"100%"}} key={index}>
    //       //   <source id='course' src={item.course_video} type="video/mp4"/>

    //       // </video>
    //       <ReactPlayer url={item.course_video} playing={true} controls={true} playIcon={true}/>
    //     ))
    //   }
    // </Container>
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, mt: 9,height:400 }}
    >

      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 ,height:500,mt:10 }}>
        <CardCover>
          <video
            autoPlay
            loop
            height="400px"
            poster="https://youtu.be/_gX-lwyMLwI"
          >
            <source
              src="http://localhost:8000/media/course_video/%E0%A4%95%E0%A4%B8_%E0%A4%AD_%E0%A4%95%E0%A4%A0%E0%A4%A8_%E0%A4%AA%E0%A4%B0%E0%A4%B8%E0%A4%A5%E0%A4%A4_%E0%A4%AE_%E0%A4%B6%E0%A4%A4_%E0%A4%B0%E0%A4%B9%E0%A4%A8_%E0%A4%AA%E0%A4%A4%E0%A4%A8_%E0%A4%B8_%E0%A4%B8%E0%A4%96__Russia_Ukraine_war__avadh_ojha_sir__parth.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
       
      </Card>
    </Box>
  )
}

export default Fotter