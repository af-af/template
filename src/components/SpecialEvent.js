import '../App.css';
import React, { useState, useEffect, useContext } from 'react';

const events = {
  SHOP: 'shop',
};

export default function SpecialEvent(event) {
  const eventString = event.event;
  if (events.SHOP === eventString) {
    return (
      <input type="button" value="alert the shopkeeper" />
    );
  }
  return (<></>);
}
