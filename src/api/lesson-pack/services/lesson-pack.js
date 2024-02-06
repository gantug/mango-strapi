'use strict';

/**
 * lesson-pack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lesson-pack.lesson-pack');
