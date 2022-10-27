import React from 'react';
import PageWrapper from "../components/PageWrapper";
import {Link} from "react-router-dom";
import {Space, Typography} from "antd";

const {Title} = Typography;

const NotFound = () => (
  <PageWrapper title="404 Not Found">
    <Space direction="vertical" align="center">
      <Title level={2}>404 Not Found</Title>
      <Link to="/">Go to Home</Link>
    </Space>
  </PageWrapper>

);

export default NotFound;