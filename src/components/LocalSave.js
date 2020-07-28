import React, { Component } from 'react';


class LocalSave extends Component{

    setData(){
        let obj = {name: 'julfikar', age: 25, email: 'julfikar@email.com'}
        // localStorage.setItem('mydata', 'Something went wrong here')
        localStorage.setItem('mydata', JSON.stringify(obj))

        // session storage
        sessionStorage.setItem('mySession', JSON.stringify(obj))
    }
    getData(){
        let  data = localStorage.getItem('mydata')
        data = JSON.parse(data)
        console.log(data)
         // session storage
        let val = sessionStorage.getItem('mySession')
        val = JSON.parse(val)
        console.log(val)
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