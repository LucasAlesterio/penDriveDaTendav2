import { useState } from 'react';
import CampoTexto from '../../../components/campoTexto';
import Loading from '../../../components/loading';
import PopUp from '../../../components/popUp';
import { Form } from '../style';
import { signIn } from 'next-auth/client';
import Botao from '../../../components/botao';
import { FiKey, FiUser } from 'react-icons/fi';

interface Props {
    onClose: () => void;
    isOpen: boolean;
}
export default function Login({ onClose, isOpen }: Props) {
    const [infoLogin, setInfoLogin] = useState({ valor: '', erro: false, textoErro: '' });
    const [loading, setLoading] = useState(false);
    const [senha, setSenha] = useState({ valor: '', erro: false, textoErro: '' });
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
        onClose();
        // router.push("/search");
    }
    return (
        <PopUp title="Login" open={isOpen} onClose={() => onClose()}>
            {!loading ? (
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
                    <br />
                    <Botao type="submit">Entrar</Botao>
                </Form>
            ) : (
                <Loading />
            )}
        </PopUp>
    );
}
