import { v4 as uuidv4 } from "uuid";

// Template JSON
const templateJson = {
  eventId: uuidv4(),
  reqId: uuidv4(),
  leadId: uuidv4(),
  type: "InputValidation",
  version: 1,
  data: {
    lead: {
      affId: 56,
      firstName: "test",
      lastName: "test",
      email: "test12@jjjtest.com",
      ip: "91.80.29.13",
      phone: "+493023890",
      password: "ab132546464",
      offer: {
        name: "bitcoin code",
        url: "google.com",
        key: "COIN",
        description: "this is bitcoin code funnel",
        typeId: 1,
        lang: "EN",
      },
      extraInfo: {
        clickId: "ab-123",
        subSource: 20,
        affSub_1: "demmy",
        affSub_2: "demmy",
        affSub_3: "demmy",
        affSub_4: "demmy",
        affSub_5: "demmy",
        affSub_6: "demmy",
        affSub_7: "demmy",
        affSub_8: "demmy",
        affSub_9: "demmy",
        affSub_10: "demmy",
      },
    },
    inputValidation: {
      status: false,
      msg: "AffId not exist",
      data: null,
    },
  },
  createdAt: new Date().getTime(),
};

// Generate 60 more JSON objects
const jsonObjects = [templateJson]; // Start with the template
for (let i = 0; i < 60; i++) {
  // Create a copy of the template and modify its properties
  const newJson = { ...templateJson };
  newJson.eventId = uuidv4();
  newJson.reqId = uuidv4();
  newJson.leadId = uuidv4();
  newJson.data.lead.affId = Math.floor(Math.random() * 1000) + 1;
  newJson.data.lead.email = `random${i + 1}@example.com`;
  newJson.data.inputValidation.msg = `Random Message ${i + 1}`;

  jsonObjects.push(newJson);
}

export default jsonObjects;
