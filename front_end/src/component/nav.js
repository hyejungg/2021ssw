import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

//material-ui를 이용하여 네비게이션 바 구현

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "auto",
  },
};

class NavSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  handleDrawerToggle = () => this.setState({ toggle: !this.state.toggle });
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar style={{ background: "#81bef7" }} position="static">
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={this.handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </AppBar>
        <Drawer open={this.state.toggle}>
          <MenuItem onClick={this.handleDrawerToggle}>
            안심 화장실 지도
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>공지사항</MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>관리자 페이지</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(NavSideBar);
