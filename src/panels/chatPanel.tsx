import React from "react";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ForumIcon from '@material-ui/icons/Forum';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { makeStyles, Theme, createStyles, Card, Box, Avatar } from "@material-ui/core";
import * as DATA from "../mockdata/chatPanelData.json"
import ChatHead from "../interfaces/ChatHead";

const useStyles = makeStyles((theme: Theme) => 
createStyles(
    {
      root: {
        flexGrow: 1,
        color: "#fc6860",
      },
      chatbox: {
        height: '800px',
        overflowY: "scroll",
        marginTop: "-10px",
      },
      chatTopBar: {
        position: "fixed",
        width: "30%",
        zIndex: 999,
      },
      chatHeadButtons: {
        display: "inline-block",
        background: "#fc6860",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "33.33%",
      },
      chatHead: {
        width: "100%",
        display: "flex",
        padding: "30px",
      },
      chatHeadTitle: {
        color: "grey",
        fontWeight: 700,
        fontSize: 18
      },
      chatHeadSubTitle: {
        color: "#546e7a",
        fontWeight: 700,
        fontSize: 12
      },
      chatheadAvatar: {
        color: "#90a4ae",
        alignSelf: "center",
        marginRight: "20px"
      },
      messageIcon: {
        alignSelf: "center",
      },
    }
  )
);

const ChatPanel: React.FC = () => {

  const classes = useStyles();
  let data = JSON.parse(JSON.stringify(DATA)).default;

  return(
    <div className={classes.root}>
      <Card className={classes.chatbox} square={true}>
        <Box className={classes.chatTopBar}>
          <Card className={classes.chatHeadButtons} square={true}>
            <PeopleAltIcon></PeopleAltIcon>
          </Card>
          <Card className={classes.chatHeadButtons} square={true}>
            <ForumIcon></ForumIcon>
          </Card>
          <Card className={classes.chatHeadButtons} square={true}>
            <ThumbUpAltIcon></ThumbUpAltIcon>
          </Card>
        </Box>
        <Box >
          <Card square={true} className={classes.chatHead}></Card>

          {data.map((item: ChatHead)=>{ 
            return(
              <Card square={true} className={classes.chatHead}>
                <span className={classes.chatheadAvatar}>
                  <Avatar alt={item.name} src={item.imgName} />
                </span>
                <span>
                  <div className={classes.chatHeadTitle}>
                    {item.name}
                  </div>
                  <div className={classes.chatHeadSubTitle}>
                    {item.position}
                  </div>
                </span>
                <span className={classes.messageIcon}>
                  <QuestionAnswerIcon/>
                </span>  
              </Card>
            );
          })}
        </Box>
      </Card>
    </div>
  )
}
export default ChatPanel;