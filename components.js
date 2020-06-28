// Create a class for the element
class Submodule extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const title       = this.getAttribute('title');
    const video       = this.getAttribute('video');
    const videoUrl    = this.getAttribute('videoUrl');
    const camtasia    = this.getAttribute('camtasia');    
    const camtasiaUrl = this.getAttribute('camtasiaUrl');
    const exercise    = this.getAttribute('exercise');
    const exerciseUrl = this.getAttribute('exerciseUrl');
    const test        = this.getAttribute('test');
    const testUrl     = this.getAttribute('testUrl');    

    this.innerHTML = `
        <h5>${title}</h5>
        <p>
          <a href="${videoUrl}"><i class="fas fa-video"></i> ${video}</a><br />
          <a href="${camtasiaUrl}"><i class="fab fa-cuttlefish"></i> ${camtasia}</a><br />            
          <a href="${exerciseUrl}"> <i class="fas fa-tools"></i> ${exercise}</a><br />
          <a href="${testUrl}"> <i class="fas fa-vial"></i> ${test}</a><br/>
        </p>
    `;    

  }
}

// Define the new element
customElements.define('mit-submodule', Submodule);


// Create a class for the element
class Module extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const title = this.getAttribute('title');

    this.innerHTML = `
        <div class="card">
          <h5 class="card-header">${title}</h5>
          <div class="card-body">
            ${this.innerHTML}
          </div>
        </div>
    `;    
  }
}

// Define the new element
customElements.define('mit-module', Module);
