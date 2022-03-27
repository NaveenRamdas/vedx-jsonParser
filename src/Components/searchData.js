import React, { Component } from "react";

class SearchApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleChange(event) {
        // Get event value
        let searchValue = event.target.value;

        // Set the state to trigger a re-rendering
        this.setState({ search: searchValue });
    }
    render() {
        // Filter the table data
        let orders = this.props.data,
            searchString = this.state.search.trim().toLowerCase();
        console.log("Orders",orders)
        if (searchString.length > 0) {
            // We are searching. Filter the results.
            orders = orders.filter((e) => e.name.toLowerCase().match(searchString));
        }
        // Set the `update` property of the `UserInput` element
        return (
            <div>
                <UserInput update={(e) => this.handleChange(e)} />
                <Table data={orders} />
            </div>
        )
    }
}

// UserInput component
class UserInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            <input className="form-control mb-2" placeholder="Search ..." onChange={(e) => this.props.update(e)} />
        </div>)
    }
}

// Simple TableRow component for showing a <tr>
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.orderId}</td>
                <td>{this.props.customer}</td>
                <td>{this.props.address}</td>
                <td>{this.props.product_title}</td>
                <td>{this.props.date}</td>
                <td>{this.props.status}</td>
            </tr>)
    }
};

class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>ORDER ID</th>
                            <th>CUSTOMER</th>
                            <th>ADDRESS</th>
                            <th>PRODUCT</th>
                            <th>Date order</th>
                            <th>STATUS</th>
                        </tr>
                        {this.props.list.map(function (item) {
                            return <TableRow key={'order-' + item.order_id}
                                orderId={item.order_id}
                                customer={item.customer}
                                address={item.address}
                                product_title={item.product_title}
                                date={item.date}
                                status={item.status}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SearchApp;