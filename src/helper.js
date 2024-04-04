(function () {
    const Helper = function () {

        // const path = require('path');
        const fs = require('fs-extra');
        // const crypto = require('crypto');
        // const lodash = require('lodash');
        // const knex = require('knex');
        // const { v4: uuidv4 } = require('uuid');

        const dayjs = require('dayjs');
        const utc = require('dayjs/plugin/utc');
        const tz = require('dayjs/plugin/timezone');
        const advancedFormat = require('dayjs/plugin/advancedFormat');
        dayjs.extend(utc).extend(tz).extend(advancedFormat);

        // /*******************
        //  * Default Utility *
        //  *******************/
        Helper.prototype.isNull = function (val) {
            return (typeof val === 'undefined' || val == null);
        }

        // Helper.prototype.isDev = () => {
        //     return (this.isNull(process.env['ENVIRONMENT']) || process.env['ENVIRONMENT'] === 'dev');
        // };

        // Helper.prototype.containsKeywords = (str, keywords) => {
        //     return keywords.some((keyword) => str.includes(keyword));
        // };

        // Helper.prototype.hasKeywords = function (str, keywords) {
        //     return this.containsKeywords(str, keywords);
        // };

        // Helper.prototype.listFilter = function (srcArr, criteriaArr, key) {
        //     return lodash.filter(srcArr, (item) => lodash.includes(criteriaArr, item[key]));
        // };

        // Helper.prototype.generateUUID = function () {
        //     return uuidv4();
        // };

        // Helper.prototype.lowerCaseObjectValues = function (z) {
        //     return Object.keys(z).reduce((n, k) => ((n[k] = z[k].toLowerCase()), n), {});
        // };

        // Helper.prototype.round = function (value, precision) {
        //     return lodash.round(value, precision);
        // };

        // Helper.prototype.isFiniteNumber = function (val) {
        //     return !this.isNull(val) && !isNaN(val) && isFinite(val);
        // };

        // Helper.prototype.generateRandomValue = function (len) {
        //     return crypto
        //         .randomBytes(Math.ceil(len / 2))
        //         .toString('hex') // convert to hexadecimal format
        //         .slice(0, len); // return required number of characters
        // };

        // Helper.prototype.checkArrayforMatches = function (arr1, arr2) {
        //     if (Array.isArray(arr1) && arr1.length > 0 && Array.isArray(arr2) && arr2.length > 0) {
        //         for (let item of arr1) {
        //             if (arr2.indexOf(item) > -1) {
        //                 return true;
        //             }
        //         }
        //     }
        //     return false;
        // };

        // Helper.prototype.arrayToCSV = function (arr) {
        //     if (Array.isArray(arr) && arr.length > 0) {
        //         let data = '';
        //         var keys = lodash.keys(arr[0]);
        //         data = keys.join(';') + '\n';
        //         for (let row of arr) {
        //             let datarow = [];
        //             for (let key of keys) {
        //                 datarow.push(row[key]);
        //             }
        //             data = data + datarow.join(';') + '\n';
        //         }
        //         return data;
        //     } else {
        //         return '';
        //     }
        // };

        // Helper.prototype.cleanProperty = function (propertyValue, propertyType) {
        //     switch (propertyType) {
        //         case 'float':
        //             if (propertyValue) {
        //                 propertyValue = parseFloat(propertyValue);
        //                 if (isNaN(propertyValue)) {
        //                     propertyValue = 0;
        //                 }
        //             } else {
        //                 propertyValue = 0;
        //             }
        //             break;
        //         case 'int':
        //             if (propertyValue) {
        //                 propertyValue = parseInt(propertyValue);
        //                 if (isNaN(propertyValue)) {
        //                     propertyValue = 0;
        //                 }
        //             } else {
        //                 propertyValue = 0;
        //             }
        //             break;
        //         case 'string':
        //             if (propertyValue) {
        //                 propertyValue = propertyValue.toString().replace(/\s+/g, ' ').trim();
        //             } else {
        //                 propertyValue = '';
        //             }
        //             break;
        //         case 'uppercase':
        //             if (propertyValue) {
        //                 propertyValue = propertyValue.toString().trim().toUpperCase();
        //             } else {
        //                 propertyValue = '';
        //             }
        //             break;
        //     }
        //     return propertyValue;
        // };

        // Helper.prototype.toProperCase = function (str) {
        //     return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        // };


        // /********************
        //  * DayJS Utility    *
        //  ********************/
        // Helper.prototype.getDayJS = () => {
        //     return dayjs;
        // };

        // Helper.prototype.createDate = function (d, f) {
        //     return ((this.isNull(f) || f === '') ? dayjs(d) : dayjs(d, f));
        // };

        // Helper.prototype.addDays = function (startDate, days) {
        //     if (!(startDate instanceof Date && !isNaN(startDate))) {
        //         //Parse 1st parameters as string
        //         startDate = new Date(startDate);
        //         if (!(startDate instanceof Date && !isNaN(startDate))) {
        //             //Could not parse, default to current date
        //             startDate = new Date();
        //         }
        //     }
        //     return new Date().setDate(startDate.getDate() + parseInt(days));
        // };

        // Helper.prototype.daysBetween = function (startDate, endDate, format = '') {
        //     let diffDays = null;
        //     startDate = this.createDate(startDate, format);
        //     endDate = this.createDate(endDate, format);
        //     if (startDate.isValid() && endDate.isValid()) {
        //         diffDays = endDate.diff(startDate, 'days');
        //     }
        //     return diffDays;
        // };

        // /***********************
        //  * SQL Knex Utility    *
        //  ***********************/
        // Helper.prototype.getKnexFromConnection = function (connection) {
        //     const conn = { ...connection };
        //     delete conn.name;
        //     if (this.isNull(conn.timezone)) {
        //         conn.timezone = 'UTC';
        //     }
        //     conn.multipleStatements = true;
        //     if (!this.isNull(conn.ssl) && connection.name === 'productionscheduler') {
        //         if (!this.isNull(conn.ssl.ca) && (typeof (conn.ssl.ca) === 'string')) {
        //             conn.ssl.ca = fs.readFileSync(path.join(conn.ssl.ca));
        //         }
        //         if (!this.isNull(conn.ssl.key) && (typeof (conn.ssl.key) === 'string')) {
        //             conn.ssl.key = fs.readFileSync(path.join(conn.ssl.key));
        //         }
        //         if (!this.isNull(conn.ssl.cert) && (typeof (conn.ssl.cert) === 'string')) {
        //             conn.ssl.cert = fs.readFileSync(path.join(conn.ssl.cert));
        //         }
        //     }
        //     return knex({ client: 'mysql2', connection: conn, pool: { min: 0, max: 10 } });
        // };

        return this;
    };
    module.exports = Helper;
})();