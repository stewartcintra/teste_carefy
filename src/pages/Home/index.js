import React from 'react';
import {FlatList, View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

import {Container, Card, Text, ContainerEmpty, TextEmpty} from './styles';
import {colors} from '../../commonStyle';

import ButtonFloat from '../../components/ButtonFloat';

import {tasksRemove} from '../../store/modules/tasks/actions';

export default function Home({navigation}) {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.tasks);

  function handleRemoveTask({id, task}) {
    Alert.alert('Deseja remover a tarefa?', task, [
      {text: 'SIM', onPress: () => dispatch(tasksRemove(id))},
      {text: 'NÃO', onPress: () => null},
    ]);
  }

  function emptyComponent() {
    return (
      <ContainerEmpty>
        <Icon name="emoticon-excited-outline" size={80} color={colors.grey} />
        <TextEmpty>Comece adicionando suas tarefas aqui.</TextEmpty>
      </ContainerEmpty>
    );
  }

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        ListEmptyComponent={emptyComponent}
        ListFooterComponent={<View style={{height: 100}} />}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <Card onPress={() => handleRemoveTask(item)}>
            <Text>{item.task}</Text>
          </Card>
        )}
      />

      <ButtonFloat onPress={() => navigation.navigate('NewTask')} />
    </Container>
  );
}
