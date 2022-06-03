<template>
    <div>
        <b-container>
            <img src="~/assets/login_logo.png" alt />

            <div class="login">
                <b-form @submit="doLogin">
                    <b-form-group id="user" label="Usuário" label-for="user-input"
                        description="Insira o seu nome de usuário (e-mail)." label-align="left">
                        <b-form-input id="user-input" v-model="login.username" type="text" required
                            placeholder="Nome de usuário"></b-form-input>
                    </b-form-group>

                    <b-form-group id="pwd" label="Senha" label-for="pwd-input" label-align="left"
                        description="Insira a sua senha.">
                        <b-form-input id="pwd-input" v-model="login.pwd" type="password" required
                            placeholder="Senha de login"></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="success">Entrar</b-button>
                </b-form>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "Login",

    data() {
        return {
            login: {
                // username: "",
                // pwd: "",
                username: "gustavo_veras@ifsp.edu.br",
                pwd: "1234",
            },
        };
    },

    methods: {
        doLogin(event) {
            event.preventDefault();

            // Apenas para testes
            // if (!this.login.username) {
            //     this.login = {
            //         username: "gustavo_veras@ifsp.edu.br",
            //         pwd: "1234",
            //     }
            // };

            this.$axios
                .post("http://localhost:5000/login", this.login)
                .then((response) => {
                    console.log(response.data);
                    console.log(response);
                    this.$router.push("/");
                })
                .catch((error) => {
                    console.error("Não foi possível realizar o Login");
                    console.error(error);
                });
        },
    },
}

</script>

<style>
img {
    /* margin-top: 50px; */
    margin: 50px auto 0 auto;
    display: block;
    width: 40%;
}

.login {
    font-size: 1.5rem;
    width: 500px;
    margin: 20px auto 0px auto;
    padding: 50px 50px 20px 50px;
    border-radius: 20px;
    background-color: #cdeefb;
}

.login button {
    background-color: rgb(98, 202, 202);
    border-color: gray;
}
</style>
