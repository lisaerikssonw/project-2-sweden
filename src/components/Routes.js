import React, { Component } from 'react'
import Segment from './Segment'
import './App.css'

class Routes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expandMode: false
        }

        this.editExpandMode = this.editExpandMode.bind(this)
    }

    editExpandMode() {
        this.setState({
            expandMode: !this.state.expandMode
        })
    }

    render(){


        if (this.state.expandMode === false) {
            return (
            
                <tr className="routes" onClick={this.editExpandMode}>
                    <td>{this.props.depPlace}</td>
                    <td>{this.props.arrPlace}</td>
                    <td>{
                        this.props.segments.map(v => {
                            return this.props.vehicles[this.props.segments[this.props.segments.indexOf(v)].vehicle].name + ", "
                        }
                        )}
                    </td>
                    <td>{this.props.durationHours}</td>
                    <td>{this.props.price}</td>
                    <td>{this.props.miles}</td>
                    <td>{this.props.segments.length}</td>
                </tr>
            )
        } else {
            return (
                [  <tr className="routes" onClick={this.editExpandMode}>
                        <td>{this.props.depPlace}</td>
                        <td>{this.props.arrPlace}</td>
                        <td>{
                            this.props.segments.map(v => {
                                return this.props.vehicles[this.props.segments[this.props.segments.indexOf(v)].vehicle].name + ", "
                            }
                            )}
                        </td>
                        <td>{this.props.durationHours}</td>
                        <td>{this.props.price}</td>
                        <td>{this.props.miles}</td>
                        <td>{this.props.segments.length}</td>
                    </tr>,

                    <Segment 
                    segments={this.props.segments}
                    places={this.props.places}
                    vehicles={this.props.vehicles} />
                    

                ]
            )
        }
    }
}

export default Routes