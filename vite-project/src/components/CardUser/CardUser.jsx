import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardUser = ({data}) => {
    return (
        <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="500"
            image={data.Img}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h4" textAlign='center' component="div">
                {data.Model}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {data.Brand}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                ${data.Price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data.Condition}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data.Gender}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    )
}

export default CardUser;