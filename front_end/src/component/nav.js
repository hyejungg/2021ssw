import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
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
        {/* 각 화장실 페이지 */}
        <Drawer open={this.state.toggle}>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link underline="none" component={RouterLink} to="/">
              안심 화장실 지도
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link underline="none" component={RouterLink} to="/notice">
              공지사항
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link underline="none" component={RouterLink} to="/admin">
              관리자 페이지
            </Link>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(NavSideBar);
