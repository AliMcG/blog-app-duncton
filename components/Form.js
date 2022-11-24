import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload } from "antd";

const { TextArea } = Input;

const BlogForm = () => {


  //Function that returns a promise to read the file
const reader = (file) => {
  return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
  });
}
const readFile = (file) => {
  reader(file).then(result => console.log(result));
}

  const handleFormData = (formValues) => {
    console.log(formValues)
  }

  return (
    <>
      <Form label="New Blog"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        // onValuesChange={onFormLayoutChange}
        onFinish={handleFormData}
        // disabled={componentDisabled}
      >
        <Form.Item label="Title" name="title">
          <Input 
            style={{ width: 400 }}
            name="title"
            placeholder="Title..."
          />
        </Form.Item>
        <Form.Item label="Content" name="content">
          <TextArea 
          style={{ width: 800 }}
          rows={6}
          name="description"
            placeholder="Content..."/>
        </Form.Item>

        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action={readFile} listType="picture-card">
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
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <BlogForm />;
