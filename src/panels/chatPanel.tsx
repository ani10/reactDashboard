import React from "react";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ForumIcon from '@material-ui/icons/Forum';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { makeStyles, Theme, createStyles, Card } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
createStyles(
    {
      root: {
        flexGrow: 1,
        color: "#fc6860",
      },
      chatbox: {
        height: '800px'
      },
      chatHeadButtons: {
        display: "inline-block",
        background: "#fc6860",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "33.33%",
      },
    }
  )
);

const ChatPanel: React.FC = () => {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Card className={classes.chatbox}>
          <Card className={classes.chatHeadButtons} square={true}>
            <PeopleAltIcon></PeopleAltIcon>
          </Card>
          <Card className={classes.chatHeadButtons} square={true}>
            <ForumIcon></ForumIcon>
          </Card>
          <Card className={classes.chatHeadButtons} square={true}>
            <ThumbUpAltIcon></ThumbUpAltIcon>
          </Card>
      </Card>
    </div>
  )
}
export default ChatPanel;