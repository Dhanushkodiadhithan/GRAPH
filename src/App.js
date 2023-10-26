import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const App = () =>{
    const options ={
        chart:{
            type:'column',
        },
        title:{
            text:'ABSENTIES OF STUDENTS'
        },
        xAxis:{
            categories:['MON','TUE','WED','THU','FRI','SAT','SUN']
        },
        yAxis:{
            title:{
                text:'NO OF STUDENTS'
            },
        },
        series:[
            {
                name:'BOYS',
                data:[5,13,7,2,11,19,33],
                color:'yellow',
            },
            {
                name:'GIRLS',
                data:[12,8,14,3,6,20,33],
                color:'blue',
            }
        ],
    };
    return(
        <>
            <HighchartsReact highcharts={Highcharts} options={options}/>
        </>
    );
};
export default App;