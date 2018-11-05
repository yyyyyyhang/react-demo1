/**
 * Created by Apple on 2018/10/29.
 */
import React, {Component} from 'react';
import http from '../../server/http';
import {login} from '../../server/api'
import axios from 'axios'
import './isHead.scss'

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
                login(data).then((res)=>{
                    console.log(res)
                })

            }

            componentDidMount() {
                this.getStudentList()
            }

            render() {
                return (
                    <div className="headBox">
                        <span className="headLeftBtn">返回</span>
                        <span className="headCentTitle">所有</span>
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
