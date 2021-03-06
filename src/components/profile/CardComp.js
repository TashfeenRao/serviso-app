import Card from "@material-ui/core/Card";
import useStyles from "../cutomHooks/UseStyles";
import {
  Avatar,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AddFriend from "./AddFriend";

export default function CardComp({ username, email, id, url, description }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{
        backgroundColor: "rgb(20,20,47)",
        color: "#F1E9DA",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt=""
          style={{ backgroundColor: "#f50057", color: "#F1E9DA" }}
          src={url}
          className={classes.large}
          color="secondary"
        >
          {username[0].toUpperCase()}
        </Avatar>
      </div>
      <CardContent>
        <Typography variant="h5" component="h2">
          {username}
        </Typography>
        <Typography variant="body2" component="p">
          {description ? description : "Hi, Im using Friends app...."}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          style={{
            textDecoration: "none",
            color: "#F1E9DA",
            backgroundColor: "#f50057",
            padding: "15px",
            borderRadius: "5px",
          }}
          to={`/user/${id}`}
        >
          Profile
        </Link>
        <AddFriend fId={id} />
      </CardActions>
    </Card>
  );
}
