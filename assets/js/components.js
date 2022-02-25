// ----------------------------------------------------
//                COMPONENTS START
// ----------------------------------------------------

// Create a class for the element
class Submodule extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const title       = this.getAttribute('title');
    const lecture     = this.getAttribute('lecture');
    const lectureUrl  = this.getAttribute('lectureUrl');    
    const video       = this.getAttribute('video');
    const videoUrl    = this.getAttribute('videoUrl');
    const link        = this.getAttribute('link');    
    const linkUrl     = this.getAttribute('linkUrl');      
    const camtasia    = this.getAttribute('camtasia');    
    const camtasiaUrl = this.getAttribute('camtasiaUrl');
    const exercise    = this.getAttribute('exercise');
    const exerciseUrl = this.getAttribute('exerciseUrl');
    const test        = this.getAttribute('test');
    const testUrl     = this.getAttribute('testUrl');
    const optional    = this.getAttribute('optional');

    let lectureStr = '';
    if(lecture){
      lectureStr = `<a href="${lectureUrl}" class="text-decoration-none"> <i class="fab fa-slideshare"></i> ${lecture}</a><br />`;
    }
    let videoStr = '';
    if(video){
      videoStr = `<a href="${videoUrl}" class="text-decoration-none"><i class="fas fa-video"></i> ${video}</a><br />`;
    }
    let linkStr = '';
    if(link){
      linkStr = `<a href="${linkUrl}" class="text-decoration-none"> <i class="fas fa-link"></i> ${link}</a><br />`;
    }    
    let camtasiaStr = '';
    if(camtasia){
      camtasiaStr = `<a href="${camtasiaUrl}" class="text-decoration-none"><i class="fab fa-cuttlefish"></i> ${camtasia}</a><br />`;
    }
    let exerciseStr = '';
    if(exercise){
      exerciseStr = `<a href="${exerciseUrl}" class="text-decoration-none"> <i class="fas fa-tools"></i> ${exercise}</a><br />`;
    }
    let testStr = '';
    if(test){
      testStr = `<a href="${testUrl}" class="text-decoration-none"> <i class="fas fa-vial"></i> ${test}</a><br/>`;
    }    
    let optionalStr = '';
    if(optional){
      optionalStr = '<span style="color:red;">[OPTIONAL]</span>';
    }

    this.innerHTML = `
        <h5>${title} ${optionalStr}</h5>
        <p>
          ${lectureStr}
          ${videoStr}
          ${camtasiaStr}
          ${exerciseStr}
          ${linkStr}
          ${testStr}          
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

    // card header color - bootstrap colors
    let color = this.getAttribute('color');
    if (color) {
      color = `style="background-color: ${color}"`;
    }

    // <div class="card-header">Featured</div>
    //           <div  id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">          
    this.innerHTML = `
        <div class="card">
          <h5 class="card-header" ${color}>${title}</h5>
          <div class="collapse show" id="collapseExample">
            <div class="card-body">
              ${this.innerHTML}
            </div>
          </div>
        </div>
    `;    
  }
}

// Define the new element
customElements.define('mit-module', Module);


// Create a class for the element
class Certification extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // get attributes
    let title = this.getAttribute('title');
    let url   = this.getAttribute('url');
    let color = this.getAttribute('color');
    if (color) {
      color = `style="color:${color}"`;
    }

    this.innerHTML = `
      <a ${color} href="${url}">
        <h1 class="display-6">${title}</h1>
      </a>
    `;    
  }
}
// Define the new element
customElements.define('mit-cert', Certification);


// Create a class for the divider
class Divider extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // attribute content 
      const title = this.getAttribute('title');
  
      // card header color - bootstrap colors
      let color = this.getAttribute('color');
      if (color) {
        color = `style="background-color: var(--${color})`;
      }
  
      this.innerHTML = `
          <div class="card" id="accordion">
            <h5 class="card-header" ${color}">${title}</h5>
          </div>
      `;    
    }
}

// Define the new element
customElements.define('mit-divider', Divider);


// ----------------------------------------------------
//                COMPONENTS START
// ----------------------------------------------------
