import { registerApplication, start } from "single-spa";
import {runScript} from './utils'

const hashPrefix = prefix => location => location.hash.startsWith(`#${prefix}`);

System.import('single-spa').then(function () {

  registerApplication(
  'home',
  () => {
    return System.import('http://localhost:4200/main.js');
  },
    hashPrefix('/home')
  )

registerApplication(
  'enroll',
  () => {
    return System.import('http://localhost:4201/main.js');
  },
    hashPrefix('/enroll')
)

registerApplication(
  'display',
  () => {
    return System.import('http://localhost:4202/main.js');
  },
    hashPrefix('/display')
)

start();
})
