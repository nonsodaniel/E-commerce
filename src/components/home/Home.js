import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions/cartAction'

class Home extends Component {
    state = {
        data: this.props.item
    }

    handleAddCart = (id) => {
        this.props.addToCart(id)
    }

    render() {
        let { items } = this.state.data
        console.log(items)
        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {items.length ? (
                            items.map(o => {
                                console.log(o)
                                return (
                                    <div className="col-md-4" key={o.id}>
                                        <div className="card mb-4 box-shadow">
                                            <img className="card-img-top" alt="Thumbnailss [100%x225]" style={{ height: "225px", width: "100%", display: "block" }} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16b65af3411%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16b65af3411%22%3E%3Crect%20width%3D%22208%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                                            <div className="card-body">
                                                <p className="card-text">{o.desc}.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-success"><span className="badge" onClick={() => { this.handleAddCart(o.id) }}>Add to cart</span></button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                    </div>
                                                    <small className="text-muted">${o.price}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                                <p>Loading data</p>
                            )

                        }




                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)