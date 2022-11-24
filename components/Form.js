import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload } from "antd";

const { TextArea } = Input;

const BlogForm = () => {
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        // onValuesChange={onFormLayoutChange}
        // disabled={componentDisabled}
      >
        <Form.Item label="Title">
          <Input 
            name="title"
            placeholder="Title..."
          />
        </Form.Item>
        <Form.Item label="Content">
          <TextArea 
          rows={6}
          name="description"
            placeholder="Content..."/>
        </Form.Item>

        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload Image
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label>
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <BlogForm />;
