import api from "../../../api";
import { Button, Form, Input } from 'antd';
import { redirect } from "react-router-dom";

export default function SignUpForm() {
    const onFinish = async (data: any) => {
        const response = await api.post("auth/sign-up", { ...data })

        const { accessToken, refreshToken } = response.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        redirect("/dashboard");
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item<string>
                wrapperCol={{ offset: 0 }}
                name="email"
            >
                <Input placeholder='Почта' />
            </Form.Item>

            <Form.Item<string>
                wrapperCol={{ offset: 0 }}
                name="firstname"
            >
                <Input placeholder='Имя' />
            </Form.Item>

            <Form.Item<string>
                wrapperCol={{ offset: 0 }}
                name="surname"
            >
                <Input placeholder='Фамилия' />
            </Form.Item>

            <Form.Item<string>
                wrapperCol={{ offset: 0 }}
                name="lastname"
            >
                <Input placeholder='Отчество' />
            </Form.Item>

            <Form.Item<string>
                wrapperCol={{ offset: 0 }}
                name="phone"
            >
                <Input placeholder='Телефон' />
            </Form.Item>

            <Form.Item<string>
                wrapperCol={{ offset: 0 }}
                name="portal_name"
            >
                <Input placeholder='Наименование организации' />
            </Form.Item>

            <Form.Item<string>
                wrapperCol={{ offset: 0 }}
                name="portal_inn"
            >
                <Input placeholder='ИНН организации' />
            </Form.Item>

            <Form.Item
                wrapperCol={{ offset: 0 }}>
                <Button type="primary" htmlType="submit" rootClassName='w-full bg-[#1677ff]'>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}