// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/posts/posts';
import PostLoadingComponent from './components/posts/postLoading';
import axiosInstance from './axios';
import {
	MenuItem,
	FormControl,
	Select,
	Card,
	CardContent,
	Divider,
  } from "@material-ui/core";
  import InfoBox from "./components/InfoBox";
  import LineGraph from "./components/LineGraph";
  import Table from "./components/Table";
  import { sortData, prettyPrintStat } from "./components/util";
  import numeral from "numeral";
  import Map from "./components/Map";
  import "leaflet/dist/leaflet.css";



function App() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});
	const [country, setInputCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [countries, setCountries] = useState([]);
    const [mapCountries, setMapCountries] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
    const [mapZoom, setMapZoom] = useState(3);


	useEffect(() => {
		fetch("https://disease.sh/v3/covid-19/all")
		  .then((response) => response.json())
		  .then((data) => {
			setCountryInfo(data);
		  });
	  }, []);
	
	  useEffect(() => {
		const getCountriesData = async () => {
		  fetch("https://disease.sh/v3/covid-19/countries")
			.then((response) => response.json())
			.then((data) => {
			  const countries = data.map((country) => ({
				name: country.country,
				value: country.countryInfo.iso2,
			  }));
			  let sortedData = sortData(data);
			  setCountries(countries);
			  setMapCountries(data);
			  setTableData(sortedData);
			});
		};
	
		getCountriesData();
	  }, []);
	
	  console.log(casesType);
	
	  const onCountryChange = async (e) => {
		const countryCode = e.target.value;
	
		const url =
		  countryCode === "worldwide"
			? "https://disease.sh/v3/covid-19/all"
			: `https://disease.sh/v3/covid-19/countries/${countryCode}`;
		await fetch(url)
		  .then((response) => response.json())
		  .then((data) => {
			setInputCountry(countryCode);
			setCountryInfo(data);
			setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
			setMapZoom(4);
		  });
	  };
	


	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
	return (
		// <div className="App">
		// 	<h1>Smart Covid Dashboard</h1>
			
		// </div>
		<div className="App1">
			
		
		  <div className="app__header">
			<h2>Smart Covid Dashboard</h2>
			<FormControl className="app__dropdown">
			  <Select
				variant="outlined"
				value={country}
				onChange={onCountryChange}
			  >
				<MenuItem value="worldwide">Worldwide</MenuItem>
				{countries.map((country) => (
				  <MenuItem value={country.value}>{country.name}</MenuItem>
				))}
			  </Select>
			</FormControl>
		  </div>
		  <div className="app__left">
		  <div className="app__stats">
			<InfoBox
			  onClick={(e) => setCasesType("cases")}
			  title="Coronavirus Cases"
			  isRed
			  active={casesType === "cases"}
			  cases={prettyPrintStat(countryInfo.todayCases)}
			  total={numeral(countryInfo.cases).format("0.0a")}
			/>
			<InfoBox
			  onClick={(e) => setCasesType("recovered")}
			  title="Recovered"
			  active={casesType === "recovered"}
			  cases={prettyPrintStat(countryInfo.todayRecovered)}
			  total={numeral(countryInfo.recovered).format("0.0a")}
			/>
			<InfoBox
			  onClick={(e) => setCasesType("deaths")}
			  title="Deaths"
			  isRed
			  active={casesType === "deaths"}
			  cases={prettyPrintStat(countryInfo.todayDeaths)}
			  total={numeral(countryInfo.deaths).format("0.0a")}
			/>
		  </div>
		  <Map
			countries={mapCountries}
			casesType={casesType}
			center={mapCenter}
			zoom={mapZoom}
		  />
		</div>
		<Card>
		<CardContent>
			<div className="app__information">
			  <h3>Covid Care DashBoard</h3>
			  <PostLoading isLoading={appState.loading} posts={appState.posts} />
			  </div>
			</CardContent>

		</Card>
		
		
		
		<Card className="app__right">
		  <CardContent>
			<div className="app__information">
			  <h3>Live Cases by Country</h3>
			  <Table countries={tableData} />
			  </div>
			</CardContent>
			 <CardContent>
			 <div className="app__information">
			  <h3>Worldwide new {casesType}</h3>
			  <LineGraph casesType={casesType} />
			</div>
		  </CardContent>
		</Card>
		{/* <PostLoading isLoading={appState.loading} posts={appState.posts} />	 */}
		 
	  </div>
	  
	  
	);
}
export default App;
