/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the ResourceGroup class.
 * @constructor
 * Resource group information.
 * @member {string} [id] Gets the ID of the resource group.
 * 
 * @member {string} [name] Gets or sets the Name of the resource group.
 * 
 * @member {object} [properties]
 * 
 * @member {string} [properties.provisioningState] Gets resource group
 * provisioning state.
 * 
 * @member {string} location Gets or sets the location of the resource group.
 * It cannot be changed after the resource group has been created. Has to be
 * one of the supported Azure Locations, such as West US, East US, West
 * Europe, East Asia, etc.
 * 
 * @member {object} [tags] Gets or sets the tags attached to the resource
 * group.
 * 
 */
function ResourceGroup() {
}

/**
 * Defines the metadata of ResourceGroup
 *
 * @returns {object} metadata of ResourceGroup
 *
 */
ResourceGroup.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResourceGroup',
    type: {
      name: 'Composite',
      className: 'ResourceGroup',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        properties: {
          required: false,
          serializedName: 'properties',
          type: {
            name: 'Composite',
            className: 'ResourceGroupProperties'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ResourceGroup;