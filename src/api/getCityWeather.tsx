import { conectApi, key } from './conectApi';
import { climaCiudad } from '../interfaces/generalInterfaces';

export const getCityWeather = async (city: string) => {
  try {
    const response = await conectApi.get('/weather', {
      headers: {
        'x-rapidapi-key': `${key}`,
      },
      params: { q: city, units: 'metric' },
    });

    const climas: climaCiudad | any = response.data;

    // console.log(JSON.stringify(climas, null, 4));

    return climas;
  } catch (error) {
    console.error('Error al conseguir ciudad o conexión con el endpoint, vuelva a intentarlo!');
  }
};

export const getCityWeatherOnWeek = async (city: string) => {
  try {
    const response = await conectApi.get('/forecast', {
      headers: {
        'x-rapidapi-key': `${key}`,
      },
      params: { q: city, units: 'metric' },
    });

    const climas_en_5dias: any = response.data;

    // console.log(JSON.stringify(climas_en_5dias, null, 4));

    return climas_en_5dias;
  } catch (error) {
    console.error('Error al conseguir el clima de la semana o conexión con el endpoint, vuelva a intentarlo!', error);
  }
};
