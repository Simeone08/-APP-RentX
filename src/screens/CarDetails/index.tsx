import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { 
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Acessories,
    Footer
 } from './styles';
import { CarDTO } from '../../dtos/carDTO';

 interface Params {
  car: CarDTO;
 }

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental(){
    navigation.navigate('Scheduling', { car });
  }

  function handleBack(){
    navigation.goBack();
  }

  return (
    <Container>
        <Header>
            <BackButton onPress={handleBack} />
        </Header>

        <CarImages>
          <ImageSlider 
            imagesUrl={car.photos}
          />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>{car.brand}</Brand>
              <Name>{car.name}</Name>
            </Description>

            <Rent>
              <Period>{car.rent.period}</Period>
              <Price>R$ {car.rent.price}</Price>
            </Rent>
          </Details>

          <Acessories>
            {
              car.accessories.map(accessory => (
                <Acessory 
                  key={accessory.type}
                  name={accessory.name} 
                  icon={getAccessoryIcon(accessory.type)}
                />
            ))
            }
          </Acessories>

          <About>{car.about}</About>
        </Content>

        <Footer>
          <Button title='Escolher período do aluguel' onPress={handleConfirmRental}/>
        </Footer>

    </Container>
  );
}