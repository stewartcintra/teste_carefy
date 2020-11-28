import React, {useState, useRef} from 'react';
import {Image, Keyboard, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {signInRequest} from '../../store/modules/auth/actions';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content, ContainerImage} from './styles';

import Logo from '../../assets/images/logo.png';

export default function Login() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const passwordRef = useRef();

  async function handleLogin() {
    if (email.length < 5 || !email.includes('@') || !email.includes('.')) {
      return Alert.alert('Erro', 'Informe um email válido!');
    }

    if (password.length < 5) {
      return Alert.alert('Erro', 'Informe uma senha válida!');
    }

    Keyboard.dismiss();

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Content>
        <ContainerImage>
          <Image source={Logo} style={{height: 120, width: 120}} />
        </ContainerImage>

        <Input
          label="Email:"
          iconLeft="email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />

        <Input
          label="Senha:"
          iconLeft="lock"
          iconRight={passwordVisible ? 'eye' : 'eye-off'}
          iconRightPress={() => setPasswordVisible(!passwordVisible)}
          placeholder="Digite seu email"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          returnKeyType="send"
          ref={passwordRef}
          onSubmitEditing={handleLogin}
        />

        <Button text="Entrar" radius onPress={handleLogin} loading={loading} />
      </Content>
    </Container>
  );
}
