import React from 'react';
import {Button, Col, Form, Input, Row, Select, Typography} from 'antd';
import {ICharacterFilter} from "../utils/interfaces";


export const SORT_OPTIONS = [
  {label: 'Name A-Z', value: 'nameAZ'},
  {label: 'Name Z-A', value: 'nameZA'},
];

export const STATUS_OPTIONS = [
  {label: 'Alive', value: 'alive'},
  {label: 'Dead', value: 'dead'},
  {label: 'Unknown', value: 'unknown'},
];

export const GENDER_OPTIONS = [
  {label: 'Female', value: 'female'},
  {label: 'Male', value: 'male'},
  {label: 'Genderless', value: 'genderless'},
  {label: 'Unknown', value: 'unknown'},
];

const CharacterFilter = ({onFilter, onChangeSort}: ICharacterFilter) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    onFilter(values);
  }

  const onReset = () => {
    form.resetFields();
    form.submit();
  };

  return (
    <Row>
      <Col span={24}>
        <Typography.Title level={5}>Sort By</Typography.Title>
        <Select
          style={{width: '100%'}}
          allowClear
          onChange={onChangeSort}
          options={SORT_OPTIONS}
        />
      </Col>
      <Col span={24}>
        <Typography.Title level={5}>Filter</Typography.Title>
        <Form
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
          >
            <Input allowClear/>
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
          >
            <Select
              allowClear
              options={STATUS_OPTIONS}
            />
          </Form.Item>
          <Form.Item
            label="Species"
            name="species"
          >
            <Input allowClear/>
          </Form.Item>
          <Form.Item
            label="Type"
            name="type"
          >
            <Input allowClear/>
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
          >
            <Select
              allowClear
              options={GENDER_OPTIONS}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Filter
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
};

export default CharacterFilter;
