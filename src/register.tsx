import React, { useState } from "react";
import "../src/scss/register.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Radio,
  Row,
} from "antd";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

interface IUserState {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  birthDate: Date;
  gender: string;
  tel: string;
}

type Props = {};

const Register = (props: Props) => {
  const dataSchema = z
    .object({
      gender: z.string().min(1, { message: "*" }),
      firstName: z
        .string()
        .min(2, { message: "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร" })
        .refine(
          (value) => {
            const thaiCharacters = /^[ก-๙.-]+$/;
            const englishCharacters = /^[a-zA-Z.-]+$/;
            return thaiCharacters.test(value) || englishCharacters.test(value);
          },
          {
            message: "ชื่อต้องประกอบด้วยภาษาไทยหรืออังกฤษเท่านั้น",
          }
        ),
      lastName: z
        .string()
        .min(2, { message: "นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร" })
        .refine(
          (value) => {
            const thaiCharacters = /^[ก-๙.-]+$/;
            const englishCharacters = /^[a-zA-Z.-]+$/;
            return thaiCharacters.test(value) || englishCharacters.test(value);
          },
          {
            message: "นามสกุลต้องประกอบด้วยภาษาไทยหรืออังกฤษเท่านั้น",
          }
        ),
      tel: z.string().refine((value) => /^0[0-9]{9}$/.test(value), {
        message: "ตัวแรกของเบอร์ต้องเป็น 0 และต้องมีตัวเลข 10 ตัวเท่านั้น",
      }),
      birthDate: z.string().min(1, { message: "Required" }).nullable(),
      password: z
        .string()
        .min(8, { message: "ตั้งรหัสผ่านอย่างน้อย 8 ตัว" })
        .nullable(),
      email: z
        .string()
        .min(1, { message: "กรุณากรอกอีเมลของท่าน" })
        .email("กรุณาตรวจสอบอีเมลที่ระบุให้ถูกต้อง"),
    })
    .refine(
      (value) => {
        const regex = /^[a-zA-Z]+$/;
        const isEnglish =
          regex.test(value.firstName) && regex.test(value.lastName);
        const thaiRegex = /^[ก-๙]+$/;
        const isThai =
          thaiRegex.test(value.firstName) && thaiRegex.test(value.lastName);
        if (!isEnglish || !isThai) {
          return isEnglish || isThai;
        }
      },
      {
        message: "ชื่อและนามสกุลภาษาไม่ตรงกัน",
      }
    );

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserState>({
    resolver: zodResolver(dataSchema),
  });

  const { t, i18n } = useTranslation();
  const [isCheckedA, setIsCheckedA] = useState(false);
  const [isCheckedB, setIsCheckedB] = useState(false);

  function handleCheckboxChange(checkedValues: string[]) {
    setIsCheckedA(checkedValues.includes("A"));
    setIsCheckedB(checkedValues.includes("B"));
  }

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
            <Col span={12}>
              <Form.Item label={t("FormFirstName")}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="กรอกชื่อ" />
                  )}
                />
                {errors.firstName && (
                  <span className="error-message">
                    {errors.firstName.message}
                  </span>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={t("FormLastName")}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="กรอกนามสกุล" />
                  )}
                />
                {errors.lastName && (
                  <span className="error-message">
                    {errors.lastName.message}
                  </span>
                )}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label={t("FormTel")}>
                <Controller
                  name="tel"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="กรอกเบอร์โทรศัพท์" />
                  )}
                />
                {errors.tel && (
                  <span className="error-message">{errors.tel.message}</span>
                )}
              </Form.Item>
            </Col>
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
            <Col span={24}>
              <Form.Item label={t("FormGender")}>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Radio.Group
                      buttonStyle="solid"
                      {...field}
                      className="custom-radio-group"
                    >
                      <Radio.Button value="ชาย">
                        {t("FormGenderM")}
                      </Radio.Button>
                      <Radio.Button value="หญิง">
                        {t("FormGenderF")}
                      </Radio.Button>
                      <Radio.Button value=" ">{t("FormGenderN")}</Radio.Button>
                    </Radio.Group>
                  )}
                />
                {errors.gender && (
                  <span className="error-message">{errors.gender.message}</span>
                )}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label={t("FormBirthDay")}>
                <Controller
                  name="birthDate"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <DatePicker
                      placeholder="dd/mm/yyyy"
                      onChange={(date) => onChange(date?.format("DD-MM-YYYY"))}
                      format={[
                        "DD/MM/YYYY",
                        "DD/MM/YY",
                        "DD-MM-YYYY",
                        "DD-MM-YY",
                      ]}
                    />
                  )}
                />
                {errors.birthDate && (
                  <span className="error-message">
                    {errors.birthDate.message}
                  </span>
                )}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Checkbox.Group onChange={handleCheckboxChange}>
                <Checkbox value="A">
                  <span>
                    ฉันได้อ่านและยอมรับ{" "}
                    <a data-v-1e92e2d0="" href="#">
                      ข้อกำหนดการใช้งาน
                    </a>{" "}
                    และ{" "}
                    <a data-v-1e92e2d0="" href="#">
                      นโยบายความเป็นส่วนตัว
                    </a>{" "}
                    ของสเวนเซ่นส์
                  </span>
                </Checkbox>
                <Checkbox value="B">
                  <span>
                    ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ
                    จากสเวนเซ่นส์และ
                    <a data-v-1e92e2d0="" href="#">
                      บริษัทในเครือ
                    </a>{" "}
                    โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ
                    สามารถศึกษาเงื่อนไขหรือข้อตกลง{" "}
                    <a data-v-1e92e2d0="" href="#">
                      นโยบายความเป็นส่วนตัว
                    </a>{" "}
                    เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ
                  </span>
                </Checkbox>
              </Checkbox.Group>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-summit" disabled={!isCheckedA||!isCheckedB}>
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

export default Register;
