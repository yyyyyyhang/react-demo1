/**
 * Created by Apple on 2018/10/29.
 */
import React, {Component} from 'react';
import http from '../../server/http';
import {login} from '../../server/api'
import axios from 'axios'

class HeadComponent extends Component {
    render() {
        class TryData extends React.Component {
            state = {
                url: ''
            }

            getStudentList() {
                let data= {
                    "a": '0200220',
                    "b": '99999',
                    "c": '8888888888'
                }
                // http.get("../../data/one.json", data).then((res) => {
                //
                // })
                // let data={
                //     "a":'1',
                //     "b":'2',
                //     "c":'3'
                // }
                login(data).then((res)=>{
                    console.log(res)
                })
                // axios.get("./data/one.json").then((res)=>{
                //
                // }).catch((error)=>{
                //
                // })
                // console.log(res)
                this.setState({
                    url: "../../data/favicon.ico"
                })
            }

            componentDidMount() {
                this.getStudentList()
            }

            render() {
                return (
                    <div>
                        <h1>111111111111111</h1>
                        < img src={this.state.url} alt=""/>
                    </div>
                )
            }
        }
        return (

            <TryData></TryData>
        )

    }
}

export
default
HeadComponent
