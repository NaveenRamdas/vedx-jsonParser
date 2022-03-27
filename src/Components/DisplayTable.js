import React, { Component } from "react";

class DisplayTable extends React.Component {

    constructor(props) {
            super(props)
            this.state ={
                list:[]
            }

            this.callAPI = this.callAPI.bind(this)
            this.callAPI();
    }

    callAPI(){

        fetch("https://my-json-server.typicode.com/Ved-X/assignment/orders").then(
            (response) => response.json()
        ).then((data) => {      
            console.log(data)
            this.setState({
                list: data
            })
        })
    }

    render() {
        let tb_data = this.state.list.map((item) => {
            console.log("Item",item)
            return (
                <tr key={item.order_id}>
                    <td>{item.order_id}</td>
                    <td>{item.customer}</td>
                    <td>{item.address}</td>
                    <td>{item.product_title}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                </tr>
            )
        })
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ORDER ID</th>
                            <th>CUSTOMER</th>
                            <th>ADDRESS</th>
                            <th>PRODUCT</th>
                            <th>Date order</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody id="myTable">
                        {tb_data}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default DisplayTable;