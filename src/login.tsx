import React, { useState } from "react";
import "../src/scss/register.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useTranslation } from "react-i18next";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

interface IUserState {
  email: string;
  password: string;
}

type Props = {};

const Login = (props: Props) => {
  const schema = z.object({
    email: z
      .string()
      .min(1, { message: "กรุณากรอกอีเมล" })
      .email("กรุณากรอกอีเมลให้ถูกต้อง"),
    password: z
      .string()
      .min(8, { message: "กรุณากรอกรหัสผ่านให้ถูกต้อง" })
      .max(15),
  });

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IUserState>({
    resolver: zodResolver(schema),
  });

  const { t, i18n } = useTranslation();

  const onSubmit: SubmitHandler<IUserState> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="box-register">
      <div className="box-header">
        <div className="content">
          <h2>สร้างบัญชี</h2>
          <p>สมัครสมาชิกและเริ่มใช้งาน</p>
        </div>
      </div>
      <div className="box-body">
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label={t("FormEmail")}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="กรอกอีเมล" />
                  )}
                />
                {errors.email && (
                  <span className="error-message">{errors.email.message}</span>
                )}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label={t("FormPass")}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      placeholder="กรอกรหัสผ่าน"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  )}
                />
                {errors.password && (
                  <span className="error-message">
                    {errors.password.message}
                  </span>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="btn-summit"
                >
                  {t("BtnSendForm")}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Login;
