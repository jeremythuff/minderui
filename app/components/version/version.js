'use strict';

angular.module('Minder.version', [
  'Minder.version.interpolate-filter',
  'Minder.version.version-directive'
])

.value('version', '0.1');
