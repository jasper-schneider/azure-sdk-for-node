/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PartitionHealthReplicaHealthStatesItem class.
 * @constructor
 * The states of the replica health
 * @member {number} [healthEvents]
 * 
 * @member {string} [partitionId]
 * 
 * @member {string} [replicaId]
 * 
 * @member {string} [aggregatedHealthState] Possible values include:
 * 'Invalid', 'Ok', 'Warning', 'Error', 'Unknown'
 * 
 */
function PartitionHealthReplicaHealthStatesItem() {
}

/**
 * Defines the metadata of PartitionHealthReplicaHealthStatesItem
 *
 * @returns {object} metadata of PartitionHealthReplicaHealthStatesItem
 *
 */
PartitionHealthReplicaHealthStatesItem.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PartitionHealth_ReplicaHealthStatesItem',
    type: {
      name: 'Composite',
      className: 'PartitionHealthReplicaHealthStatesItem',
      modelProperties: {
        healthEvents: {
          required: false,
          serializedName: 'HealthEvents',
          type: {
            name: 'Number'
          }
        },
        partitionId: {
          required: false,
          serializedName: 'PartitionId',
          type: {
            name: 'String'
          }
        },
        replicaId: {
          required: false,
          serializedName: 'ReplicaId',
          type: {
            name: 'String'
          }
        },
        aggregatedHealthState: {
          required: false,
          serializedName: 'AggregatedHealthState',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PartitionHealthReplicaHealthStatesItem;
