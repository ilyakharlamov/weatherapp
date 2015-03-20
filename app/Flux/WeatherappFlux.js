import {Flux} from 'flummox';
import WeatherappActions from './Actions/WeatherappActions';
import WeatherappStore from './Stores/WeatherappStore';

export default class WeatherappFlux extends Flux {
	constructor () {
		super();
		this.createActions('weatherapp', WeatherappActions);
		this.createStore('weatherapp', WeatherappStore, this);
	}
}
