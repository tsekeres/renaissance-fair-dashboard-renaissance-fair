const staffButton = () => {
  const domString = `<div id="staff-container">
                        <div class="card staff-button-card" style="width: 18rem;">
                          <img src=".." class="card-img-top top" alt="Staff">
                        <div class="card-body middle">
                          <h5 class="card-title">Staff Card</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary" id="staff-view">Staff View</a>
                        </div>
                      </div>
                    </div>`;
  document.querySelector('#content-container').innerHTML += domString;
};

export default staffButton;