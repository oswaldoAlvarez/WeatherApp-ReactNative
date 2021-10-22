import { conectApi } from './conectApi';

export const getCityWeather = async (city: string) => {
  try {
    const response = await conectApi.get('/weather', {
      headers: {
        'x-rapidapi-key': '20e2c3eb2amsh662669d3d2bf9fep19af9cjsn552378143119',
      },
      params: { q: city, units: 'metric' },
    });

    const climas: any = response.data;

    // console.log(JSON.stringify(climas, null, 4));

    return climas;
  } catch (error) {
    console.error('Error al conseguir ciudad, vuelva a intentarlo!');
  }
};

export const getCityWeatherOnWeek = async (city: string) => {
  try {
    const response = await conectApi.get('/forecast', {
      headers: {
        'x-rapidapi-key': '20e2c3eb2amsh662669d3d2bf9fep19af9cjsn552378143119',
      },
      params: { q: city, units: 'metric' },
    });

    const climas_en_5dias: any = response.data;

    // console.log(JSON.stringify(climas_en_5dias, null, 4));

    return climas_en_5dias;
  } catch (error) {
    console.error('Error al conseguir el clima de la semana!', error);
  }
};
