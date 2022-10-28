import {
    LockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    LoginForm,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components';
import {message } from 'antd';
import './index.css'
import GradButton from "../Components/GradButton";

const Login = ()=>{

    const onFinish = async (values: Record<string, any>) => {
        console.log(values);
        message.success("登陆成功")
        return true;
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