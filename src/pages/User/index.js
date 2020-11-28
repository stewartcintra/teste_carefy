import React from 'react';
import {View, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../../components/Button';

import NoPicture from '../../assets/images/no_picture.png';

import {
  Container,
  Content,
  ContainerDashboard,
  ContainerPicture,
  Image,
  Card,
  Text,
} from './styles';

import {signOut} from '../../store/modules/auth/actions';

export default function User() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  async function handleLogout() {
    return Alert.alert('Carefy', 'Deseja sair do aplicativo?', [
      {text: 'SIM', onPress: () => dispatch(signOut())},
      {text: 'NÃO', onPress: null},
    ]);
  }

  return (
    <Container>
      <Content>
        <Card>
          <ContainerDashboard>
            <ContainerPicture>
              <Image source={user?.picture ? {uri: user.picture} : NoPicture} />
            </ContainerPicture>
          </ContainerDashboard>
          <View style={{marginTop: -20}}>
            <Text>{user?.name}</Text>
            <Text>{user?.email}</Text>
          </View>
        </Card>

        <View style={{flex: 1}} />

        <View style={{height: 20}} />

        <Button radius text="SAIR" onPress={handleLogout} />
      </Content>
    </Container>
  );
}
