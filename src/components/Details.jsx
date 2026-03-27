
import {Box, Typography, styled} from '@mui/material';
import {LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud} from '@mui/icons-material'
const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    display: 'block',
    '& > svg':{
        marginRight: 10
    }
});
const Error =styled(Typography)({
    color: 'red',
    margin: 50,
    padding: 20
});
const VerticalBox=styled(Box)({
    display: 'block'
});
const Details = ({result}) => {
    const toFahrenheit = (celsius)=>{
        return celsius*9/5+32;
    };
    return(
        result && Object.keys(result).length > 0 ?
        <Box fontStyle={{margin: '30px 60x'}}>
            <VerticalBox>
            <Row><LocationOn/>Location: {result.name}, {result.sys.Country}</Row>
            <Row><SettingsBrightness/>Temperature in Celsius: {result.main.temp} </Row>
            <Row><SettingsBrightness/>Temperature in Fahrenheit : {toFahrenheit(result.main.temp).toFixed(2)} </Row>
            <Row><Opacity/>Humidity: {result.main.humidity}</Row>
            <Row><Brightness5/>Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6/>Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
            <Row><Dehaze/>Condition: {result.weather[0].main}</Row>
            <Row><Cloud/>Clouds: {result.clouds.all}%</Row>
            </VerticalBox>
        </Box>
        : <Error>Please enter the values to check weather</Error>
    )
}

export default Details;