/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the USqlExternalDataSourceList class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL external datasource item list.
 *
 */
function USqlExternalDataSourceList() {
}

util.inherits(USqlExternalDataSourceList, Array);

/**
 * Defines the metadata of USqlExternalDataSourceList
 *
 * @returns {object} metadata of USqlExternalDataSourceList
 *
 */
USqlExternalDataSourceList.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'USqlExternalDataSourceList',
    type: {
      name: 'Composite',
      className: 'USqlExternalDataSourceList',
      modelProperties: {
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        },
        value: {
          required: false,
          readOnly: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'USqlExternalDataSourceElementType',
                type: {
                  name: 'Composite',
                  className: 'USqlExternalDataSource'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = USqlExternalDataSourceList;
