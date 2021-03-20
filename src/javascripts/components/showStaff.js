const showStaff = (array) => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '<button class="btn" id="add-newStaff-btn">Add Staff<span class="button-icon"><i class="fas fa-user-friends"></i></span></button>';
  array.forEach((item) => {
    document.querySelector('#content-container').innerHTML += `
    <div id="staffContainer" class="item card border-0 bg-transparent" style="width: 20rem;">
      <img class="card-img-top pinImg top" src="${item.staff_image}" alt="${item.first_name}">
      <div class="card-body staffInfo middle">
        <h5 class="card-title text-dark">${item.first_name}</h5>
        <p class="staffDescription">${item.role}</p>
        <button class="btn btn-info" data-toggle="modal" data-target="#formModal" title="Edit ${item.first_name}" id="edit-staff-btn--${item.firebaseKey}"><i class="fas fa-edit"></i></button>
        <button class="btn btn-danger" title="Remove ${item.first_name}" id="delete-staff--${item.firebaseKey}"><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>`;
  });
};

const emptyStaff = () => {
  document.querySelector('#content-container').innerHTML = '<h1>No Staff</h1>';
};

export { showStaff, emptyStaff };
