import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAddCourseMutation, useGetAllCourseQuery } from '../../features/coach/Index';
import { getToken } from '../../services/LocalStorageService';
const SubCourseCard = ({value}) => {
  return (
    <Card sx={{width:340}}>
      <CardMedia
        component="img"
        
        image={value.course_image}
        alt="green iguana"
        sx={{height:200}}
        style={{backgroundImage:"cover"}}
      />
      <CardContent sx={{height:130}}>
        <Typography gutterBottom variant="h5" component="div">
          {value.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {value.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default function CardCourse() {
  const {access_token} = getToken()
  const {data,isLoading, error} = useGetAllCourseQuery();
  const [addcourse] = useAddCourseMutation();
  if(isLoading){
    return(
      <div className="h3">loadong..</div>
    )
  }
  if(error){
    return(
      <div className="h3">Error</div>
    )
  }
  const handleAddCart = async (slug) => {
            console.log(slug);
           const res = await addcourse({slug,access_token})
  }
  return(
    <div className="container mt-12">
      <div className="text-center  px-28 text-gray-900 text-3xl font-semibold tracking-normal">Our Courses</div>
      <div className="flex gap-6 mt-10 px-12 justify-center ">
         {
          data?.map((item,index) => (
            <div className="cursor-pointer" onClick={() => handleAddCart(item.slug)} key={index}>
              <SubCourseCard value={item}/>
            </div>
          ))
         }
         
    </div>
    
    </div>
  )
}