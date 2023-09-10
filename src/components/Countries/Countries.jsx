import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    const handleVisitedCountries = (country) => {
        console.log("add this to visited country");
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
        console.log(visitedCountries);
    };

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    };

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h5>Visited countries: {visitedCountries.length}</h5>
                <ul>
                    {visitedCountries.map((country) => (
                        <li key={country.cca3}>{country.name.common}</li>
                    ))}
                </ul>
            </div>
            {/* visited flags */}
            <div className="flag-container">
                {visitedFlags.map((flag, index) => (
                    <img src={flag} key={index}></img>
                ))}
            </div>
            {/* display countries */}
            <div className="countries-container">
                {countries.map((country) => (
                    <Country
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}
                    ></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
