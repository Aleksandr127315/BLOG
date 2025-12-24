import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { API_KEY_OPEN_WEATHER } from '../../constants';

const FooterContainer = ({ className }) => {
	const [city, setSity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=${API_KEY_OPEN_WEATHER}`,
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setSity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>merzlikina730@gmail.com</div>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				{temperature} °C, {weather}
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	font-weight: bold;
	background-color: #fff;
	box-shadow: 0 2px 17px #000;
`;
