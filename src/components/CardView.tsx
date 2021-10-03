import React from 'react';
import { Card, Avatar, Title, Paragraph } from 'react-native-paper';
interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onPress?(): void;
  user?: {
    username: string;
    email: string;
  }
}

const CardView = ({ title, description, imageUrl, onPress, user }: CardProps) => {
  return <Card onPress={() => onPress && onPress()}>
    {!!user && (
      <Card.Title
        title={user.username}
        subtitle={user.email}
        left={props => (
          <Avatar.Icon
            {...props}
            style={{ backgroundColor: 'lightblue' }}
            color='#fff'
            size={42}
            icon={'image'}
          />)}
      />
    )}
    <Card.Cover source={{ uri: imageUrl || 'https://picsum.photos/700' }}/>
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </Card.Content>
  </Card>;
};
export default CardView;
