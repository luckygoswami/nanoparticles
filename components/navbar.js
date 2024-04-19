class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <a href="index.html">Home</a>
        <a href="applications.html">Applications</a>
        <a href="innovations.html">Innovations</a>
        <a href="nanosafety.html">Nanosafety</a>
        <a href="resources.html">Resources</a>
      </nav>
    `;
  }
}

customElements.define("header-nav", Header);
