
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';

const { Content, Footer } = Layout;
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';


import MyHeader from '../components/MyHeader';
import SideBar from '../components/SideBar';
import { withAuthSync } from '../utils/auth';
import '../node_modules/antd/dist/antd.css'

import '../node_modules/antd/dist/antd.css';


const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async e => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
  }

  return <td {...restProps}>{childNode}</td>;
};




function Members(props) {
  let columnFormat = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Student ID',
      dataIndex: 'studentID',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phno',
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      render: (text, record) =>
        state.dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  let [state, setState] = useState({
    dataSource: [
      {
        key: '0',
        name: 'Edward King 0',
        email: 'edward@umass.edu',
        studentID: '10000000',
        phno: 9900000000
      },
      {
        key: '1',
        name: 'Edward King 1',
        email: 'edward@umass.edu',
        studentID: '10000001',
        phno: 9900000001
      },
    ],
    count: 2,
  });


  let handleDelete = key => {
    const dataSource = [...state.dataSource];
    setState({
      dataSource: dataSource.filter(item => item.key !== key),
    });
  };

  let handleAdd = () => {
    const { count, dataSource } = state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      email: 'edward@umass.edu',
      studentID: `1000000${count}`,
      phno: `990000000${count}`,
    };
    setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  let handleSave = row => {
    const newData = [...state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setState({
      dataSource: newData,
    });
  };
  const { dataSource } = state;
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  let columns = columnFormat.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
      }),
    };
  });
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MyHeader pageName="Members" />
      <Layout>
        <SideBar selected={'members'} />
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <div>
                <Button
                  onClick={handleAdd}
                  type="primary"
                  style={{ marginBottom: 16, }}>
                  Add a row
                    </Button>
                <Table
                  components={components}
                  rowClassName={() => 'editable-row'}
                  bordered
                  dataSource={dataSource}
                  columns={columns}
                />
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Build Umass</Footer>
        </Layout>
      </Layout>

    </Layout>
  );


}
export default withAuthSync(Members);

