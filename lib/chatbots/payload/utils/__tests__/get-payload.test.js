"use strict";

var _getPayload = require("../get-payload");

describe('getPayload', () => {
  const payloadList = ['GET_STARTED', 'CHATBOTS'];
  it('should get a payload from the list', () => {
    expect((0, _getPayload.getPayloadDefinition)(payloadList)('GET_STARTED')).toEqual('GET_STARTED');
  });
  it('should return undefined if no matching payload in the list', () => {
    expect((0, _getPayload.getPayloadDefinition)(payloadList)('NON_VALID_PAYLOAD')).toEqual(undefined);
  });
});