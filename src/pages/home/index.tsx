import React, { useState } from 'react';
import { FiKey, FiUser } from 'react-icons/fi';
import BaseLayout from '../../components/baseLoyout/BaseLayout';
import Botao from '../../components/botao';
import CampoTexto from '../../components/campoTexto';
import Login from './components/Login';
import Register from './components/Register';
import { ContainerLanding, Form } from './style';
import { signIn } from 'next-auth/client';
import Loading from '../../components/loading';

export default function Home() {
    const [openLogin, setOpenLogin] = useState(false);
    const [openCadastro, setOpenCadastro] = useState(false);
    const [infoLogin, setInfoLogin] = useState({ valor: '', erro: false, textoErro: '' });
    const [senha, setSenha] = useState({ valor: '', erro: false, textoErro: '' });
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState({ valor: '', erro: false, textoErro: '' });

    async function logar(e: any) {
        e.preventDefault();
        setLoading(true);
        // var response = {data:{
        //     email:'',
        //     error:'',
        //     user:'',
        //     password:'',
        // }};
        var isEmail = false;
        if (!infoLogin.valor) {
            setInfoLogin({ valor: '', erro: true, textoErro: 'Campo obrigatório' });
            setLoading(false);
            return null;
        }
        if (!senha.valor) {
            setSenha({ valor: '', erro: true, textoErro: 'Campo obrigatório' });
            setLoading(false);
            return null;
        }
        var letras = infoLogin.valor.split('');

        isEmail = letras.some((letra) => letra === '@');

        try {
            const response = await signIn('credentials', {
                user: email.valor,
                password: senha.valor,
                // The page where you want to redirect to after a
                // successful login
                callbackUrl: `${window.location.origin}`,
                redirect: true
            });
            console.log(response);
        } catch (err) {
            console.log(err);
        }

        // if(isEmail){
        //     try{
        //         response = await api.post('login',{
        //             email:infoLogin.valor,
        //             password:senha.valor
        //         });
        //     }catch{
        //         setLoading(false);
        //         alert('Erro no servidor!');
        //     }
        // }else{
        //     try{
        //         response = await api.post('login',{
        //             user:infoLogin.valor,
        //             password:senha.valor
        //         });
        //     }catch{
        //         alert('Erro no servidor!');
        //     }
        // }
        // if(response.data.error){
        //     if(response.data.email){
        //         setInfoLogin({valor:infoLogin.valor,erro:true,textoErro:"Email inválido"});

        //     }
        //     if(response.data.user){
        //         setInfoLogin({valor:infoLogin.valor,erro:true,textoErro:"Usuário inválido"});

        //     }
        //     if(response.data.password){
        //         setSenha({valor:usuario.valor,erro:true,textoErro:"Senha incorreta"});
        //     }
        //     setLoading(false);
        //     return null;
        // }
        // localStorage.setItem('token', response.data.token);
        setLoading(false);
        // router.push("/search");
    }

    return (
        <BaseLayout>
            {/* <Login isOpen={openLogin} onClose={() => setOpenLogin(false)} /> */}
            <Register isOpen={openCadastro} onClose={() => setOpenCadastro(false)} />
            <ContainerLanding>
                <section>
                    <img src="pddt.png" alt="Logo" />
                    <div>
                        <Form onSubmit={(e) => logar(e)}>
                            <CampoTexto
                                type="text"
                                placeholder="Email ou usuário"
                                value={infoLogin.valor}
                                onChange={(e: any) =>
                                    setInfoLogin({
                                        valor: e.target.value,
                                        erro: false,
                                        textoErro: infoLogin.textoErro
                                    })
                                }
                                error={infoLogin.erro}
                                textError={infoLogin.textoErro}>
                                <FiUser size="18" color="151515" />
                            </CampoTexto>
                            <CampoTexto
                                type="password"
                                placeholder="Senha"
                                value={senha.valor}
                                onChange={(e: any) =>
                                    setSenha({
                                        valor: e.target.value,
                                        erro: false,
                                        textoErro: senha.textoErro
                                    })
                                }
                                error={senha.erro}
                                textError={senha.textoErro}>
                                <FiKey size="15" color="151515" />
                            </CampoTexto>
                            <Botao type="submit">{loading ? <Loading /> : 'Entrar'}</Botao>
                        </Form>
                        {/* <Botao onClick={() => setOpenLogin(true)}>Login</Botao> */}
                        <p>
                            Não tem uma conta?{' '}
                            <button onClick={() => setOpenCadastro(true)}>Cadastra-se</button>
                        </p>
                    </div>
                </section>
            </ContainerLanding>
        </BaseLayout>
    );
}
