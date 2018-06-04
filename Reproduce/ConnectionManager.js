module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["issuevalidator"] = {
             host: "issuevalidator.czndmdv7dw6d.us-east-1.rds.amazonaws.com",
             port: "3306",
             user: "andun",
             password: process.env.Password_rdsIssuevalidator,
             database: "Validator",
        };
    };