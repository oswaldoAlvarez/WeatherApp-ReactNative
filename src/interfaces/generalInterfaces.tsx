export interface appStateProps {
  children: React.ReactNode;
}

export interface climaCiudad {
  weather: [
    {
      main: string;
      description: string;
    },
  ];
  main: {
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  name: string;
}
