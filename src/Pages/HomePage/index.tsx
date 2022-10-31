import {
    LockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    LoginForm,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components';
import axios from 'axios'
import {Button, Form, message ,Input, Checkbox, Card} from 'antd';
import './index.css'
import {useState} from "react";
import { useNavigate } from "react-router-dom";


const Home: React.FC= ()=>{
    const [loginState,setLoginState] = useState(true);
    const navigate = useNavigate();

    const onFinish = async (values: Record<string, any>) => {
        const username = values["username"];
        const userpwd = values["password"];
        const url = "http://127.0.0.1:8086/user/login?username="+username+"&userpwd="+userpwd;

        axios.get(url).then((response) =>   {
            if(response.data===true){
                message.success("登陆成功");
                navigate("/Login")
            }else {
                message.error("登陆失败")
            }
        }).catch( (error) => {
            console.log(error);
        });
    }

    return (
        <Card title={"home card"}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 5 }}
                initialValues={{ remember: false }}
                onFinish={onFinish}
                autoComplete="on"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );

};

export  default  Home;