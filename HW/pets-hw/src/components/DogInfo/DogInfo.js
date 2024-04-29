import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

export const DogInfo = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Домашний питомец: собака
      </Typography>
      <Typography paragraph>
        Собаки - прекрасные домашние животные, которые приносят радость и верность своим хозяевам.
        Вот некоторая базовая информация о собаках:
      </Typography>
      <Typography variant="h5">Характеристики</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Продолжительность жизни: в среднем 10-15 лет" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Размеры: от карликовых пород до гигантских" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Характер: зависит от породы, но обычно дружелюбные и преданые" />
        </ListItem>
      </List>
      <Typography variant="h5">Уход</Typography>
      <Typography paragraph>
        Собаки требуют определенного ухода для здоровья и счастья. Это включает в себя:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Прогулки и физическая активность" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Правильное питание" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Регулярные посещения ветеринара" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Обучение и социализация" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Уход за шерстью и гигиена" />
        </ListItem>
      </List>
      <Typography variant="h5">Породы</Typography>
      <Typography paragraph>
        Существует множество пород собак, каждая со своими уникальными чертами и характером.
        Некоторые из популярных пород включают:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Лабрадор ретривер" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Немецкая овчарка" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Йоркширский терьер" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Бульдог" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Чихуахуа" />
        </ListItem>
      </List>
      <Typography paragraph>
        Выбор породы зависит от ваших предпочтений и образа жизни.
      </Typography>
    </Container>
  );
};