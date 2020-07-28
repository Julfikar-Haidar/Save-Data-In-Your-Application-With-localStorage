import React, { Component } from 'react';


class LocalSave extends Component{

    setData(){

        localStorage.setItem('mydata', 'Something went wrong here')
    }
    getData(){
        let  data = localStorage.getItem('mydata')
        console.log(data)
    }

    render(){
        return (
            <div className="container">

                <p>Save Data In My Application With localStorage</p>
                <button onClick={() => this.setData()}>Set Data</button>
                <button onClick={ () => this.getData()}>Get Data</button>
            </div>
        )
    }
    
}

export  default LocalSave;