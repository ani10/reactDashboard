import React from "react";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
createStyles(
    {
      root: {
        flexGrow: 1,
        color: "#fc6860",
      },
    }
  )
);

const ChatPanel: React.FC = () => {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      component works
    </div>
  )
}
export default ChatPanel;