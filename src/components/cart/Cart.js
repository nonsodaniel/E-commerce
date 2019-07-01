import React, { Component } from 'react'
import { connect } from 'react-redux';

class Cart extends Component {

    render() {
        // console.log("My props", this.props)
        let { addedItems } = this.props;
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addedItems.length ? (
                                    addedItems.map(o => {
                                        console.log(o)
                                        return (
                                            // <tr>
                                            //     <th scope="row">{o.id}</th>
                                            //     <td>{o.</td>
                                            //     <td>Otto</td>
                                            //     <td>@mdo</td>
                                            // </tr>
                                            <p></p>
                                        )
                                    })
                                ) : (
                                        <div>No data</div>
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

export default connect(mapStateToProps)(Cart)