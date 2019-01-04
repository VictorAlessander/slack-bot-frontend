import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
//import Build from "@material-ui/icons/Build";
//import DateRange from "@material-ui/icons/DateRange";
// core components
import Success from "components/Typography/Success.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
//import InputLabel from "@material-ui/core/InputLabel";
import Danger from "components/Typography/Danger.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from 'components/CustomButtons/Button.jsx';

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
      <GridContainer>
        <GridItem xs={12} md={12} sm={12}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>build</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>{this.statusBot ? <Success>BOT Online</Success> : <Danger>BOT Offline</Danger>}</p>
              <h3 className={classes.cardTitle}>Configurações do BOT</h3>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <h3>Environments</h3>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="RANCHER_ACCESS_KEY"
                        id="rancherAccessKey"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: "ASOJDASD9A8982131LASKDJKL"
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="RANCHER_SECRET_KEY"
                        id="rancherSecretKey"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: "ASOJDASD9A8982131LASKDJKL"
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="RANCHER_BASE_URL"
                        id="rancherBaseUrl"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: "http://18.170.25.1:8080/v1/projects"
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="RANCHER_PROJECT_ID"
                        id="rancherProjectId"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: "1a5"
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="SLACK_BOT_TOKEN"
                        id="slackBotToken"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: "aosjhdoasjodias9721821asl"
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="SLACK_BOT_ID"
                        id="slackBotId"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: "AOASD719"
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="SLACK_BOT_CHANNEL"
                        id="slackBotChannel"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: "MHAO7A9S"
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="SLACK_BOT_VERIFICATION_TOKEN"
                        id="slackBotVerificationToken"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: "ajsdosa899879A8SDJAIOJ989LKJASD989"
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="HTTP_PORT"
                        id="httpPort"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: "9090"
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button type="button" color="primary">Atualizar</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
