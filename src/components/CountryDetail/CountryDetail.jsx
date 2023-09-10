import CountryData from "../CountrySpec/CountryData";

const CountryDetail = (props) => {
    return (
        <div>
            <h4>Country Details:</h4>
            <hr />
            {/* <CountryData
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;
