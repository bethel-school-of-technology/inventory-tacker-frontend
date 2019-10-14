import React from 'react';
import ReactDOM from 'react-dom';

const m110Price = React.createElement('li', {}, '$100.00');
const m110 = React.createElement('ul', {}, m110Price);

const m350Price = React.createElement('li', {}, '$150.00');
const m350 = React.createElement('ul', {}, m350Price);

const m230Price = React.createElement('li', {}, '$125.00');
const m230 = React.createElement('ul', {}, m230Price);

const m140Price = React.createElement('li', {}, '$110.00');
const m140 = React.createElement('ul', {}, m140Price);

const m250Price = React.createElement('li', {}, '$200.00');
const m250 = React.createElement('ul', {}, m250Price);

const p60vPrice = React.createElement('li', {}, '$250.00');
const p60v = React.createElement('ul', {}, p60vPrice);

const m40vPrice = React.createElement('li', {}, '$200.00');
const m40v = React.createElement('ul', {}, m40vPrice);

const m80vPrice = React.createElement('li', {}, '$230.00');
const m80v = React.createElement('ul', {}, m80vPrice);

const t110Price = React.createElement('li', {}, '$350.00');
const t110 = React.createElement('ul', {}, t110Price);

const z334ePrice = React.createElement('li', {}, '$400.00');
const z334e = React.createElement('ul', {}, z334ePrice);


ReactDOM.render(
  React.createElement(
    'ul',
    {},
    React.createElement('li', {}, 'MoneyMower M110 140-cc 21in Gas Push Lawn Mower', m110),
    React.createElement('li', {}, 'MoneyMower M350 175-cc 23-in Self-Propelled Gas Lawn Mower', m350),
    React.createElement('li', {}, 'MoneyMower M230 163-cc 210in Self-propelled Gas Lawn Mower', m230),
    React.createElement('li', {}, 'MoneyMower M140 160-cc 21-in Gas Push Lawn Mower', m140),
    React.createElement('li', {}, 'MoneyMower M250 160-cc 21-in Self-propelled Gas Lawn Mower', m250),
    React.createElement('li', {}, 'MoneyMower Pro 60-volt Brushless Lithium Ion 21-in Cordless Electric Lawn Mower', p60v),
    React.createElement('li', {}, 'MoneyMower 40-volt Lithium Ion 16-in Cordless Electric Lawn Mower', m40v),
    React.createElement('li', {}, 'MoneyMower 80-volt Brushless Lithium Ion 21-in Cordless Electric Lawn Mower', m80v),
    React.createElement('li', {}, 'MoneyMower T110 17.5-HP Manual/Gear 42-in Riding Lawn Mower', t110),
    React.createElement('li', {}, 'MoneyMower Deer Z334E 20-HP V-twin Dual Hydrostatic 42-in Zero-turn Lawn Mower with Mulching Capability', z334e)
  ),
  document.getElementById('root')
);