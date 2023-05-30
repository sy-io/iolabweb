import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';





export default function MemberCard(props) {

	// < GRID MATERIAL UI >
	// https://www.youtube.com/watch?v=UNCq01LNNrg

	// < CENTERING GRID LAYOUT >
	// https://qiita.com/ryogo_niwa/items/456e2854288dd16fbab5

	// < ESCAPING LINE FEED >
	// https://stackoverflow.com/questions/52463765/typography-in-react-material-ui


	const bull = (
	  <Box
	    component="span"
	    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	  >
	    •
	  </Box>
	);


	return (

		<Card className="" sx={{minWidth:  200, 
								maxWidth:  550, 
								minHeight: 300, 
								maxHeight: 700 }}>
	       <CardMedia
	       	sx={{}} 
	        component="img"
	        height="194"
	        image={props.imgData.url}
	        alt="props.imgData.name"
	    	/>

			<CardContent>
				<Typography variant="h6" component="div">
				  {props.imgData.name}
				</Typography>

				<Typography style={{whiteSpace: 'pre-line'}}>
				  {props.imgData.desc}
				</Typography>

			</CardContent>

	    </Card>


	);


}

