import React, {useState} from 'react';
import {View, Keyboard, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import uuid from 'react-native-uuid';
import moment from 'moment';

import Button from '../../components/Button';

import {Container, Content, Label, DateText, Input} from './styles';

import {tasksAdd} from '../../store/modules/tasks/actions';

export default function NewTask() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [task, setTask] = useState('');
  const [date, setDate] = useState(new Date());

  async function handleAddTask() {
    if (task.length < 3) {
      return Alert.alert(
        'Ops',
        'Sua tarefa tem que ter mais que 3 caracteres!',
      );
    }

    Keyboard.dismiss();

    const data = {
      id: uuid.v1(),
      task,
      date,
    };

    dispatch(tasksAdd(data));

    navigation.goBack();
  }

  return (
    <Container>
      <Content>
        <Label>Digite sua tarefa:</Label>
        <Input
          autoFocus
          autoCapitalize="characters"
          autoCorrect={false}
          maxLength={50}
          placeholder="Digite aqui sua tarefa"
          value={task}
          onChangeText={setTask}
          returnKeyType="send"
          onSubmitEditing={handleAddTask}
        />

        <View style={{height: 20}} />

        <DateText>{moment(date).format('DD/MM/YYYY - HH:mm:ss')}</DateText>

        <View style={{height: 10}} />

        <Button text="Adicionar" onPress={handleAddTask} radius />
      </Content>
    </Container>
  );
}
