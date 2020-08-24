<template>
  <div id="login">
    <div class="image">
      <img src="@/assets/image/background5.jpg">
    </div>
    <div class="login">
      <div class="header">
        后台管理系统
      </div>
      <div class="input">
        <div class="input-item">
          <div class="input-border">
            <input type="text" class="border" v-model="username" placeholder="用户名" @blur="verify('username')">
          </div>
          <div class="input-message" v-if="inputName">请输入用户名！</div>
        </div>
        <div class="input-item">
          <div class="input-border">
            <input :type="passwordType" class="border" v-model="password" placeholder="密码"
              @blur="verify('password')">
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </div>
          <div class="input-message" v-if="inputPass">请输入密码！</div>
        </div>
      </div>
      <div class="action">
        <div class="btn-login" @click="login">登录</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: '',
        inputName: false,
        inputPass: false,
        passwordType: 'password',
      }
    },
    methods: {
      login() {
        if (!this.username) this.inputName = true
        if (!this.password) this.inputPass = true
      },
      verify(val) {
        if (val == 'username') {
          this.inputName = this.username ? false : true
        } else {
          this.inputPass = this.password ? false : true
        }
      },
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
      },
    }
  }

</script>
<style>
  #login {
    display: flex;
    justify-content: center;
  }

  .image img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
  }

  .login {
    width: 300px;
    background-color: rgba(41, 45, 62, 0.7);
    color: aliceblue;
    border-radius: 8px;
    padding: 50px;
    margin-top: 200px;
  }

  .login .header {
    text-align: center;
    font-size: 30px;
    line-height: 100px;
  }

  .login .input input {
    background-color: rgb(41, 45, 62);
    border: 0px;
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: aliceblue;
    outline: none;
  }

  .login .input-border {
    background-image: linear-gradient(to right, #e8198b, #3B65BB);
    height: 45px;
    width: 100%;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
  }

  .input-item {
    height: 70px;
  }

  .login .input-border .border {
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    border-radius: 25px;
    font-size: 14px;
  }

  .login .btn-login {
    width: 60%;
    border: 2px solid #3B65BB;
    margin: 0 auto;
    text-align: center;
    line-height: 40px;
    text-transform: uppercase;
    border-radius: 25px;
    cursor: pointer;
    transition: .3s;
  }

  .login .btn-login:hover {
    background-color: #3B65BB;
  }

  .input-message {
    text-align: left;
    font-size: 13px;
    color: #d33030;
  }

  .show-pwd {
    position: absolute;
    right: 30px;
    top: 0;
    font-size: 16px;
    color: aliceblue;
    cursor: pointer;
    user-select: none;
    z-index: 1000;
  }

</style>
