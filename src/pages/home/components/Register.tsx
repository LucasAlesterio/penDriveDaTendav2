import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiAtSign, FiKey, FiMail, FiUser } from 'react-icons/fi';
import Botao from '../../../components/botao';
import CampoTexto from '../../../components/campoTexto';
import Inputfoto from '../../../components/inputFoto';
import PopUp from '../../../components/popUp';
import api from '../../../services/api';
import { Form } from '../style';

interface Props {
    onClose: () => void;
    isOpen: boolean;
}
export default function Register({ onClose, isOpen }: Props) {
    const [foto, setFoto] = useState('');
    const [nome, setNome] = useState({ valor: '', erro: false, textoErro: '' });
    const [usuario, setUsuario] = useState({ valor: '', erro: false, textoErro: '' });
    const [email, setEmail] = useState({ valor: '', erro: false, textoErro: '' });
    const [senha, setSenha] = useState({ valor: '', erro: false, textoErro: '' });
    const [confirmarSenha, setConfirmarSenha] = useState({ valor: '', erro: false, textoErro: '' });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function cadastrar(e: any) {
        e.preventDefault();
        setLoading(true);
        console.log(foto);
        var response = {
            data: {
                email: '',
                error: '',
                user: '',
                password: '',
                photo: '',
                token: ''
            }
        };
        if (!nome.valor) {
            setNome({ valor: '', erro: true, textoErro: 'Campo obrigatório' });
            setLoading(false);
            return null;
        }
        if (!email.valor) {
            setEmail({ valor: '', erro: true, textoErro: 'Campo obrigatório' });
            setLoading(false);
            return null;
        }
        if (!usuario.valor) {
            setUsuario({ valor: '', erro: true, textoErro: 'Campo obrigatório' });
            setLoading(false);
            return null;
        }
        if (!senha.valor) {
            setSenha({ valor: '', erro: true, textoErro: 'Campo obrigatório' });
            setLoading(false);
            return null;
        }
        if (senha.valor.length < 8) {
            setSenha({
                valor: senha.valor,
                erro: true,
                textoErro: 'Necessário no minimo 8 caracteres'
            });
            setLoading(false);
            return null;
        }
        if (!confirmarSenha.valor) {
            setConfirmarSenha({ valor: '', erro: true, textoErro: 'Campo obrigatório' });
            setLoading(false);
            return null;
        }
        if (senha.valor !== confirmarSenha.valor) {
            setConfirmarSenha({
                valor: confirmarSenha.valor,
                erro: true,
                textoErro: 'Senhas não coincidem'
            });
            setLoading(false);
            return null;
        }
        try {
            response = await api.post('addUser', {
                name: nome.valor,
                email: email.valor,
                password: senha.valor,
                user: usuario.valor,
                photograph: foto
            });
        } catch {
            alert('Erro no servidor!');
        }
        if (response.data.error) {
            if (response.data.email) {
                setEmail({ valor: email.valor, erro: true, textoErro: 'Email ja cadastrado' });
            }
            if (response.data.user) {
                setUsuario({
                    valor: usuario.valor,
                    erro: true,
                    textoErro: 'Usuário ja cadastrado'
                });
            }
            if (response.data.photo) {
                alert('Erro ao carregar a foto, tente novamente!');
            }
            setLoading(false);
            return null;
        }
        localStorage.setItem('token', response.data.token);
        onClose();
        router.push('/search');
    }
    return (
        <PopUp title="Cadastro" open={isOpen} onClose={() => onClose()}>
            <Form onSubmit={(e) => cadastrar(e)}>
                <Inputfoto onChange={(e) => setFoto(e)} value={foto} />
                <CampoTexto
                    type="text"
                    placeholder="Nome"
                    value={nome.valor}
                    onChange={(e: any) =>
                        setNome({
                            valor: e.target.value,
                            erro: false,
                            textoErro: nome.textoErro
                        })
                    }
                    error={nome.erro}
                    textError={nome.textoErro}>
                    <FiUser size="18" color="151515" />
                </CampoTexto>
                <CampoTexto
                    type="email"
                    placeholder="Email"
                    value={email.valor}
                    onChange={(e: any) =>
                        setEmail({
                            valor: e.target.value,
                            erro: false,
                            textoErro: email.textoErro
                        })
                    }
                    error={email.erro}
                    textError={email.textoErro}>
                    <FiMail size="18" color="151515" />
                </CampoTexto>
                <CampoTexto
                    type="text"
                    placeholder="Usuário"
                    value={usuario.valor}
                    onChange={(e: any) =>
                        setUsuario({
                            valor: e.target.value,
                            erro: false,
                            textoErro: usuario.textoErro
                        })
                    }
                    error={usuario.erro}
                    textError={usuario.textoErro}>
                    <FiAtSign size="18" color="151515" />
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
                    <FiKey size="18" color="151515" />
                </CampoTexto>
                <CampoTexto
                    type="password"
                    placeholder="Confirmar senha"
                    value={confirmarSenha.valor}
                    onChange={(e: any) =>
                        setConfirmarSenha({
                            valor: e.target.value,
                            erro: false,
                            textoErro: confirmarSenha.textoErro
                        })
                    }
                    error={confirmarSenha.erro}
                    textError={confirmarSenha.textoErro}>
                    <FiKey size="18" color="151515" />
                </CampoTexto>
                <br />
                <Botao type="submit">Cadastrar</Botao>
            </Form>
        </PopUp>
    );
}
