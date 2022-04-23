import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { BlogContext } from "../contexts/BlogContext";
// import { AuthContext } from "../contexts/AuthContext";

export default function BlogCard({item}) {
  // const { useFetch, item } = React.useContext(itemContext);
  // const { currentUser } = React.useContext(AuthContext);
  // useFetch();
  console.log(item);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={item?.url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.addDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.content}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {item?.user}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
