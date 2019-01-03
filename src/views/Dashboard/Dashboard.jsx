import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
//import Build from "@material-ui/icons/Build";
//import DateRange from "@material-ui/icons/DateRange";
// core components
import Success from "components/Typography/Success.jsx";
import Danger from "components/Typography/Danger.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
//import CardIcon from "components/Card/CardIcon.jsx";
//import CardFooter from "components/Card/CardFooter.jsx";
import CardBody from "components/Card/CardBody.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  statusBot = false;
  qntComandos = 7;

  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem md={1}>
            <Card>
              <CardHeader color={this.statusBot ? "success" : "danger"}>
                <b>Status</b>
              </CardHeader>
              <CardBody>
                <p>{this.statusBot ? <Success><b>BOT Online</b></Success> : <Danger><b>BOT Offline</b></Danger>}</p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={2}>
            <Card>
              <CardHeader color="info">
                <b>Comandos disponíveis</b>
              </CardHeader>
              <CardBody>
                <p>{this.qntComandos} comandos disponíveis</p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
