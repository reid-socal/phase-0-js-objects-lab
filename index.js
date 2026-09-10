//Write your code here


const attendee = {
  attendeeId: "T001",
  name: "alice smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150
};

function logAttendeeName() {
  console.log(attendee.name);
}

function logTicketPrice() {
  console.log(attendee.ticketPrice);
}

function updateTicketType(newType) {
  attendee.ticketType = newType;
}

function removeEventProperty() {
  delete attendee.event;
}

function addCheckedInProperty() {
  attendee.checkedIn = true;
}



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};