import React from 'react';
import styles from "./components/Login.module.css"
import Button from "./Button"
// export default class UserLogin extends React.Component {
//     construct(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: ''
//         };
//     }
    
// ?
export default function Loginblock(){
        return <div className={styles.parent}>
            <div className={styles.title}>
                <span>
                    用户登录
                </span>
            </div>
            <div className={styles.loginform}>
                <span>用户名：</span>
                <span><input type="text"/></span>
            </div>
            <div className={styles.loginform}>
                <span>密码：</span>
                <span><input type="password"/></span>
            </div>
            <div>
                <Button name={"登录"} className={styles.loginbtn}></Button>
                <Button name={"注册"} className={styles.signupbtn}></Button>
            </div>
        </div>
    // }
}