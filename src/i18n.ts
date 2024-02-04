import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  th: {
    translation: {
      "login" : "เข้าสู่ระบบ",
      "register" : "สมัครสมาชิก",
      "delivery" : "กรุณาเลือกที่อยู่จัดส่ง",
      "welcome" : "ยินดีต้อนรับ",
      "brandsite":"ไอสกรีมของเรา",
      "privilege":"สิทธิพิเศษ",
      "reward":"รีวอร์ด",
      "mycoupons":"คูปองของฉัน",
      "giftvoucher":"บัตรของขวัญ",
      "membercard":"บัตรสเวนเซ่นส์การ์ด",
      "myaccount":"ข้อมูลของฉัน",
      "faq":"คำถามที่พบบ่อย",
      "terms":"ข้อกำหนดการใช้งาน",
      "policy":"นโยบายความเป็นส่วนตัว",
      "deal":"ดีลสุดคุ้ม",
      "news":"ข่าว",
      "dl":"ดาวน์โหลดที่",
      "FormFirstName": "ชื่อ",
      "FormLastName": "นามสกุล",
      "FormBirthDay": "วันเกิด",
      "FormGender": "เพศ",
      "FormGenderM": "ชาย",
      "FormGenderF": "หญิง",
      "FormGenderN": "ไม่ระบุ",
      "FormTel": "เบอร์โทรศัพท์",
      "FormEmail": "อีเมล",
      "BtnSendForm" : "สมัครสมาชิก",
      "BtnLoginForm" :"เข้าสู่ระบบ",
      "FormPass" : "รหัสผ่าน",

    },
  },
  en: {
    translation: {
      "login" : "Login",
      "register" : "Register",
      "delivery" : "Select a delivery address",
      "welcome" : "Welcome",
      "brandsite":"Brandsite",
      "privilege":"Privilege",
      "reward":"Reward",
      "mycoupons":"My Coupons",
      "giftvoucher":"Gift Voucher",
      "membercard":"Member Card",
      "myaccount":"My Account",
      "faq":"FAQ",
      "terms":"Terms and Conditions",
      "policy":"Privacy Policy",
      "deal":"Super Deal",
      "news":"News",
      "dl":"Dowload on",
      "FormFirstName": "Firstname",
      "FormLastName": "Lastname",
      "FormBirthDay": "Birthday",
      "FormGender": "Gender",
      "FormGenderM": "Male",
      "FormGenderF": "Female",
      "FormGenderN": "None",
      "FormEmail" : "Email",
      "BtnSendForm" : "Register",
      "BtnLoginForm" : "Login",
      "FormPass" : "Password",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "th",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
