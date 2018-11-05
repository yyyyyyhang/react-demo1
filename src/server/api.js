/**
 * Created by Apple on 2018/10/30.
 */
import http from './http'

var login = (data) => {return http.get('./data/one.json?' + new Date().getTime(), data)}

export {login}