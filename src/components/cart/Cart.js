import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeItem, addQuantity, subtractQuantity } from '../store/actions/cartAction'

class Cart extends Component {


    handleRemove = (id) => {
        this.props.removeItem(id)
    }
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {
        console.log("My props", this.props)
        let { addedItems } = this.props.cart;
        console.log(addedItems)
        return (
            <div className="mb-8">
                <h3 className="text-center">My cart</h3>
                <div className="col-md-10" style={{ margin: "0 auto" }}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addedItems.length ? (
                                    addedItems.map(o => {
                                        console.log(o)
                                        return (
                                            <tr key={o.id}>
                                                <th scope="row">{o.id}</th>
                                                <td>{o.title}</td>
                                                <td>{o.quantity}</td>
                                                <td>{o.price}</td>
                                                <td onClick={() => { this.handleAddQuantity(o.id) }}>+</td>
                                                <td onClick={() => { this.handleRemove(o.id) }}>X</td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                        <tr>
                                            <td>No data</td>
                                        </tr>
                                    )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("The state", state)
    return {
        cart: { ...state }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)