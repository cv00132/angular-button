import angular from 'angular';

import { CounterController } from '../controllers/counter';

angular
  .module('app', [])
  .controller('CounterController', CounterController);
