import React from "react";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ForumIcon from '@material-ui/icons/Forum';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { makeStyles, Theme, createStyles, Card, Box, Avatar, Grid, InputBase } from "@material-ui/core";
import * as DATA from "../mockdata/chatPanelData.json"
import ChatHead from "../interfaces/ChatHead";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) => 
createStyles(
    {
      root: {
        flexGrow: 1,
        color: "#fc6860",
        position: "fixed",
        right: 0,
        top: "160px",
        maxHeight: "100vh",
        overflowY: "scroll",
        height: '80vh',
        width: '20vw',
        flexShrink: 0,
      },
      chatTopBar: {
        zIndex: 999,
        position: "fixed",
        width: '20vw'      
      },
      chatHeadButtons: {
        display: "inline-block",
        background: "#fc6860",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "33.33%",
      },
      chatBox:{
        paddingTop: "64"
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
      searchbox:{
        zIndex: 999,
        position: "fixed",
        bottom: 0,
        width: '20vw',
      },
      searchIcon: {
        color: '#8E8E8E',
        zIndex: 1,
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        borderRadius: '10px',
        background: "eeeeee",
        borderBottom: "1px solid #e0e0e0",
        width:"100%"
      },
      inputInput: {
        padding: '5px',
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        width: '100%',
      },
      scrollableY: {
        overflowY: "auto"
      },
    }
  )
);

const ChatPanel: React.FC = () => {

  const classes = useStyles();
  let data = JSON.parse(JSON.stringify(DATA)).default;

  return(
      <Card className={classes.root} square={true}>
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
        <Box className={classes.chatBox} >
          <Card square={true} className={classes.chatHead}>
          </Card>
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
              </Card>
            );
          })}
          <Card square={true} className={classes.searchbox}>
            <div>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search people, chats..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Card>
        </Box>
        
      </Card>
  )
}
export default ChatPanel;