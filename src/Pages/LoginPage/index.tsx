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
import RainbowText from "../../Components/RainbowText";
import {useState} from "react";
import { useNavigate } from "react-router-dom";


const Login: React.FC= ()=>{
    const [loginState,setLoginState] = useState(true);
    const navigate = useNavigate();

    const onFinish = async (values: Record<string, any>) => {
        const username = values["username"];
        const userpwd = values["password"];
        const url = "http://127.0.0.1:8086/user/login?username="+username+"&userpwd="+userpwd;

        axios.get(url).then((response) =>   {
            if(response.data===true){
                message.success("登陆成功");
                navigate("/home")
            }else {
                message.error("登陆失败")
            }
        }).catch( (error) => {
            console.log(error);
        });
    }

    return (
        <div style={{ backgroundColor: 'aliceblue' }}>

            <LoginForm
                logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                title="Login"
                subTitle="童义的登录界面"
                onFinish={onFinish}
            >
                <>
                    <ProFormText
                        name="username"
                        fieldProps={{
                            size: 'large',
                            prefix: <UserOutlined className={'prefixIcon'} />,
                        }}
                        placeholder={'用户名: admin or user'}
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    />
                    <ProFormText.Password
                        name="password"
                        fieldProps={{
                            size: 'large',
                            prefix: <LockOutlined className={'prefixIcon'} />,
                        }}
                        placeholder={'密码: ant.design'}
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                        ]}
                    />
                </>
                <div
                    style={{
                        marginBlockEnd: 24,
                    }}
                >
                    <ProFormCheckbox noStyle name="autoLogin">
                        自动登录
                    </ProFormCheckbox>
                    <a href="/"
                       style={{
                           float: 'right',
                       }}
                    >
                        忘记密码
                    </a>
                </div>
            </LoginForm>
        </div>

    );

};

export  default  Login;