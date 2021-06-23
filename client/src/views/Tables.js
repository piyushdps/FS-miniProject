
import PrisonersTable from "components/Tables/PrisonersTable";
import PrisonsTable from "components/Tables/PrisonsTable";
import UsersTable from "components/Tables/UsersTable";




import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <PrisonsTable/>
        <PrisonersTable/>
        <UsersTable/>

        </div>
    </>
  );
}

export default Tables;
