/** Variables **/
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const clearBtn = document.querySelector('input[type="button"][name="clear"]');
const checkAllBtn = document.querySelector('input[type="button"][name="check"]');
const unCheckAllBtn = document.querySelector('input[type="button"][name="uncheck"]');
const items = JSON.parse(localStorage.getItem('items')) || [];
const emptyList = '<li>Loading Tapas...</li>';
/** Variables **/

/** Common **/
function updateLocalStorage(myItems) {
  localStorage.setItem('items', JSON.stringify(myItems));
}
/** Common **/

/** Array Manipulation & DOM Updates **/
function addItemToList(item, domPlateList) {
  const lastId = items.length > 0 ? items[items.length - 1].id : 0;
  const plate = {
    id: lastId + 1,
    label: item,
    done: false,
    qty: 1
  }
  items.push(plate);
  updateLocalStorage(items);
  let currentList = items.length > 1 ? domPlateList.innerHTML : '';
  currentList += `
    <li data-index=${plate.id}>
      <input type="checkbox" data-index=${plate.id} id="item${plate.id}" ${plate.done ? 'checked' : ''} />
      <label for="item${plate.id}">${plate.label}</label>
      <span class="qty">${plate.qty}</span>
    </li>
  `;
  domPlateList.innerHTML = currentList;
};

function updateItemInList(itemIndex) {
  items[itemIndex].qty++;
  updateLocalStorage(items);
  document.querySelector(`.plates li[data-index="${items[itemIndex].id}"] span.qty`).textContent = items[itemIndex].qty;
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate) => {
    return `
      <li data-index=${plate.id}>
        <input type="checkbox" data-index=${plate.id} id="item${plate.id}" ${plate.done ? 'checked' : ''} />
        <label for="item${plate.id}">${plate.label}</label>
        <span class="qty">${plate.qty}</span>
      </li>
    `;
  }).join('');
}
/** Array Manipulation & DOM Updates **/

/** Event Listeners **/
function handleSubmit(e) {
  e.preventDefault();
  const textValue = this.querySelector("[name=item").value;
  const checkIfThere = items.findIndex((ite) => (ite.label.toLowerCase() === textValue.toLowerCase()));
  if (checkIfThere !== -1) {
    updateItemInList(checkIfThere, itemsList);
  } else {
    addItemToList(textValue, itemsList);
  }
  this.reset();
}

function handleItemClick(e) {
  if (!e.target.matches('input')) return;
  const itemIndex = items.findIndex((ite) => (ite.id.toString() === e.target.dataset.index.toString()));
  items[itemIndex].done = !items[itemIndex].done;
  updateLocalStorage(items);
}

function handleClear(e) {
  if (items.length === 0) return;
  items.splice(0, items.length);
  updateLocalStorage(items);
  e.target.form.reset();
  itemsList.innerHTML = emptyList;
}

function handleCheck(e) {
  if (items.length === 0) return;
  items.map((plate) => plate.done = (this.dataset.check === "true") ? true : false);
  updateLocalStorage(items);
  populateList(items, itemsList);
}
/** Event Listeners **/

addItems.addEventListener('submit', handleSubmit);
itemsList.addEventListener('click', handleItemClick);
clearBtn.addEventListener('click', handleClear);
checkAllBtn.addEventListener('click', handleCheck);
unCheckAllBtn.addEventListener('click', handleCheck);

populateList(items, itemsList);