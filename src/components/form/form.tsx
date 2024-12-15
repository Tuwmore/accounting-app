//library import
import React from "react";
import { Form, Input, Button, FormInstance, Select, Radio } from "antd";

//ambil data untuk masing-masing form
interface Field {
  name: string; // Field name
  label: string; // Field label
  placeholder?: string; // Input placeholder
  type: string;  // Input type
  rules?: any[]; // Validation rules
  options?: { label: string; value: string }[]; // For select fields
}

interface ReusableFormProps {
  fields: Field[]; // Array of fields to display
  onSubmit: (values: any) => void; // Submission handler
  formInstance?: FormInstance; // Optional: Ant Design Form instance
  submitButtonText?: string; // Custom text for the submit button
  initialValues?: Record<string, any>; // Initial values for the form
  isLoading?: boolean; // Loading state for submit button
}

const ReusableForm: React.FC<ReusableFormProps> = ({
  fields,
  onSubmit,
  formInstance,
  submitButtonText = "Submit",
  initialValues = {},
  isLoading = false,
}) => {
  return (
    <Form
      form={formInstance}
      layout="vertical"
      onFinish={onSubmit}
      initialValues={initialValues}
      style={{ maxWidth: 400, margin: "0 auto" }}
    >
      {fields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          name={field.name}
          rules={field.rules}
        >
          {field.type === "text" && <Input />}
          {field.type === "number" && <Input type="number" />}
          {field.type === "date" && <Input type="date" />}
          {field.type === "radio" && (
            <Radio.Group>
              <Radio value="In">In</Radio>
              <Radio value="Out">Out</Radio>
            </Radio.Group>  
          )}
          {field.type === "select" && (
            <Select>
              {field.options?.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          )}
        </Form.Item>
      ))}
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          {submitButtonText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReusableForm;
